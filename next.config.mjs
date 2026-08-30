/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Directory-style URLs (/about/) export as about/index.html, which every
  // static host serves without clean-URL rewrite rules.
  trailingSlash: true,
  images: {
    // The default image loader needs a Node runtime, which a static export
    // does not have; without this the first next/image fails the build.
    unoptimized: true,
  },
};

export default nextConfig;
