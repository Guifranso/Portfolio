import React from 'react'
import Image from 'next/image'

import styles from './ItemExperiencia.module.scss'

export default function ItemExperiencia({ funcao, instituicao, prazo, descricao, imagemSrc }) {
    return (
        <div className={styles.container}>
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
