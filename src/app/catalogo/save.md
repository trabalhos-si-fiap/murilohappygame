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
                </ul>


                 <div className="
         flex flex-col p-7 bg-[#0d3b66] w-[23rem] h-[38rem] items-center gap-5
         rounded-md shadow-2xl">
            <Image
            src={imagem}
            width={150}
            height={150}
            alt="Logo picture"
            ></Image>
            <h2 className="text-2xl font-black my-4">{nome}</h2>
            <p className="w-60 my-2 h-80 text-justify">{descricao}</p>
            <LargeButton
            className="bg-orange-400  border-orange-400 hover:text-orange-400"
            link={'/telaDoJogo'}
            >Jogar</LargeButton>
        </div>