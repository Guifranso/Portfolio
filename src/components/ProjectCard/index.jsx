import Image from 'next/image'

import styles from './ProjectCard.module.scss'

export default function ProjectCard ({ title, description, imageSrc, href }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={styles.card}>
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
                <span className={styles.cta}>Ver Projeto</span>
            </div>
        </a>
    )
}
