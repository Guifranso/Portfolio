import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import styles from '../src/styles/Projetos.module.scss'

export default function Projetos() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}> Projetos </h1>
                <div className={styles.content}>
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
