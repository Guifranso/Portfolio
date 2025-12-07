import { useState } from 'react'
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
    const [contactRef, contactVisible] = useScrollReveal({ threshold: 0.1 })

    const [formData, setFormData] = useState({
        name: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, message } = formData
        const subject = encodeURIComponent(`Contato de ${name} - Portfolio`)
        const body = encodeURIComponent(`${name}\n\n${message}`)
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=guifranca60@gmail.com&su=${subject}&body=${body}`
        window.open(gmailUrl, '_blank')
    }

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

                <div
                    ref={contactRef}
                    className={`${styles.contactSection} scroll-reveal scroll-reveal-delay-3 ${contactVisible ? 'scroll-reveal-visible' : ''}`}
                >
                    <h2 className={styles.contactTitle}>{t('contact.title')}</h2>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t('contact.namePlaceholder')}
                            className={styles.formInput}
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t('contact.messagePlaceholder')}
                            className={styles.formTextarea}
                            rows={5}
                            required
                        />
                        <button type="submit" className={styles.submitButton}>
                            <i className="fa-solid fa-paper-plane"></i>
                            {t('contact.sendButton')}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
