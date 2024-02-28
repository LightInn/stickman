/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

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

// module.exports = withContentlayer({ ...nextConfig });
module.exports = { ...nextConfig };
