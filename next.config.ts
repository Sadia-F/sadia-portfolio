import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sadia-portfolio",
  assetPrefix: "/sadia-portfolio",
};

export default nextConfig;