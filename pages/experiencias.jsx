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
                        funcao={t('items.ford.role')}
                        instituicao={t('items.ford.institution')}
                        prazo={t('items.ford.period')}
                        descricao={t('items.ford.description')}
                        imagemSrc="/ford.png"
                    />
                    <ItemExperiencia
                        funcao={t('items.bioma.role')}
                        instituicao={t('items.bioma.institution')}
                        prazo={t('items.bioma.period')}
                        descricao={t('items.bioma.description')}
                        imagemSrc="/bioma.jpg"
                    />
                    <ItemExperiencia
                        funcao={t('items.wisebyte.role')}
                        instituicao={t('items.wisebyte.institution')}
                        prazo={t('items.wisebyte.period')}
                        descricao={t('items.wisebyte.description')}
                        imagemSrc="/wisebyte.jpg"
                    />
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
                        funcao={t('items.ufu.role')}
                        instituicao={t('items.ufu.institution')}
                        prazo={t('items.ufu.period')}
                        descricao={t('items.ufu.description')}
                        imagemSrc="/ufu.png"
                    />
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
                </div>
            </main>
            <Footer />
        </div>
    )
}
