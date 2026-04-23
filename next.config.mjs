


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
  async rewrites() {
    return [
      {
        source: '/work/:category',
        destination: '/?category=:category',
      },
    ]
  },
};

export default nextConfig;
