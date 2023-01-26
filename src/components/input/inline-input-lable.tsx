



//한 줄로 왼쪽 제목 오른쪽 입력칸
export const InlineInputLable=({label,name, placeholder,value,onChangeValue, ...rest}:{
    label:string,name?:string, placeholder?:string, value:string, onChangeValue:(e: React.ChangeEvent<HTMLInputElement>)=>void})=>{

    return(
        <div className={`mt-3 mb-2 w-full flex `} {...rest} >
            <label className=" w-1/3 flex justify-center items-center text-center">{label}</label >
            <input className="w-full input-lime rounded-md " name={name||''}
             placeholder={placeholder||=label} value={value} onChange={onChangeValue}/>
      </div>
    )
}

export const InlineInputLableNum=({label,name, placeholder,value,onChangeValue, ...rest}:{
    label:string,name?:string, placeholder?:string, value:number, onChangeValue:(e: React.ChangeEvent<HTMLInputElement>)=>void})=>{

    return(
        <div className={`mt-3 mb-2 w-full flex `} {...rest} >
            <label className=" w-1/3 flex justify-center items-center text-center">{label}</label >
            <input className="w-full input-lime rounded-md " name={name||''} type={'number'}
             placeholder={placeholder||=label} value={value ===0?'':value} onChange={onChangeValue}/>
      </div>
    )
}