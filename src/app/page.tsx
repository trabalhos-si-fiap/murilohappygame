import Header from "@/components/templates/header";
import Image from "next/image";
import primeiraImagem from "../../public/static/imgs/implementacao.png"
import segundaImagem from "../../public/static/imgs/quem_somos-removebg-preview.png"
import terceiraImagem from "../../public/static/imgs/novo_jogo-removebg-preview.png"
import Container from "@/components/templates/Container";
import TextContainer from "@/components/templates/TextContainer";
import LargeButton from "@/components/LargeButton";
import ContainerTextoSobreNos from "@/components/templates/HomeSobreNos";
import Footer from "@/components/templates/footer";
import Desenvolvedores from "@/components/templates/Desenvolvedores";

export default function Home() {
  return (
      <div>
         <Header></Header>
         <div className="flex flex-col items-center gap-[8rem] ">

          <Container>
          <Image
              src={primeiraImagem}
              width={500}
              height={500}
              alt="Homem usando computador"
            />
            <TextContainer>
              <h1 className="font-black text-3xl m-auto text-black">Implementação de projeto</h1>
              <p>
                Somos um site focado em oferecer os melhores jogos digitais para aprendizado. 
                Nosso objetivo é proporcionar uma experiência envolvente e educativa, onde cada 
                jogo é cuidadosamente selecionado para promover o desenvolvimento cognitivo e 
                habilidades essenciais de forma divertida e acessível.
              </p>
              <LargeButton 
              link={'/'} 
              className={'bg-orange-400 border-orange-400 hover:text-orange-400'}>
                Jogue agora
              </LargeButton>
            </TextContainer>
          </Container>
          <Container>
            <TextContainer>
              <h1 className="font-black text-3xl m-auto text-black">Quem Somos</h1>
              <p>Somos uma equipe dedicada à divulgação e criação de jogos educativos 
                inovadores, reunindo paixão pela aprendizagem e compromisso com a inclusão. 
                Nossa missão é oferecer experiências interativas que não apenas ensinam conceitos 
                importantes,mas também celebram a diversidade e promovem um ambiente acolhedor para 
                todos os jogadores, independentemente de suas origens ou habilidades.
              </p>
              <LargeButton 
              link={'/'} 
              className={'bg-[#0d3b66] border-[#0d3b66]  hover:text-[#0d3b66]'}>
                Ver sobre nós
              </LargeButton>
            </TextContainer>
            <Image
              src={segundaImagem}
              width={500}
              height={500}
              alt="Homem usando computador"
            />
          </Container>
          <Container>
            <Image
            src={terceiraImagem}
            width={500}
            height={500}
            alt="menino jogando videogame"
            />
            <TextContainer>
              <h1 className="font-black text-3xl m-auto text-black">Sugira novos jogos</h1>
              <p>Clique no botão abaixo para sugerir um novo jogo.</p>
              <LargeButton 
              className={'bg-[#0d3b66] border-[#0d3b66] hover:text-[#0d3b66]'} 
              link={"/"}>
               Sugerir jogo
              </LargeButton>
            </TextContainer>
          </Container>
          <ContainerTextoSobreNos/>
          <Desenvolvedores></Desenvolvedores>
          
          <Footer></Footer>
         </div>
      </div>
  )
}
