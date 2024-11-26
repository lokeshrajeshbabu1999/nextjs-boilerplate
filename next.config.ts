import type { NextConfig } from "next";
import { config as dotenvConfig } from "dotenv";
import webpack from "webpack";

// Load environment variables based on the environment
const { parsed: localEnv } = dotenvConfig({
  path: `.env.${process.env.NEXT_APP_ENVIRONMENT === "Production" ? "production" : "development"}`,
}) || {};

// Ensure localEnv is always an object (empty object if undefined)
const env = localEnv || {};

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  output: "export",
  env, // Use the fallback env object here
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds (not recommended for production)
  },
  async rewrites() {
    return [
      {
        source: "/guide-api/:path*",
        destination: "https://d35r9h8hqd5b12.cloudfront.net/guide-api/:path*",
      },
    ];
  },

  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.EnvironmentPlugin(env)); // Use the fallback env object here
    return config;
  },
};

export default nextConfig;
