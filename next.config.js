/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.itch.zone',
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
            },
        ],
    },
    i18n: {
        locales: ['pt', 'en'],
        defaultLocale: 'pt',
        localeDetection: true,
    },
}

module.exports = nextConfig
