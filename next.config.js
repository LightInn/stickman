/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'stickman-api.lightin.io',
                pathname: '**',
            }
        ],
    },

    i18n: {
        locales: ['fr'],
        defaultLocale: 'fr',
    },
}
