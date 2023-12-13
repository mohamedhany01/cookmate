/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
