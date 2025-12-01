import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ProjectCard from '../src/components/ProjectCard'

import styles from '../src/styles/Projetos.module.scss'

const projects = [
    {
        title: 'Dye Gather',
        description: 'Jogo 2D feito em uma game jam; voce mistura cores recolhendo tintas pelo mapa para abrir caminho ate a saida.',
        imageSrc: 'https://img.itch.zone/aW1nLzcxODE5MzgucG5n/original/Hr3dlu.png',
        href: 'https://fabioaj.itch.io/dye-gather'
    },
    {
        title: 'Reivals',
        description: 'Arena shooter top-down com partidas curtas, foco em ritmo rapido e projeteis por todos os lados.',
        imageSrc: 'https://img.itch.zone/aW1hZ2UvMTM3NTEzOS84MDI3NDY1LnBuZw==/original/vxa9e7.png',
        href: 'https://fabioaj.itch.io/reivals'
    },
    {
        title: 'Fall in the Rain',
        description: 'Prototipo casual sobre descer enquanto desvia da chuva e dos obstaculos, feito para testar controles e atmosfera.',
        imageSrc: 'https://img.itch.zone/aW1nLzEzNjU2MTczLnBuZw==/original/KK1C6C.png',
        href: 'https://fabioaj.itch.io/fall-in-the-rain'
    }
]

export default function Projetos () {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>Projetos</h1>
                    <p className={styles.subtitle}>
                        Alguns prototipos e jams que venho testando. Cada card leva direto para a pagina no itch.io com mais detalhes.
                    </p>
                </div>
                <div className={styles.cards}>
                    {projects.map((project) => (
                        <ProjectCard key={project.href} {...project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
