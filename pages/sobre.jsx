import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '../src/hooks/useScrollReveal'

import styles from '../src/styles/Sobre.module.scss'

const stackData = {
    frontend: [
        'html', 'css', 'js', 'ts', 'react', 'nextjs', 'sass', 'materialui', 'flutter', 'angular'
    ],
    backend: [
        'java', 'spring', 'python', 'c', 'cpp', 'cs', 'rust', 'nodejs', 'nestjs'
    ],
    database: [
        'postgres', 'mysql', 'mongodb'
    ],
    tools: [
        'git', 'npm', 'vscode', 'figma', 'docker', 'aws', 'jenkins', 'github', 'selenium',
        'arduino', 'blender', 'unity', 'godot', 'linux'
    ]
}

const techNames = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    ts: 'TypeScript',
    react: 'React',
    nextjs: 'Next.js',
    sass: 'Sass',
    materialui: 'Material UI',
    flutter: 'Flutter',
    angular: 'Angular',
    java: 'Java',
    spring: 'Spring',
    python: 'Python',
    c: 'C',
    cpp: 'C++',
    cs: 'C#',
    rust: 'Rust',
    nodejs: 'Node.js',
    nestjs: 'NestJS',
    postgres: 'PostgreSQL',
    mysql: 'MySQL',
    mongodb: 'MongoDB',
    git: 'Git',
    npm: 'NPM',
    vscode: 'VS Code',
    figma: 'Figma',
    docker: 'Docker',
    aws: 'AWS',
    jenkins: 'Jenkins',
    github: 'GitHub',
    selenium: 'Selenium',
    arduino: 'Arduino',
    blender: 'Blender',
    unity: 'Unity',
    godot: 'Godot',
    linux: 'Linux'
}

function StackCategory({ title, icons, delay, scrollRef, isVisible }) {
    return (
        <div
            ref={scrollRef}
            className={`${styles.stackCategory} scroll-reveal ${delay} ${isVisible ? 'scroll-reveal-visible' : ''}`}
        >
            <h3 className={styles.stackCategoryTitle}>{title}</h3>
            <div className={styles.stackIcons}>
                {icons.map((icon) => (
                    <div key={icon} className={styles.stackIconItem}>
                        <Image
                            src={`https://skillicons.dev/icons?i=${icon}`}
                            alt={techNames[icon] || icon}
                            width={48}
                            height={48}
                            loading="lazy"
                            unoptimized={true}
                        />
                        <span className={styles.tooltip}>{techNames[icon] || icon}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Sobre() {
    const t = useTranslations('about')

    const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.1 })
    const [textRef, textVisible] = useScrollReveal({ threshold: 0.1 })
    const [stackTitleRef, stackTitleVisible] = useScrollReveal({ threshold: 0.1 })
    const [frontendRef, frontendVisible] = useScrollReveal({ threshold: 0.1 })
    const [backendRef, backendVisible] = useScrollReveal({ threshold: 0.1 })
    const [dbRef, dbVisible] = useScrollReveal({ threshold: 0.1 })
    const [toolsRef, toolsVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>

                <div className={styles.bentoGrid}>
                    <div
                        ref={imageRef}
                        className={`${styles.bentoCard} ${styles.imageCard} scroll-reveal ${imageVisible ? 'scroll-reveal-visible' : ''}`}
                    >
                        <Image
                            className={styles.image}
                            src="/profile-picture.jpg"
                            width={320}
                            height={480}
                            alt={t('imageAlt')}
                        />
                    </div>

                    <div
                        ref={textRef}
                        className={`${styles.bentoCard} ${styles.whoAmICard} scroll-reveal scroll-reveal-delay-2 ${textVisible ? 'scroll-reveal-visible' : ''}`}
                    >
                        <h2 className={styles.subtitle}>{t('whoAmI')}</h2>
                        <div className={styles.textContainer}>
                            <p className={styles.paragraph}>{t('greeting')}</p>
                            <p className={styles.paragraph}>{t('education1')}</p>
                            {t('education2') && (
                                <p className={styles.paragraph}>{t('education2')}</p>
                            )}
                            <p className={styles.paragraph}>{t('hobbies')}</p>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.stackSection}`}>
                        <h2
                            ref={stackTitleRef}
                            className={`${styles.stackTitle} scroll-reveal ${stackTitleVisible ? 'scroll-reveal-visible' : ''}`}
                        >
                            {t('myStack')}
                        </h2>

                        <div className={styles.stackGrid}>
                            <StackCategory
                                title={t('frontend')}
                                icons={stackData.frontend}
                                delay="scroll-reveal-delay-1"
                                scrollRef={frontendRef}
                                isVisible={frontendVisible}
                            />
                            <StackCategory
                                title={t('backend')}
                                icons={stackData.backend}
                                delay="scroll-reveal-delay-2"
                                scrollRef={backendRef}
                                isVisible={backendVisible}
                            />
                            <StackCategory
                                title={t('database')}
                                icons={stackData.database}
                                delay="scroll-reveal-delay-3"
                                scrollRef={dbRef}
                                isVisible={dbVisible}
                            />
                            <StackCategory
                                title={t('tools')}
                                icons={stackData.tools}
                                delay="scroll-reveal-delay-4"
                                scrollRef={toolsRef}
                                isVisible={toolsVisible}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
