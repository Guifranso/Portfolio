import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '../src/hooks/useScrollReveal'

import styles from '../src/styles/Redes.module.scss'

const networkLinks = [
    {
        key: 'github',
        url: 'https://github.com/Guifranso',
        icon: 'fa-brands fa-github'
    },
    {
        key: 'linkedin',
        url: 'https://www.linkedin.com/in/guilherme-fran%C3%A7a-a82150218/',
        icon: 'fa-brands fa-linkedin'
    },
    {
        key: 'itchio',
        url: 'https://tugo5.itch.io/',
        icon: 'fa-brands fa-itch-io'
    },
    {
        key: 'leetcode',
        url: 'https://leetcode.com/u/guifranca60/',
        icon: 'fa-solid fa-code'
    },
    {
        key: 'beecrowd',
        url: 'https://judge.beecrowd.com/pt/profile/330611',
        icon: 'fa-solid fa-trophy'
    }
]

export default function Redes() {
    const t = useTranslations('networks')

    const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.1 })
    const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div
                    ref={titleRef}
                    className={`scroll-reveal ${titleVisible ? 'scroll-reveal-visible' : ''}`}
                >
                    <h1 className={styles.title}>{t('title')}</h1>
                </div>
                <div
                    ref={gridRef}
                    className={`${styles.grid} scroll-reveal scroll-reveal-delay-2 ${gridVisible ? 'scroll-reveal-visible' : ''}`}
                >
                    {networkLinks.map((network) => (
                        <a
                            key={network.key}
                            href={network.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`${styles.card} ${styles[network.key]}`}
                        >
                            <div className={styles.iconWrapper}>
                                <i className={`${network.icon} ${styles.icon}`}></i>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardTitle}>
                                    {t(`items.${network.key}.name`)}
                                </span>
                                <span className={styles.cardDescription}>
                                    {t(`items.${network.key}.description`)}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
