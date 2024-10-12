/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { 
    baseUrl: "http://localhost:3001/", 
    URL: "https://dwcapi.shinewell.in/api",
    storageURL:"https://dwcapi.shinewell.in/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dwcapi.shinewell.in",
      },
      { 
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;