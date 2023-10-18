import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function Projetos () {
	return (
		<div className="h-screen dark:bg-back-primary-dark flex flex-col justify-between">
			<Header/>
            <main className="flex flex-col h-full w-2/4 mx-auto mt-12">
                <h1 className="text-primary-light text-6xl font-bold my-10"> Projetos </h1>
                <div className="flex">
                    <div className="flex flex-col ml-4 mt-4 text-gray-900 font-light dark:text-primary-dark">
                        <p className="flex my-2">Olá! Sou Guilherme, apaixonado por tecnologia e programação! </p>
                        <p className="flex my-2">
                            residente em Uberlândia.
                            Formei-me em Programação de Jogos, solidificando minha afinidade com o mundo digital. Atualmente, estudo Sistemas de Informação
                            na Universidade Federal de Uberlândia (UFU) e me envolvo em projetos pessoais.
                        </p>
                        <p className="flex my-2">
                            Participei de hackathons e competições, aprendendo
                            muito sobre a área. Estou animado com o futuro e comprometido a aplicar meus conhecimentos para contribuir com projetos que possam
                            impactar positivamente as pessoas.
                        </p>
                        <p className="flex my-2">
                            Além de tudo, no meu tempo livre gosto de jogar e tocar guitarra.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
		</div>
	)
}
