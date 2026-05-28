import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    preloadEntriesOnStart: false,
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
