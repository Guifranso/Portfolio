/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.itch.zone',
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
