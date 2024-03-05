/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        removeConsole: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.windows.net',
                port: '',
                pathname: '**'
            }
        ]
    }
};

module.exports = { ...nextConfig };
