import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/meet-guide',
        permanent: false
      },
      // If any old direct sanctuary route patterns existed, map them here later.
    ];
  }
};

export default nextConfig;
