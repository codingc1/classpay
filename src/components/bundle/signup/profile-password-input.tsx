
interface ITdProps {
    password:string; 
    setPassword: React.Dispatch<React.SetStateAction<string>>; 
  }


export const PasswordInput=({password, setPassword, }:ITdProps)=>{

    const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
        const passValue= e.target.value; 
        setPassword(passValue)
    }

    return( //error = false msg = '사용가능합니다' 가 되어야 함
    <div className={`w-full  `}>
        <div className="w-full flex flex-col mb-3" >
          <input className={`w-full input-lime `} placeholder={"비밀번호"} type="password"
            value={password} onChange={onChangePassword}/>        
        </div>
        
    </div>
    )
}