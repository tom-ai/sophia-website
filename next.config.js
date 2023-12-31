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
    domains: ["www.datocms-assets.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
