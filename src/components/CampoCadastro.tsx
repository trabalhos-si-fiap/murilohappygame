export default function CampoCadastro(props: any){
    return(
        <input
              type={props.tipo}
              name={props.nome}
              value={props.value}
              id={props.id}
              placeholder={props.placeholder}
              onChange={props.onChange}
              className="border-2 border-white px-4 py-1.5 rounded-md bg-orange-400
                       placeholder:text-white outline-0 focus:border-orange-600 
                       focus:border-[2.5px] "    
            />
    )
}