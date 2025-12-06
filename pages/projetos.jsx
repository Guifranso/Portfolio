import { useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ProjectCard from '../src/components/ProjectCard'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '../src/hooks/useScrollReveal'
import styles from '../src/styles/Projetos.module.scss'

export default function Projetos() {
    const t = useTranslations('projects')
    const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.1 })
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            title: t('items.dyeGather.title'),
            description: t('items.dyeGather.description'),
            imageSrc: 'https://img.itch.zone/aW1nLzcxODE5MzgucG5n/original/Hr3dlu.png',
            href: 'https://fabioaj.itch.io/dye-gather',
            category: 'games'
        },
        {
            title: t('items.reivals.title'),
            description: t('items.reivals.description'),
            imageSrc: 'https://img.itch.zone/aW1hZ2UvMTM3NTEzOS84MDI3NDY1LnBuZw==/original/vxa9e7.png',
            href: 'https://fabioaj.itch.io/reivals',
            category: 'games'
        },
        {
            title: t('items.fallInTheRain.title'),
            description: t('items.fallInTheRain.description'),
            imageSrc: 'https://img.itch.zone/aW1nLzEzNjU2MTczLnBuZw==/original/KK1C6C.png',
            href: 'https://fabioaj.itch.io/fall-in-the-rain',
            category: 'games'
        },
        {
            title: t('items.pianoTrainer.title'),
            description: t('items.pianoTrainer.description'),
            imageSrc: '/piano-trainer.png',
            href: '#',
            category: 'websites'
        }
    ]

    const filters = [
        { key: 'all', label: t('filters.all') },
        { key: 'games', label: t('filters.games') },
        { key: 'websites', label: t('filters.websites') }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.titleBlock}>
                    <h1
                        ref={titleRef}
                        className={`${styles.title} scroll-reveal ${titleVisible ? 'scroll-reveal-visible' : ''}`}
                    >{t('title')}</h1>
                </div>
                <div className={styles.filterContainer}>
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            className={`${styles.filterButton} ${activeFilter === filter.key ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter.key)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                <div className={styles.cards}>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.href}
                            {...project}
                            delay={index + 1}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
