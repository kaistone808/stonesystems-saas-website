export const dynamic = 'force-dynamic'; // Ensures it updates dynamically

export async function GET() {
  const baseUrl = 'https://stonesystems.io'; // Change to your domain

  const pages = [
    '', // Homepage
    'pricing',
    'testimonials',
    'our-work',
    'about-us',
    'our-process',
    'trades-we-serve',
    'careers',
    'partners',
    'contact',
    'functional-website',
    'missed-call-text-back',
    'printing-services',
    'all-in-one-inbox',
    'business-phone',
    'seo',
    '5-star-magic-funnel',
    'marketing-campaigns',
    'automated-lead-follow-up',
    'privacy-policy',
    'terms'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}/${page}</loc>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
