/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/WeatherMood",
  assetPrefix: "/WeatherMood/",
};

module.exports = nextConfig;
