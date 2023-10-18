import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ItemExperiencia from '../src/components/ItemExperiencia'

export default function Experiencias () {
	return (
		<div className=" dark:bg-back-primary-dark flex flex-col justify-between">
			<Header></Header>
            <main className="flex flex-col h-full w-2/4 mx-auto mt-12 dark:bg-back-primary-dark">
                <h1 className="text-primary-light text-6xl font-bold my-10"> Experiências </h1>
                <div className="flex flex-col w-max">
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
					<h1 className="text-primary-light text-6xl font-bold my-10"> Educação </h1>
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
			<Footer/>
		</div>
	)
}
