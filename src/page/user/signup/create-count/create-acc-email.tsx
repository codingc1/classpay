
import { SetStateAction, useCallback } from "react"
import { FormErrorLight } from "../../../../components/bundle/signup/form-error-light";


interface ITdProps {
    email:string; 
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    emailMsg:string;
    setEmailMsg:React.Dispatch<React.SetStateAction<string>>
  }
// additionalSenMenu, setAdditionalSenMenu
// :{mainId:string, setMainId: React.Dispatch<React.SetStateAction<string>>,isMainIdMsgObj,setIsMainIdMsgObj:React.Dispatch<React.SetStateAction<{
//     isMainIdMsg: string; isMainIdError: boolean; }>>}
export const CreateAccEmail: React.FC<ITdProps>=({email, setEmail,emailMsg, setEmailMsg})=>{

    //useCallback, login실제 구현
    //https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegex.test(e.target.value)) { 
            setEmailMsg('메일주소를 입력해 주세요(추후 비밀번호찾기로 쓰일예정입니다)')
        } else {
            setEmailMsg('')
        }
      }, [])

      const makeMarginBottom=()=>{
        if(emailMsg.length>0 ){
            return ''
        }else{
            return 'mb-3'
        }
    }
    return( //error = false msg = '사용가능합니다' 가 되어야 함
    <div className={`w-full ${makeMarginBottom()} `}>
        <div className="w-full flex" >
            <label className="w-1/4 flex justify-center items-center text-center">Email</label >
            <input className="w-full input-lime" placeholder="email"
            value={email} onChange={onChangeEmail}/>
        </div>
        {emailMsg.length>0 && <FormErrorLight errorMessage={emailMsg} />}
    </div>
    )
}