/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/major',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
