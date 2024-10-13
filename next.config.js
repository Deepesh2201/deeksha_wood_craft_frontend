/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { 
    baseUrl: "http://localhost:3001/", 
    URL: "https://laravel.pixelstrap.net/fastkart/api",
    storageURL:"https://laravel.pixelstrap.net/fastkart",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
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