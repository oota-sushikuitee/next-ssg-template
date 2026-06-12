# next-ssg-template

[![License](https://img.shields.io/github/license/oota-sushikuitee/next-ssg-template)](https://github.com/oota-sushikuitee/next-ssg-template/blob/main/LICENSE)

A minimal Next.js 15 + TypeScript + Tailwind CSS template configured for
static site generation. `next build` emits a static `out/` directory that can
be served by any static host (GitHub Pages, Cloudflare Pages, S3, Netlify).

## Use as a template

Click **Use this template** on GitHub, or:

```bash
gh repo create my-site --template oota-sushikuitee/next-ssg-template --public --clone
```

## Requirements

- Node.js (see `.node-version`)
- Yarn 4 (pinned via `packageManager` in `package.json`)

Enable Corepack so the pinned Yarn version is used automatically:

```bash
corepack enable
```

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
```

## Build

```bash
yarn build      # produces ./out
```

The output is fully static — no Node runtime is required to serve it. Upload
the contents of `out/` to your static host of choice.

## Scripts

| Script          | What it does                          |
| --------------- | ------------------------------------- |
| `yarn dev`      | Start the dev server                  |
| `yarn build`    | Build static export into `out/`       |
| `yarn lint`     | Run ESLint                            |
| `yarn lint:fix` | Run ESLint with `--fix`               |
| `yarn format`   | Run Prettier across `app/**/*.{ts,tsx}` |

## SEO defaults

The template ships with basic SEO scaffolding:

- `app/config.ts` — `siteUrl`, `siteName`, and `siteDescription` used by
  everything below. **Edit this first** when starting a new site.
- `app/layout.tsx` — `metadataBase`, title template, canonical URL, Open
  Graph, and Twitter card metadata derived from the config.
- `app/robots.ts` / `app/sitemap.ts` — emit `robots.txt` and `sitemap.xml` at
  build time (`force-static` is required because of `output: 'export'`).

After deploying, submit `sitemap.xml` to Google Search Console.

## License

See [LICENSE](LICENSE).
