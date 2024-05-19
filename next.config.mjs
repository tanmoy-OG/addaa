/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/api/:path*",
        destination: "https://addaa-api.onrender.com/api/:path*", // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ["avatar.iran.liara.run"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
