/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  images: {
    domains: [
      'lh5.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh6.googleusercontent.com'
    ]
  }
};

module.exports = nextConfig;
