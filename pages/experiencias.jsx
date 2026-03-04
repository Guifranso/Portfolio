import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ItemExperiencia from '../src/components/ItemExperiencia'
import { useTranslations } from 'next-intl'
import { useScrollReveal } from '../src/hooks/useScrollReveal'

import styles from '../src/styles/Experiencias.module.scss'

export default function Experiencias() {
    const t = useTranslations('experiences')

    const [expTitleRef, expTitleVisible] = useScrollReveal({ threshold: 0.1 })
    const [eduTitleRef, eduTitleVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>

                <div className={styles.bentoGrid}>
                    <div className={`${styles.bentoCard} ${styles.sectionCard}`}>
                        <h2
                            ref={expTitleRef}
                            className={`${styles.sectionTitle} scroll-reveal ${expTitleVisible ? 'scroll-reveal-visible' : ''}`}
                        >
                            {t('title')}
                        </h2>

                        <div className={styles.itemsGrid}>
                            <ItemExperiencia
                                funcao={t('items.ford.role')}
                                instituicao={t('items.ford.institution')}
                                prazo={t('items.ford.period')}
                                descricao={t('items.ford.description')}
                                imagemSrc="/ford.png"
                                delay={1}
                            />
                            <ItemExperiencia
                                funcao={t('items.bioma.role')}
                                instituicao={t('items.bioma.institution')}
                                prazo={t('items.bioma.period')}
                                descricao={t('items.bioma.description')}
                                imagemSrc="/bioma.jpg"
                                delay={2}
                            />
                            <ItemExperiencia
                                funcao={t('items.wisebyte.role')}
                                instituicao={t('items.wisebyte.institution')}
                                prazo={t('items.wisebyte.period')}
                                descricao={t('items.wisebyte.description')}
                                imagemSrc="/wisebyte.jpg"
                                delay={1}
                            />
                            <ItemExperiencia
                                funcao={t('items.arcom.role')}
                                instituicao={t('items.arcom.institution')}
                                prazo={t('items.arcom.period')}
                                descricao={t('items.arcom.description')}
                                imagemSrc="/arcom.png"
                                delay={2}
                            />
                            <ItemExperiencia
                                funcao={t('items.iftmTeacher.role')}
                                instituicao={t('items.iftmTeacher.institution')}
                                prazo={t('items.iftmTeacher.period')}
                                descricao={t('items.iftmTeacher.description')}
                                imagemSrc="/sim-elas-podem.png"
                                delay={1}
                            />
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.sectionCard}`}>
                        <h2
                            ref={eduTitleRef}
                            className={`${styles.sectionTitle} scroll-reveal ${eduTitleVisible ? 'scroll-reveal-visible' : ''}`}
                        >
                            {t('educationTitle')}
                        </h2>

                        <div className={styles.itemsGrid}>
                            <ItemExperiencia
                                funcao={t('items.ufu.role')}
                                instituicao={t('items.ufu.institution')}
                                prazo={t('items.ufu.period')}
                                descricao={t('items.ufu.description')}
                                imagemSrc="/ufu.png"
                                delay={1}
                            />
                            <ItemExperiencia
                                funcao={t('items.iftmStudent.role')}
                                instituicao={t('items.iftmStudent.institution')}
                                prazo={t('items.iftmStudent.period')}
                                descricao={t('items.iftmStudent.description')}
                                imagemSrc="/iftm.jpg"
                                delay={2}
                            />
                            <ItemExperiencia
                                funcao={t('items.techers.role')}
                                instituicao={t('items.techers.institution')}
                                prazo={t('items.techers.period')}
                                descricao={t('items.techers.description')}
                                imagemSrc="/techers.png"
                                delay={1}
                            />
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}
