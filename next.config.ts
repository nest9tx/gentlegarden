import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/sanctuaries',
        permanent: true,
      },
      {
        source: '/community/guide',
        destination: '/meet-guide',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
