/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["fakestoreapi.com"],
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
