/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'handpan-ederod.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;