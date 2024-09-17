export default function ElementoDeFormulario(props: any){
    return(
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.children}</label>
            <input 
            type="text" 
            id={props.id}
            placeholder={props.placeholder}
            className= {`px-3 py-1 rounded-md text-black` }
            />
        </div>
    )
}