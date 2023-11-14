/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/collaborators',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
