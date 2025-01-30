import type { NextConfig } from "next";

// https://api.thecatapi.com/v1/images/search?limit=10 => wrong url...
// has to be image url
// https://cdn2.thecatapi.com/images/b9j.jpg <= correct one...
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        port: "",
        pathname: "/images/**",
        search: ""
      }
    ]
  }
};

export default nextConfig;
