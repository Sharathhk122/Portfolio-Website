const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Use 'export' instead of 'standalone' if you're doing static site generation
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  // Enable React Strict Mode
  reactStrictMode: true,
  // Image optimization configuration
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Disable optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // Webpack configuration to ignore canvas (if needed for your dependencies)
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      canvas: false,
      fs: false 
    };
    return config;
  },
  // Enable experimental features if needed
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
  },
  // Environment variables that should be available at build time
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;