/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { 
    baseUrl: "https://dwc-liart.vercel.app/", 
    URL: "https://api.deekshawood.com/api",
    storageURL:"https://api.deekshawood.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.deekshawood.com",
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