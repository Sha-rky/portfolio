import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
    output: 'export', // static export
    distDir: 'dist', // output directory
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
