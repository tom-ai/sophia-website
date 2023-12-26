/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/latest-work",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "www.datocms-assets.com",
      },
    ],
  },
  headers: [
    {
      source: "/:path*",
      headers: {
        key: "x-robots-tag",
        value: "noindex",
      },
    },
  ],
};

module.exports = nextConfig;
