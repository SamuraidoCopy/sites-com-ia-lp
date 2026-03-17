import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sites-com-ia-lp',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
