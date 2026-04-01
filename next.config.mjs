/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any hostname
        port: "",
        pathname: "/**", // allow any path
      },
    ],
  },
};

export default nextConfig;
