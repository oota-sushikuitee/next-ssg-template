// Site-wide constants used by metadata, robots.txt, and sitemap.xml.
// Update these when creating a site from this template.
const configuredSiteUrl = 'https://example.com';
export const siteName = 'Next SSG Template';
export const siteDescription =
  'A minimal Next.js + TypeScript + Tailwind CSS template configured for static site generation.';

// Trailing slashes are stripped once here so every consumer can append a path
// (`${siteUrl}/sitemap.xml`) without emitting a double slash, and so the URLs
// in robots.txt and sitemap.xml match the `metadataBase` in app/layout.tsx.
export const siteUrl = configuredSiteUrl.replace(/\/+$/, '');
