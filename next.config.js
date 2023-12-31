/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pic.imgdb.cn",
      },
      {
        protocol: "http",
        hostname: "192.168.0.112",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "images-1253529509.cos.ap-chengdu.myqcloud.com",
      }
    ],
  },
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig;
