import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ItemExperiencia from '../src/components/ItemExperiencia'

import styles from '../src/styles/Experiencias.module.scss'

export default function Experiencias() {
	return (
		<div className={styles.page}>
			<Header></Header>
			<main className={styles.main}>
				<h1 className={styles.title}> Experiências </h1>
				<div className={styles.list}>
					<ItemExperiencia
						funcao="Analista de sistemas"
						instituicao="Arcom"
						prazo="Maio de 2021 - Agosto de 2023"
						descricao="Primeiro emprego atuando na área trabalhando como desenvolvedor utilizando Java, React e Android"
						imagemSrc="/arcom.png"
					/>
					<ItemExperiencia
						funcao="Professor"
						instituicao="IFTM"
						prazo="Agosto de 2022 - Outubro de 2022"
						descricao="Primeira experiência atuando como professor, ensinando desenvolvimento web básico com HTML e CSS"
						imagemSrc="/sim-elas-podem.png"
					/>
					<h1 className={styles.title}> Educação </h1>
					<ItemExperiencia
						funcao="Técnico em desenvolvimento de jogos"
						instituicao="IFTM"
						prazo="janeiro de 2020 - dezembro de 2022"
						descricao="Curso completo no qual aprendi sobre desenvolvimentos de jogos com Unity, Game Maker, Unreal e outras tecnologias."
						imagemSrc="/iftm.jpg"
					/>
					<ItemExperiencia
						funcao="Diploma em desenvolvedor de jogos e web"
						instituicao="Techers"
						prazo="setembro de 2019 - dezembro de 2023"
						descricao="Curso completo no qual aprendi sobre desenvolvimentos de jogos com Unity, Game Maker, Unreal e outras tecnologias."
						imagemSrc="/techers.png"
					/>
					<ItemExperiencia
						funcao="Estudante"
						instituicao="UFU"
						prazo="fevereiro de 2023 - dezembro de 2026"
						descricao="Curso completo no qual aprendi sobre desenvolvimentos de jogos com Unity, Game Maker, Unreal e outras tecnologias."
						imagemSrc="/ufu.png"
					/>
				</div>
			</main>
			<Footer />
		</div>
	)
}
