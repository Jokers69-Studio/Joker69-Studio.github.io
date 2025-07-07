import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
