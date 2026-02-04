import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/Portfoio',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
        unoptimized: true,
    },
    // Fix for workspace root inference if using Turbopack
    experimental: {
        turbopack: {
            root: 'c:/Users/shaje/Downloads',
        },
    } as any,
};

export default nextConfig;