const BASE_BOOKING_URL = 'https://grow.stonesystems.io';

/**
 * Returns the booking URL with UTM parameters for tracking.
 * @param source - utm_source (default: 'website')
 * @param content - utm_content — which page/section the click came from (e.g. 'homepage-hero', 'pricing-cta')
 */
export function bookingUrl(content: string, source = 'website'): string {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: 'cta',
    utm_campaign: 'book-a-call',
    utm_content: content,
  });
  return `${BASE_BOOKING_URL}?${params.toString()}`;
}

// Legacy export for backward compatibility — generic fallback
export const BOOKING_URL = bookingUrl('website-generic');
