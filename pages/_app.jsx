import '../src/styles/globals.scss'

import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../src/components/LanguageSwitcher'

import ptMessages from '../src/locales/pt.json'
import enMessages from '../src/locales/en.json'

const messages = {
    pt: ptMessages,
    en: enMessages
}

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const locale = router.locale || 'pt'

    return (
        <>
            <NextIntlClientProvider
                locale={locale}
                messages={messages[locale]}
                timeZone="America/Sao_Paulo"
            >
                <ThemeProvider attribute="data-theme">
                    <LanguageSwitcher />
                    <Component {...pageProps} />
                </ThemeProvider>
            </NextIntlClientProvider>
        </>
    )
}

export default MyApp
