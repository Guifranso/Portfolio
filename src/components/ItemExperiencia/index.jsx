import React from 'react'
import Image from 'next/image'
import { useScrollReveal } from '../../hooks/useScrollReveal'

import styles from './ItemExperiencia.module.scss'

export default function ItemExperiencia({ funcao, instituicao, prazo, descricao, imagemSrc, delay = 0 }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

    const delayClass = delay > 0 ? `scroll-reveal-delay-${Math.min(delay, 5)}` : ''

    return (
        <div
            ref={ref}
            className={`${styles.container} scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''} ${delayClass}`}
        >
            <Image
                className={styles.image}
                src={imagemSrc}
                alt={funcao}
                width={500}
                height={500}
            />
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{funcao}</h2>
                <p className={styles.text}>{instituicao} - {prazo}</p>
                <p className={styles.text}>- {descricao}</p>
            </div>
        </div>
    )
}
