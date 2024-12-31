import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.ditsolution.net',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
 
};

export default nextConfig;
