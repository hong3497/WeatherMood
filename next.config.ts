import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WeatherMood",
  assetPrefix: "/WeatherMood/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
