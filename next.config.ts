import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  cacheComponents: true,
};

export default nextConfig;
