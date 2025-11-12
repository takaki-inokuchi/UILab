/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Turbopack を完全に無効化
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/**", // すべてのパスを許可
      },
    ],
  },
};

module.exports = nextConfig;
