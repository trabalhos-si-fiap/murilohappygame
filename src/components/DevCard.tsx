import Image from "next/image";

export default function DevCard(props:any){
    return(
        <div className="flex flex-col items-center">
        <a href={props.link} target="blank">
         <Image
         width={130}
         height={150}
         src={props.src}
         alt={props.alt}
         className="rounded-full hover:scale-105 hover:duration-500"/>
        </a>
        <a href={props.link}>
         <span className="text-[1.15rem] leading-7 font-black ">{props.children}</span>
        </a>
        <a href={props.link} 
         target="blank"
         className="text-[1.05rem] leading-7 text-blue-700 hover:font-black hover:duration-75 ">Linkedin</a>
    </div>
    )
}