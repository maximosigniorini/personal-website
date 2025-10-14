


/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/?video=portfolio',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
