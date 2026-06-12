import type { MetadataRoute } from 'next';
import { siteUrl } from './config';

// Required for metadata routes when next.config.mjs sets `output: 'export'`.
export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${siteUrl}/sitemap.xml`,
});

export default robots;
