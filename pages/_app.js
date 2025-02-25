import 'tailwindcss/tailwind.css'
import '../src/app/globals.css'

import { ThemeProvider } from 'next-themes'

function MyApp ({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
