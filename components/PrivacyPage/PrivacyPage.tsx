import { Title, Container, Text } from '@mantine/core';
import classes from './PrivacyPage.module.css';
import { getPolicyReviewInfo } from '@/lib/policyReview';

export function PrivacyPage() {
  const review = getPolicyReviewInfo('2026-05-07');

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle} order={1}>
          Privacy Policy
        </Title>
        <div>
          <Text className={classes.text} fw={600}>
            Effective Date: May 7, 2026
            <br />
            Last Updated: {review.lastUpdated}
            <br />
            Last Reviewed: {review.lastReviewed}
            <br />
            Next Review Due: {review.nextReviewDue}
          </Text>

          <Text className={classes.text}>
            This Privacy Policy describes how <strong>Stonesystems LLC</strong> (&quot;Stone
            Systems,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
            discloses your information when you respond to our advertisements, visit our websites -
            including <strong>stonesystems.io</strong>, <strong>grow.stonesystems.io</strong>, and{' '}
            <strong>app.stonesystems.io</strong> (collectively, the &quot;Sites&quot;) - contact us,
            or use our products and services (the &quot;Services&quot;). It also tells you about
            your privacy rights and how the law protects you. By using the Services, you agree to
            the collection and use of information in accordance with this Privacy Policy.
          </Text>
          <Text className={classes.text}>
            This Policy includes specific disclosures required by the laws of California, Colorado,
            Connecticut, Oregon, Texas, Virginia, and other states with comprehensive consumer
            privacy laws.
          </Text>
          <Text className={classes.text}>
            If you have questions, contact us at <strong>privacy@stonesystems.io</strong> or{' '}
            <strong>(808) 645-4509</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            1. Quick Summary
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              We collect contact information, business information, payment information, and online
              activity data.
            </li>
            <li className={classes.listItem}>
              We use it to deliver our Services, market to prospective customers, and run our
              business.
            </li>
            <li className={classes.listItem}>
              We share it with service providers, advertising partners, and as required by law.
            </li>
            <li className={classes.listItem}>
              We do <strong>not</strong> sell personal information for money. We <strong>do</strong>{' '}
              share certain information with advertising partners for cross-context behavioral
              advertising - you can opt out at any time.
            </li>
            <li className={classes.listItem}>We record sales, onboarding, and support calls.</li>
            <li className={classes.listItem}>
              You have rights to access, delete, correct, and limit how we use your information. See{' '}
              <strong>Section 12</strong> to exercise them.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            2. Mobile Communication Policy
          </Title>
          <Text className={classes.text}>
            We value your privacy and are committed to protecting your personal information. When
            you provide your mobile number, you consent to receive SMS messages related to our
            services, including notifications, account communications, and (if you opt in) marketing
            offers. Your mobile opt-in <strong>will not</strong> be shared with third parties for
            marketing purposes.
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any message to opt out at any
              time.
            </li>
            <li className={classes.listItem}>
              <strong>Help:</strong> Reply <strong>HELP</strong> for support.
            </li>
            <li className={classes.listItem}>
              <strong>Frequency:</strong> Message frequency varies based on your interactions with
              us.
            </li>
            <li className={classes.listItem}>
              <strong>Cost:</strong> Standard message and data rates apply per your carrier&apos;s
              terms.
            </li>
          </ul>
          <Text className={classes.text}>
            Phone numbers may be processed by service providers (such as our SMS sender and CRM,
            GoHighLevel) only to deliver the messages you have consented to receive.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            3. Information We Collect
          </Title>
          <Text className={classes.text}>
            We collect the following categories of personal information:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Identifiers</strong>
                  </td>
                  <td>
                    First and last name, email, phone number, postal address, IP address, account
                    username, business name
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Commercial information</strong>
                  </td>
                  <td>Products and Services purchased, subscription tier, billing history</td>
                </tr>
                <tr>
                  <td>
                    <strong>Financial information</strong>
                  </td>
                  <td>Payment card information (processed by Stripe), billing address</td>
                </tr>
                <tr>
                  <td>
                    <strong>Internet activity</strong>
                  </td>
                  <td>
                    Pages visited, links clicked, time on Site, referring URL, device and browser
                    data
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Geolocation (approximate)</strong>
                  </td>
                  <td>
                    City and state derived from IP address - we do not collect precise geolocation
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Audio recordings</strong>
                  </td>
                  <td>Sales, onboarding, and support calls (see Section 9)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Professional information</strong>
                  </td>
                  <td>Job title, trade or industry, business size</td>
                </tr>
                <tr>
                  <td>
                    <strong>Inferences</strong>
                  </td>
                  <td>Profiles built from the above to evaluate fit for our Services</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sensitive personal information</strong>
                  </td>
                  <td>Account login credentials, payment card information</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            We do <strong>not</strong> knowingly collect: precise geolocation, racial or ethnic
            origin, religious beliefs, sexual orientation, immigration status, genetic data,
            biometric data, health information, or information about children under 16.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            4. Where We Get Your Information
          </Title>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Directly from you</strong> - when you fill out a form, book a call, sign up,
              or contact us.
            </li>
            <li className={classes.listItem}>
              <strong>From your device</strong> - through cookies, pixels, and similar technologies
              on our Sites.
            </li>
            <li className={classes.listItem}>
              <strong>From advertising partners</strong> - Meta, Google, and other ad platforms that
              deliver our advertising.
            </li>
            <li className={classes.listItem}>
              <strong>From service providers</strong> - including our CRM (GoHighLevel), payment
              processor (Stripe), and analytics providers.
            </li>
            <li className={classes.listItem}>
              <strong>From publicly available sources</strong> - business directories, public
              records, and similar.
            </li>
          </ul>

          <Title order={2} className={classes.secondaryTitle}>
            5. How We Use Your Information
          </Title>
          <Text className={classes.text}>
            We use personal information for these business and commercial purposes:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              <strong>Provide and operate the Services</strong> - account creation, billing,
              customer support, communications about your account.
            </li>
            <li className={classes.listItem}>
              <strong>Sales and marketing</strong> - respond to inquiries, follow up on leads, send
              promotional emails and SMS messages (where consented), retarget on advertising
              platforms.
            </li>
            <li className={classes.listItem}>
              <strong>Analytics and improvement</strong> - understand how the Sites and Services are
              used, diagnose problems, develop new features.
            </li>
            <li className={classes.listItem}>
              <strong>Advertising</strong> - measure ad performance, build lookalike audiences,
              retarget visitors. This is &quot;sharing&quot; under California law - see{' '}
              <strong>Section 7</strong>.
            </li>
            <li className={classes.listItem}>
              <strong>Quality assurance and training</strong> - review and use call recordings to
              train our team and improve service.
            </li>
            <li className={classes.listItem}>
              <strong>Security and fraud prevention</strong> - detect, investigate, and prevent
              fraudulent or unauthorized activity.
            </li>
            <li className={classes.listItem}>
              <strong>Legal compliance</strong> - comply with applicable laws, court orders, and
              regulatory requirements.
            </li>
            <li className={classes.listItem}>
              <strong>Business operations</strong> - accounting, recordkeeping, audits, corporate
              transactions.
            </li>
          </ol>
          <Text className={classes.text}>
            We will not use your sensitive personal information for purposes other than those
            permitted by California law without first offering you a right to limit such use.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            6. How We Share Your Information
          </Title>
          <Text className={classes.text}>
            We share personal information with the following categories of recipients:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      Service providers (e.g., GoHighLevel, Stripe, hosting providers, email/SMS
                      senders, analytics providers)
                    </strong>
                  </td>
                  <td>To deliver the Services on our behalf under written contract</td>
                </tr>
                <tr>
                  <td>
                    <strong>Advertising partners (e.g., Meta, Google, TikTok, LinkedIn)</strong>
                  </td>
                  <td>
                    To deliver and measure advertising - this is &quot;sharing&quot; under
                    California law
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Professional advisors (lawyers, accountants, auditors)</strong>
                  </td>
                  <td>For legal, accounting, and compliance purposes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Acquirers</strong>
                  </td>
                  <td>In connection with a merger, acquisition, financing, or sale of assets</td>
                </tr>
                <tr>
                  <td>
                    <strong>Government authorities</strong>
                  </td>
                  <td>When required by law, subpoena, or court order</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            We require service providers to use personal information only for the purposes we
            authorize and under contractual obligations of confidentiality and security.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            7. Sale and Sharing of Personal Information
          </Title>
          <Text className={classes.text}>
            <strong>We do not sell personal information for money.</strong>
          </Text>
          <Text className={classes.text}>
            We <strong>do share</strong> the following categories of personal information with
            advertising partners for <strong>cross-context behavioral advertising</strong> (which is
            treated as a &quot;sale&quot; or &quot;sharing&quot; under California, Colorado,
            Connecticut, and other state laws):
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>Identifiers (e.g., online identifiers, IP address)</li>
            <li className={classes.listItem}>
              Internet activity (e.g., pages visited, ads clicked)
            </li>
            <li className={classes.listItem}>Inferences</li>
          </ul>
          <Text className={classes.text}>
            You have the right to opt out of this sharing at any time.
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              Use the <strong>Do Not Sell or Share My Personal Information</strong> link in our
              website footer (or visit <strong>stonesystems.io/do-not-sell</strong>).
            </li>
            <li className={classes.listItem}>
              Email <strong>privacy@stonesystems.io</strong> with subject line &quot;Opt Out of
              Sale/Sharing.&quot;
            </li>
            <li className={classes.listItem}>
              Enable a <strong>Global Privacy Control (GPC)</strong> signal in your browser - we
              automatically honor GPC for visitors from California, Colorado, Connecticut, and other
              states recognizing universal opt-out signals.
            </li>
          </ol>
          <Text className={classes.text}>
            We do not knowingly sell or share personal information of consumers under 16 years of
            age.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            8. Cookies, Pixels, and Tracking Technologies
          </Title>
          <Text className={classes.text}>
            We use cookies, pixels, software development kits, and similar technologies on our Sites
            to:
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Keep you logged in and remember your preferences (essential).
            </li>
            <li className={classes.listItem}>
              Measure traffic and performance (analytics - PostHog, Google Analytics).
            </li>
            <li className={classes.listItem}>
              Deliver and measure advertising (Meta Pixel, Google Ads, and similar).
            </li>
          </ul>
          <Text className={classes.text}>
            <strong>Managing cookies:</strong>
          </Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Cookie preference center:</strong> click the &quot;Cookie Settings&quot; link
              in our footer to accept, reject, or customize cookies.
            </li>
            <li className={classes.listItem}>
              <strong>Browser settings:</strong> most browsers let you block or delete cookies.
            </li>
            <li className={classes.listItem}>
              <strong>Global Privacy Control:</strong> enabling GPC in your browser tells us to opt
              you out of sharing for advertising - we honor this automatically.
            </li>
            <li className={classes.listItem}>
              <strong>Industry opt-outs:</strong>{' '}
              <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer">
                optout.aboutads.info
              </a>{' '}
              and{' '}
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noreferrer">
                optout.networkadvertising.org
              </a>
              .
            </li>
          </ul>
          <Text className={classes.text}>
            We do not use session replay technology on our Sites.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            9. Call Recording
          </Title>
          <Text className={classes.text}>
            We record sales, onboarding, and support calls for quality assurance, training,
            recordkeeping, and dispute resolution. At the start of each call, we provide a verbal
            notice that the call is being recorded.{' '}
            <strong>
              By continuing the call after this notice, you consent to being recorded.
            </strong>{' '}
            If you do not wish to be recorded, please tell us at the start of the call and we will
            end or pause the recording.
          </Text>
          <Text className={classes.text}>
            Recordings are stored securely, accessible only to authorized personnel and our service
            providers, and retained as described in <strong>Section 10</strong>.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            10. Data Retention
          </Title>
          <Text className={classes.text}>
            We retain personal information for as long as is necessary to provide the Services,
            fulfill the purposes described in this Policy, comply with our legal and accounting
            obligations, resolve disputes, and enforce our agreements.
          </Text>
          <Text className={classes.text}>Specifically:</Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Customer account records</td>
                  <td>
                    While the account is active, and indefinitely thereafter unless you request
                    deletion or we determine the data is no longer needed for legal, accounting, or
                    legitimate business purposes
                  </td>
                </tr>
                <tr>
                  <td>Marketing leads</td>
                  <td>
                    Indefinitely, until you request deletion or opt out, or until we determine the
                    information is no longer needed
                  </td>
                </tr>
                <tr>
                  <td>Billing and tax records</td>
                  <td>At least 7 years (required by law)</td>
                </tr>
                <tr>
                  <td>Call recordings (sales/onboarding/support)</td>
                  <td>Indefinitely, for training, quality assurance, and dispute resolution</td>
                </tr>
                <tr>
                  <td>Website analytics (identifiable)</td>
                  <td>Up to 26 months</td>
                </tr>
                <tr>
                  <td>Cookies</td>
                  <td>Session-only or up to 13 months, depending on type</td>
                </tr>
                <tr>
                  <td>Support tickets</td>
                  <td>While the account is active and for a reasonable period thereafter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Text className={classes.text}>
            You may request deletion at any time as described in <strong>Section 12</strong>. After
            deletion is processed, we may retain limited information necessary to comply with legal
            obligations, resolve disputes, prevent fraud, and enforce our agreements.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            11. Your Privacy Rights
          </Title>
          <Text className={classes.text}>
            Depending on the state where you reside, you have some or all of the following rights:
          </Text>
          <div className={classes.tableWrap}>
            <table className={classes.dataTable}>
              <thead>
                <tr>
                  <th>Right</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Right to know / access</strong>
                  </td>
                  <td>Get a copy of the personal information we have about you</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to delete</strong>
                  </td>
                  <td>Request deletion of your personal information</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to correct</strong>
                  </td>
                  <td>Fix inaccurate personal information</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to portability</strong>
                  </td>
                  <td>Receive your information in a portable format</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to opt out of sale/sharing</strong>
                  </td>
                  <td>
                    Stop us from sharing your information for cross-context behavioral advertising
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to limit use of sensitive PI</strong>
                  </td>
                  <td>Restrict use of sensitive personal information to limited purposes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to non-discrimination</strong>
                  </td>
                  <td>
                    We will not deny services, charge different prices, or provide a different
                    quality of service for exercising your rights
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Right to appeal</strong>
                  </td>
                  <td>
                    If we deny your request, you can appeal (Virginia, Colorado, Connecticut, Texas,
                    Oregon)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Title order={2} className={classes.secondaryTitle}>
            12. How to Exercise Your Rights
          </Title>
          <Text className={classes.text}>
            You can submit a request in any of the following ways:
          </Text>
          <ol className={classes.listOrdered}>
            <li className={classes.listItem}>
              <strong>Web form:</strong>{' '}
              <a href="https://stonesystems.io/privacy-request" target="_blank" rel="noreferrer">
                stonesystems.io/privacy-request
              </a>
            </li>
            <li className={classes.listItem}>
              <strong>Email:</strong> privacy@stonesystems.io
            </li>
            <li className={classes.listItem}>
              <strong>Phone:</strong> (808) 645-4509
            </li>
          </ol>
          <Text className={classes.text}>We will:</Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              Acknowledge your request within <strong>10 business days</strong>.
            </li>
            <li className={classes.listItem}>
              Respond within <strong>45 days</strong>. If we need more time, we will notify you and
              may extend by an additional 45 days.
            </li>
            <li className={classes.listItem}>
              Provide the first request in any 12-month period at <strong>no charge</strong>.
            </li>
          </ul>
          <Text className={classes.text}>
            <strong>Verification.</strong> To protect your information, we will ask you to confirm
            details we already have on file (such as your email address and the last interaction we
            had with you). We may ask for additional verification if the request involves sensitive
            information.
          </Text>
          <Text className={classes.text}>
            <strong>Authorized agents.</strong> You may designate an authorized agent to make a
            request on your behalf. We will require written, signed authorization, and we will
            verify the identity of the consumer.
          </Text>
          <Text className={classes.text}>
            <strong>Appeals.</strong> If we deny your request and you reside in Virginia, Colorado,
            Connecticut, Texas, or Oregon, you may appeal by emailing{' '}
            <strong>privacy@stonesystems.io</strong> with subject line &quot;Appeal.&quot; We will
            respond within <strong>45 days</strong> (Virginia, Connecticut, Oregon) or{' '}
            <strong>60 days</strong> (Colorado, Texas).
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            13. State-Specific Disclosures
          </Title>
          <Title order={3} className={classes.tercaryTitle}>
            13.1 California (CCPA / CPRA)
          </Title>
          <Text className={classes.text}>In the past 12 months, we have:</Text>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <strong>Collected</strong> the categories of personal information listed in{' '}
              <strong>Section 3</strong>.
            </li>
            <li className={classes.listItem}>
              <strong>Disclosed for a business purpose</strong> to service providers and
              professional advisors.
            </li>
            <li className={classes.listItem}>
              <strong>Shared</strong> for cross-context behavioral advertising with advertising
              partners (see <strong>Section 7</strong>).
            </li>
            <li className={classes.listItem}>
              <strong>Not sold</strong> personal information for monetary consideration.
            </li>
            <li className={classes.listItem}>
              <strong>Not knowingly collected or sold</strong> personal information of consumers
              under 16.
            </li>
          </ul>
          <Text className={classes.text}>
            California residents may also designate an authorized agent. We do not offer financial
            incentives in exchange for personal information.
          </Text>
          <Text className={classes.text}>
            You may also request information about disclosures we have made for direct marketing
            purposes under California&apos;s &quot;Shine the Light&quot; law by emailing{' '}
            <strong>privacy@stonesystems.io</strong>.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            13.2 Colorado (CPA), Connecticut (CTDPA), and Oregon (OCPA)
          </Title>
          <Text className={classes.text}>
            Residents of Colorado, Connecticut, and Oregon have the rights described in{' '}
            <strong>Section 11</strong>, including the right to opt out of targeted advertising,
            sale, and certain profiling. We honor Global Privacy Control as a universal opt-out
            signal.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            13.3 Virginia (VCDPA)
          </Title>
          <Text className={classes.text}>
            Virginia residents have the rights described in <strong>Section 11</strong>. We do not
            engage in profiling that produces legal or similarly significant effects.
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            13.4 Texas (TDPSA)
          </Title>
          <Text className={classes.text}>
            Texas residents have the rights described in <strong>Section 11</strong>. As required by
            Texas law:{' '}
            <strong>
              We do NOT sell sensitive personal data. We do NOT collect or sell biometric personal
              data.
            </strong>
          </Text>

          <Title order={3} className={classes.tercaryTitle}>
            13.5 Other States
          </Title>
          <Text className={classes.text}>
            Residents of other states with comprehensive privacy laws (including Utah, Iowa,
            Montana, Tennessee, Indiana, Florida, Delaware, New Jersey, New Hampshire, Kentucky,
            Maryland, Minnesota, and Rhode Island) have the rights granted by the laws of their
            state. Contact us as described in <strong>Section 12</strong> to exercise them.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            14. Children&apos;s Privacy
          </Title>
          <Text className={classes.text}>
            The Sites and Services are not directed to children under 16. We do not knowingly
            collect personal information from children under 16. If you believe we have collected
            information from a child under 16, contact <strong>privacy@stonesystems.io</strong> and
            we will delete it.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            15. Data Security
          </Title>
          <Text className={classes.text}>
            The security of your personal information is important to us. We use reasonable
            administrative, technical, and physical safeguards to protect personal information,
            including encryption in transit, access controls, and vendor due diligence. However, no
            method of transmission over the Internet or method of electronic storage is 100% secure.
            While we strive to use commercially acceptable means to protect your personal data, we
            cannot guarantee its absolute security.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            16. International Users
          </Title>
          <Text className={classes.text}>
            The Sites are operated from the United States. If you access them from outside the
            United States, your information will be transferred to and processed in the United
            States. By using the Sites, you consent to that transfer.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            17. Third-Party Links
          </Title>
          <Text className={classes.text}>
            The Sites may contain links to third-party websites and services. This Policy does not
            apply to those third parties. We encourage you to read their privacy policies.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            18. Changes to This Privacy Policy
          </Title>
          <Text className={classes.text}>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date
            at the top reflects the most recent change. If we make material changes, we will notify
            you by posting a notice on the Sites or by email. We will update this Privacy Policy at
            least once every 12 months.
          </Text>

          <Title order={2} className={classes.secondaryTitle}>
            19. Contact Us
          </Title>
          <Text className={classes.text}>
            <strong>Stonesystems LLC</strong>
            <br />
            Email: privacy@stonesystems.io
            <br />
            Phone: (808) 645-4509
            <br />
            Web: stonesystems.io/privacy-request
          </Text>
          <Text className={classes.text}>
            For privacy-specific questions, please use <strong>privacy@stonesystems.io</strong>{' '}
            rather than general support channels.
          </Text>
        </div>
      </Container>
    </div>
  );
}
