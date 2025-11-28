import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Image from 'next/image'

import styles from '../src/styles/Sobre.module.scss'

export default function Sobre() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}> Sobre </h1>
                <div className={styles.content}>
                    <Image
                        className={styles.image}
                        src="/profile-picture.jpg"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <div className={styles.textContainer}>
                        <p className={styles.paragraph}>Olá! Sou Guilherme, apaixonado por tecnologia e programação! </p>
                        <p className={styles.paragraph}>
                            residente em Uberlândia.
                            Formei-me em Programação de Jogos, solidificando minha afinidade com o mundo digital. Atualmente, estudo Sistemas de Informação
                            na Universidade Federal de Uberlândia (UFU) e me envolvo em projetos pessoais.
                        </p>
                        <p className={styles.paragraph}>
                            Participei de hackathons e competições, aprendendo
                            muito sobre a área. Estou animado com o futuro e comprometido a aplicar meus conhecimentos para contribuir com projetos que possam
                            impactar positivamente as pessoas.
                        </p>
                        <p className={styles.paragraph}>
                            Além de tudo, no meu tempo livre gosto de jogar e tocar guitarra.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
