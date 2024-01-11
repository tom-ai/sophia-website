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
    domains: [
      "www.datocms-assets.com",
      "i.ytimg.com",
      "i.vimeocdn.com",
      "scontent-lhr8-2.xx.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
