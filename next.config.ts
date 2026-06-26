import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  devIndicators: false,

  basePath: '/resume',
  assetPrefix: '/resume/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
