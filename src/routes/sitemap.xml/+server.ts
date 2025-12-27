import type { RequestHandler } from './$types';

const SITE_URL = 'https://solaria.icu';

const pages = [
	{ url: '', priority: '1.0', changefreq: 'weekly' },
	{ url: '#services', priority: '0.8', changefreq: 'monthly' },
	{ url: '#portfolio', priority: '0.8', changefreq: 'weekly' },
	{ url: '#process', priority: '0.6', changefreq: 'monthly' },
	{ url: '#pricing', priority: '0.8', changefreq: 'monthly' },
	{ url: '#faq', priority: '0.6', changefreq: 'monthly' },
	{ url: '#contact', priority: '0.7', changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}/${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/${page.url}" />
    <xhtml:link rel="alternate" hreflang="id" href="${SITE_URL}/${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/${page.url}" />
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
