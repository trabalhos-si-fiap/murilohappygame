
import DevCard from "../DevCard";
import devCaique from "../../../public/static/imgs/sobre/caique-dev.png"
import devElias from "../../../public/static/imgs/sobre/elias-dev.jpeg"
import devMurilo from "../../../public/static/imgs/sobre/murilo.png"
import devRafael from "../../../public/static/imgs/sobre/rafael_costrov.jpeg"
import devMarcella from "../../../public/static/imgs/sobre/marcella-dev.jpg"


export default function Desenvolvedores(){
    return(
        <div className="text-black flex flex-col items-center gap-7">
            <h1 className="text-3xl font-black">Desenvolvedores</h1>
            <div className="flex min-w-screen gap-10 justify-center items-center">
                <DevCard
                 src={devCaique}
                 alt={"Caique Carneiro"}
                 link={'https://www.linkedin.com/in/caique-franco-3981b32b7/'}
                 >Caique Carneiro
                </DevCard>
                <DevCard
                 src={devElias}
                 alt={"Elias Moura"}
                 link={'https://www.linkedin.com/in/elias-s-moura/'}
                 >Elias Moura
                </DevCard>
                <DevCard
                 src={devMurilo}
                 alt={"Murilo Godoi"}
                 link={'https://www.linkedin.com/in/murilo-godoi-a0299523a'}
                 >Murilo Godoi
                </DevCard>
                <DevCard
                 src={devRafael}
                 link={'https://www.linkedin.com/in/rafael-costrov/'}
                 alt={"Rafael Costrov"}>
                 Rafael Costrov
                </DevCard>
                <DevCard
                 src={devMarcella}
                 link={'https://www.linkedin.com/in/marcella-esteves-9182ab241/'}
                 alt={"Marcella Lara"}>
                 Marcella Lara
                </DevCard>
            </div>
        </div>
    )
}