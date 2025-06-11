/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { 
    baseUrl: "https://deekshawood.com", 
    URL: "https://api.deekshawood.com/api",
    storageURL: "https://api.deekshawood.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.deekshawood.com",
      },
      {
        protocol: "https",
        hostname: "api.mylumeva.com",
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
