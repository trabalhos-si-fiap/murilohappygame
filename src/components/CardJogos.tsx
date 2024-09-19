import Image from "next/image";
import LargeButton from "./LargeButton";
import Jogo from "@/data/models/Jogo";


export interface CardJogosProps {
    jogo: Jogo
}
export default function CardJogos(props: CardJogosProps){
    const {nome, descricao, imagem } = props.jogo
    return(
        
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
    )
}