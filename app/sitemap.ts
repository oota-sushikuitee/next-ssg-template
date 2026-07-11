import type { MetadataRoute } from 'next';
import { siteUrl } from './config';

// Required for metadata routes when next.config.mjs sets `output: 'export'`.
export const dynamic = 'force-static';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    // List every indexable page here. `lastModified` is intentionally omitted:
    // `new Date()` would churn the sitemap on every build. Add a real date per
    // entry (e.g. from your CMS or content frontmatter) when you have one.
    url: `${siteUrl}/`,
  },
];

export default sitemap;
