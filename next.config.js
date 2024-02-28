/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        removeConsole: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'stickman-api.lightin.io',
                port: '',
                pathname: '**'
            }
        ]
    }
};

module.exports = { ...nextConfig };
