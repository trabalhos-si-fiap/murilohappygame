import Link from "next/link";

export default function LargeButton(props: any){
    return (
        <Link href={props.link} 
              className={`text-center 
                text-lg ${props.className ?? ''} px-4 py-4 rounded-md font-semibold cursor-pointer 
                w-1/2 m-auto hover:bg-transparent border-4 text-white hover:duration-200
                ${props.className ?? ''} ${props.className ?? ''}`}
               >
                <span>{props.children}</span>
        </Link>
    )
}