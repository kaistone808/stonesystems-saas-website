import { NextRequest, NextResponse } from 'next/server';

const REQUEST_TYPES = [
  'Right to know/access',
  'Delete',
  'Correct',
  'Portability',
  'Opt-out of sale/sharing',
  'Limit use of sensitive PI',
  'Appeal denied request',
] as const;

const ACTING_AS = ['Self', 'Authorized agent'] as const;

type RequestType = (typeof REQUEST_TYPES)[number];
type ActingAs = (typeof ACTING_AS)[number];

type IntakePayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  state: string;
  requestType: RequestType;
  additionalDetails?: string;
  actingAs: ActingAs;
  verificationConfirmed: boolean;
};

type RawIntakePayload = Partial<
  IntakePayload & {
    requestType: string;
    actingAs: string;
    verify: string;
  }
>;

type TrackingRecord = {
  requestId: string;
  dateReceived: string;
  name: string;
  email: string;
  state: string;
  requestType: string;
  ackBy: string;
  respondBy: string;
  status: string;
  userAgent: string;
};

type TrackingAdapter = {
  append: (record: TrackingRecord) => Promise<void>;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inMemoryRateLimitStore = new Map<string, { count: number; resetAt: number }>();

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addBusinessDays(startDate: Date, businessDays: number) {
  const result = new Date(startDate);
  let added = 0;
  while (added < businessDays) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();
    if (day !== 0 && day !== 6) {
      added += 1;
    }
  }
  return result;
}

function addCalendarDays(startDate: Date, calendarDays: number) {
  const result = new Date(startDate);
  result.setDate(result.getDate() + calendarDays);
  return result;
}

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  return request.ip || 'unknown';
}

async function checkRateLimit(ip: string) {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (upstashUrl && upstashToken) {
    const key = `privacy-request:${ip}`;
    const headers = { Authorization: `Bearer ${upstashToken}` };

    const incrementRes = await fetch(`${upstashUrl}/incr/${key}`, { headers, cache: 'no-store' });
    if (!incrementRes.ok) {
      throw new Error('Unable to validate rate limit');
    }
    const incrementData = (await incrementRes.json()) as { result: number };
    const count = incrementData.result;

    if (count === 1) {
      await fetch(`${upstashUrl}/expire/${key}/3600`, { headers, cache: 'no-store' });
    }

    return count <= 5;
  }

  const now = Date.now();
  const current = inMemoryRateLimitStore.get(ip);
  if (!current || current.resetAt < now) {
    inMemoryRateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  current.count += 1;
  inMemoryRateLimitStore.set(ip, current);
  return current.count <= 5;
}

function createAirtableAdapter(): TrackingAdapter {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'DSARs';

  if (!apiKey || !baseId) {
    throw new Error('Airtable configuration missing');
  }

  return {
    async append(record: TrackingRecord) {
      const endpoint = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records: [{ fields: record }] }),
        cache: 'no-store',
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`Airtable write failed: ${message}`);
      }
    },
  };
}

function createGoogleSheetsAdapter(): TrackingAdapter {
  return {
    async append() {
      throw new Error('Google Sheets adapter is not implemented yet');
    },
  };
}

function createTrackingAdapter(): TrackingAdapter {
  const adapter = (process.env.DSAR_TRACKING_ADAPTER || 'airtable').toLowerCase();
  if (adapter === 'google-sheets') {
    return createGoogleSheetsAdapter();
  }
  return createAirtableAdapter();
}

function normalizeRequestType(input: string): RequestType | '' {
  if (!input) return '';
  if (REQUEST_TYPES.includes(input as RequestType)) return input as RequestType;

  const normalized = input.trim().toLowerCase();
  if (normalized === 'opt-out' || normalized === 'opt out') {
    return 'Opt-out of sale/sharing';
  }

  return '';
}

