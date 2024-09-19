'use client';
import CardJogos from "@/components/CardJogos";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import jogos from "@/data/constants/jogos";


export default function CatalogoDeJogos() {
    return (
        <div className="flex flex-col">
            <Header />
            <h1 className="text-black text-center text-5xl py-5 font-black">Jogos</h1>
            <div className=" flex mb-20 mt-7 gap-10 align-middle justify-center">
               {jogos.map((jogo) => (
                <CardJogos key={jogo.id} jogo={jogo} />
               ))}
            </div>
            <Footer />
        </div>
    );
}
