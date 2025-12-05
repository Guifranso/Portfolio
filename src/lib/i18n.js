import { useRouter } from 'next/router'

const locales = ['pt', 'en']
const defaultLocale = 'pt'

export function useLocale() {
    const router = useRouter()
    const locale = router.locale || defaultLocale

    const setLocale = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    return { locale, setLocale, locales }
}

export { locales, defaultLocale }