function normalizeActingAs(input: string): ActingAs | '' {
  if (!input) return '';
  if (ACTING_AS.includes(input as ActingAs)) return input as ActingAs;

  const normalized = input.trim().toLowerCase();
  if (normalized === 'self') return 'Self';
  if (normalized === 'authorized agent' || normalized === 'authorized_agent') {
    return 'Authorized agent';
  }

  return '';
}

function parseAndValidatePayload(raw: unknown): { data?: IntakePayload; error?: string } {
  if (!raw || typeof raw !== 'object') {
    return { error: 'Invalid request body' };
  }

  const body = raw as RawIntakePayload;
  const firstName = (body.firstName || '').trim();
  const lastName = (body.lastName || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const state = (body.state || '').trim();
  const requestType = normalizeRequestType((body.requestType || '').trim());
  const additionalDetails = (body.additionalDetails || '').trim();
  const actingAs = normalizeActingAs((body.actingAs || '').trim());
  const verificationConfirmed = !!body.verificationConfirmed || body.verify === 'on';

  if (!firstName || !lastName || !email || !state || !requestType || !actingAs) {
    return { error: 'Missing required fields' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { error: 'Invalid email format' };
  }
  if (!requestType) {
    return { error: 'Invalid request type' };
  }
  if (!actingAs) {
    return { error: 'Invalid acting as value' };
  }
  if (!verificationConfirmed) {
    return { error: 'Verification confirmation is required' };
  }

  return {
    data: {
      firstName,
      lastName,
      email,
      phone,
      state,
      requestType,
      additionalDetails,
      actingAs,
      verificationConfirmed,
    },
  };
}

async function sendEmail({ to, subject, text }: { to: string; subject: string; text: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL || 'noreply@stonesystems.io';

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is missing');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend failed: ${message}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAllowed = await checkRateLimit(getClientIp(request));
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again in about an hour.' },
        { status: 429 }
      );
    }

    const json = (await request.json()) as unknown;
    const { data, error } = parseAndValidatePayload(json);
    if (!data) {
      return NextResponse.json({ error: error || 'Invalid input' }, { status: 400 });
    }

    const now = new Date();
    const ackBy = addBusinessDays(now, 10);
    const respondBy = addCalendarDays(now, 45);
    const submittedAt = now.toISOString();
    const referenceId = `DSAR-${now.getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    const intakeBody = `Reference ID: ${referenceId}
Submitted At: ${submittedAt}
Request Type: ${data.requestType}

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
State: ${data.state}
Acting As: ${data.actingAs}
Verification Confirmed: ${data.verificationConfirmed ? 'Yes' : 'No'}

Additional Details:
${data.additionalDetails || 'N/A'}

Computed Deadlines:
- Acknowledge by: ${formatDate(ackBy)} (10 business days)
- Respond by: ${formatDate(respondBy)} (45 calendar days)

Request Metadata:
- User Agent: ${userAgent}
- Timestamp: ${submittedAt}
`;

    await sendEmail({
      to: 'privacy@stonesystems.io',
      subject: `[DSAR] ${data.requestType} - ${data.firstName} ${data.lastName}`,
      text: intakeBody,
    });

    await sendEmail({
      to: data.email,
      subject: 'Your privacy request has been received',
      text: `Hi ${data.firstName},

We received your privacy request and assigned reference ID ${referenceId}.

What to expect:
- We will acknowledge your request within 10 business days.
- We will provide a response within 45 calendar days.

If we need additional verification details, we will contact you at this email address.

Thank you,
Stone Systems Privacy Team`,
    });

    const adapter = createTrackingAdapter();
    await adapter.append({
      requestId: referenceId,
      dateReceived: submittedAt,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      state: data.state,
      requestType: data.requestType,
      ackBy: formatDate(ackBy),
      respondBy: formatDate(respondBy),
      status: 'New',
      userAgent,
    });

    return NextResponse.json({ success: true, referenceId });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to process request';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
