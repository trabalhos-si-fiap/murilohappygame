import Link from "next/link";

export default function Button(props: any){
    return(
        <Link className="
        bg-orange-400 px-4 py-2 rounded-xl hover:bg-orange-300 
        font-semibold cursor-pointer hover:duration-150"
        href={props.link}
        >
            {props.children}
        </Link>
    )
}