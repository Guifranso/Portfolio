import '../src/styles/globals.scss'

import { ThemeProvider } from 'next-themes'

function MyApp ({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute="data-theme">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
