import type { NextConfig } from "next";

// https://api.thecatapi.com/v1/images/search?limit=10
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "*"
      }
    ]
  }
};

export default nextConfig;
