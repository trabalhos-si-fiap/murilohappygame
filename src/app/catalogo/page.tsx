import CardJogos from "@/components/CardJogos";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import codePanda from "../../../public/static/imgs/code_panda.webp"
import logo from '../../../public/static/imgs/logo.svg';

export default function CatalogoDeJogos(){
    return(
        <div className="flex flex-col ">
            <Header>
            </Header>
            <h1 className="text-black text-center text-5xl py-5 font-black">Jogos</h1>
            <div className="mb-20 mt-7">
                <ul className="flex flex-col gap-24 items-center">
                    <li>
                        <ul className="flex gap-10">
                            <li>
                                <CardJogos 
                                src={codePanda}
                                link={"/telaDoJogo"}
                                descricao={"Divirtas-se aprendendo fundamentos da programação com Code Panda"}>
                                    Code Panda
                                </CardJogos>
                            </li>
                            <li>
                            <CardJogos 
                                src={logo}
                                link={"/"}
                                descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                    Jogo em construção
                                </CardJogos>
                            </li>
                            <li>
                                <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <ul className="flex gap-10">
                            <li>
                                <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                            <li>
                            <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                            <li>
                                <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <ul className="flex gap-10">
                            <li>
                                <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                            <li>
                            <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                            <li>
                                <CardJogos 
                                  src={logo}
                                  link={"/"}
                                  descricao={"Jogo ainda em construção, volte mais tarde para conferir as novidades"}>
                                      Jogo em construção
                                </CardJogos>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <Footer></Footer>
        </div>
    )
}