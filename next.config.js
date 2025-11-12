module.exports = {
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
