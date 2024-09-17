export default function TextContainer(props: any){
    return(
        <div className="w-2/5 flex flex-col gap-5 text-black">
            {props.children}
        </div>
    )
}