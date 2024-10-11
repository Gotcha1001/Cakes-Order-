/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "heavenly-cakes.s3.amazonaws.com", // Allow S3 images
      },
    ],
  },
};

export default nextConfig;
