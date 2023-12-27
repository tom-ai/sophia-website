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
  async headers() {
    return [
      {
        headers: [
          {
            source: "/:path*",
            headers: {
              key: "X-Robots-Tag",
              value: "noindex",
            },
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
