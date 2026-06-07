/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5287/api/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;
