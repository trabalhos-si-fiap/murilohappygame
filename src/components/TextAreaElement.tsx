export default function TextAreaElement(props: any){
    return(
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.children}</label>
            <textarea 
            name={props.name} 
            id={props.id} 
            rows={3} 
            cols={50} 
            placeholder={props.placeholder}
            className="rounded-md px-2 text-black"
            >
            </textarea>
        </div>
    )
}