import type { NextConfig } from "next";

// Static export for GitHub Pages: `npm run build` writes the whole site to ./out.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
