import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";

export default function telaDoJogo() {
    return (
        <div className="flex flex-col w-[100%] ">
            <Header></Header>
            <div className="flex flex-col flex-grow min-h-screen text-center ">
                <h2 className="font-black my-5 text-3xl text-black w-[100%] ">Code Panda</h2>
                <div className="flex items-center justify-center h-[85vh]">
                    <iframe
                        className=" w-2/3 h-[100%] justify-center text-center"
                        id="game"
                        allow="autoplay"
                        src="//html5.gamedistribution.com/rvvASMiM/a673d7286acc41c898d159aba8f1fe0e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.coquinhos.com%2Fprogramar-o-panda%2Fplay%2F&amp;gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5jb3F1aW5ob3MuY29tL3Byb2dyYW1hci1vLXBhbmRhL3BsYXkvIiwicGFyZW50RG9tYWluIjoiY29xdWluaG9zLmNvbSIsInRvcERvbWFpbiI6ImNvcXVpbmhvcy5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D"
                    ></iframe>
                </div>
                <div className="my-5 text-black text-center ">
                    <h4 className="font-bold text-2xl"> Categorias </h4>
                    <div className="flex  justify-center gap-2 text-center">
                        <p>Programação</p>
                        <p>Ciência</p>
                    </div>
                </div>
                <div className="text-black flex flex-col gap-5 items-center text-center mt-5 mb-9">
                    <h5 className="text-xl font-semibold">Descrição do jogo</h5>
                    <div className=" flex flex-col gap-3 items-center" >
                        <p className="w-2/3 text-base">
                            Embarque em uma jornada educativa com o adorável Code Panda! Este jogo
                            on-line, desenvolvido pelo Programar al Panda, é uma maneira divertida e
                            interativa para crianças do ensino fundamental mergulharem no mundo da
                            programação e robótica. Através de desafios envolventes, os jogadores
                            aprenderão habilidades digitais essenciais para o seu futuro
                            profissional.
                        </p>
                        <p className="w-2/3 text-base">
                            No universo de Code Panda, os jogadores programam o urso panda para
                            navegar por diversos obstáculos e alcançar o precioso bambu. Nos
                            estágios iniciais, eles dominam conceitos simples de programação, como
                            movimentos básicos em quatro direções. À medida que avançam, são
                            introduzidos a conceitos mais avançados, como loops para repetir
                            instruções e funções de salto com diferentes números de caixas para
                            saltar.
                        </p>
                        <p className="w-2/3 text-base">
                            Com Code Panda, a aprendizagem se torna uma aventura cativante onde cada
                            desafio superado é uma conquista para o futuro digital das crianças.
                        </p>
                    </div>
                </div>
        </div>
            <Footer></Footer>
        </div>
    )
}