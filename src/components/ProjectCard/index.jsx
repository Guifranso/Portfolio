import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '../../hooks/useScrollReveal'

import styles from './ProjectCard.module.scss'

export default function ProjectCard({ title, description, imageSrc, href, delay = 0 }) {
    const t = useTranslations('projects')
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

    const delayClass = delay > 0 ? `scroll-reveal-delay-${Math.min(delay, 5)}` : ''

    return (
        <a
            ref={ref}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''} ${delayClass}`}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={`Capa do projeto ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.titleRow}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                </div>
                <p className={styles.description}>{description}</p>
                <span className={styles.cta}>{t('viewProject')}</span>
            </div>
        </a>
    )
}
