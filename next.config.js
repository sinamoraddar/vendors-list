/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.snappfood.ir",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "www.zoodfood.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
