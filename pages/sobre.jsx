import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from '../src/styles/Sobre.module.scss'

export default function Sobre() {
    const t = useTranslations('about')

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{t('title')}</h1>
                <div className={styles.content}>
                    <Image
                        className={styles.image}
                        src="/profile-picture.jpg"
                        width={300}
                        height={300}
                        alt={t('imageAlt')}
                    />
                    <div className={styles.textContainer}>
                        <p className={styles.paragraph}>{t('greeting')}</p>
                        <p className={styles.paragraph}>
                            {t('location')} {t('education1')}
                        </p>
                        <p className={styles.paragraph}>
                            {t('education2')}
                        </p>
                        <p className={styles.paragraph}>
                            {t('hobbies')}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
