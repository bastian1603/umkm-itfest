import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com',
      'images.unsplash.com'
    ], // tambahkan domain gambar eksternal
  },
};

export default nextConfig;
