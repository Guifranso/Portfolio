import React from 'react'
import { useLocale } from '../../lib/i18n'
import styles from './LanguageSwitcher.module.scss'

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLocale()

    const toggleLanguage = () => {
        const newLocale = locale === 'pt' ? 'en' : 'pt'
        setLocale(newLocale)
    }

    return (
        <button
            className={styles.switcher}
            onClick={toggleLanguage}
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
            <span className={styles.flag}>
                {locale === 'pt' ? '🇧🇷' : '🇺🇸'}
            </span>
            <i className={`fa-solid fa-arrows-rotate ${styles.icon}`}></i>
        </button>
    )
}
