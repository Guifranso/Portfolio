import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ItemExperiencia from '../src/components/ItemExperiencia'
import { useTranslations } from 'next-intl'

import styles from '../src/styles/Experiencias.module.scss'

export default function Experiencias() {
    const t = useTranslations('experiences')

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{t('title')}</h1>
                <div className={styles.list}>
                    <ItemExperiencia
                        funcao={t('items.arcom.role')}
                        instituicao={t('items.arcom.institution')}
                        prazo={t('items.arcom.period')}
                        descricao={t('items.arcom.description')}
                        imagemSrc="/arcom.png"
                    />
                    <ItemExperiencia
                        funcao={t('items.iftmTeacher.role')}
                        instituicao={t('items.iftmTeacher.institution')}
                        prazo={t('items.iftmTeacher.period')}
                        descricao={t('items.iftmTeacher.description')}
                        imagemSrc="/sim-elas-podem.png"
                    />
                    <h1 className={styles.title}>{t('educationTitle')}</h1>
                    <ItemExperiencia
                        funcao={t('items.iftmStudent.role')}
                        instituicao={t('items.iftmStudent.institution')}
                        prazo={t('items.iftmStudent.period')}
                        descricao={t('items.iftmStudent.description')}
                        imagemSrc="/iftm.jpg"
                    />
                    <ItemExperiencia
                        funcao={t('items.techers.role')}
                        instituicao={t('items.techers.institution')}
                        prazo={t('items.techers.period')}
                        descricao={t('items.techers.description')}
                        imagemSrc="/techers.png"
                    />
                    <ItemExperiencia
                        funcao={t('items.ufu.role')}
                        instituicao={t('items.ufu.institution')}
                        prazo={t('items.ufu.period')}
                        descricao={t('items.ufu.description')}
                        imagemSrc="/ufu.png"
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}
