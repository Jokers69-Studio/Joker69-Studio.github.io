import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
