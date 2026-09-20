import type { NextConfig } from "next";

// GitHub Pages serves this project from /sadia-portfolio rather than the domain root.
// The workflow supplies this value, while local development remains at /.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
