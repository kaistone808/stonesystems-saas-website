export const dynamic = 'force-dynamic'; // Ensures it updates dynamically

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://stonesystems.io/sitemap.xml`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
