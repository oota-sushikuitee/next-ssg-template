import type { MetadataRoute } from 'next';
import { siteUrl } from './config';

// Required for metadata routes when next.config.mjs sets `output: 'export'`.
export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    // List every indexable page here with the date its content last changed.
    url: `${siteUrl}/`,
    lastModified: new Date(),
  },
];

export default sitemap;
