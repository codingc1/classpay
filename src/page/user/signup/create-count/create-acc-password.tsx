import { SetStateAction, useCallback } from "react"

import { chkPassword } from "./chk-password";
import { FormErrorLight } from "../../../../components/bundle/signup/form-error-light";

interface ITdProps {
    password:string; passwordTwo:string;
    setPassword: React.Dispatch<React.SetStateAction<string>>; setPasswordTwo: React.Dispatch<React.SetStateAction<string>>;
    passMsg:string; setPassMsg: React.Dispatch<React.SetStateAction<string>>;
    isModifyMode?:boolean;
  }
// additionalSenMenu, setAdditionalSenMenu
// :{mainId:string, setMainId: React.Dispatch<React.SetStateAction<string>>,isMainIdMsgObj,setIsMainIdMsgObj:React.Dispatch<React.SetStateAction<{
//     isMainIdMsg: string; isMainIdError: boolean; }>>}
export const CreateAccPassword: React.FC<ITdProps>=({password, passwordTwo,setPassword, setPasswordTwo, passMsg, setPassMsg, isModifyMode})=>{

    const isSame=(password:string, passwordTwo:string)=>{
        if(password !== passwordTwo){
            setPassMsg("두 비밀번호를 같게 만들어 주세요.")
        }else{
            setPassMsg('')
        }
    }
    //useCallback, login실제 구현
    //https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
    const onChangeMainId =(e: React.ChangeEvent<HTMLInputElement>) => {
        const passValue= e.target.value; 
        setPassword(passValue)

        if (chkPassword(passValue).length>0) { 
            setPassMsg(chkPassword(passValue))//"6자 이상, 영어 숫자가 포함되어야 합니다"
        } else {
            isSame(passValue, passwordTwo)
        }
      }
    const onChangePassTwo =(e: React.ChangeEvent<HTMLInputElement>) => {
        const passValue= e.target.value; 

        // if(password !== passValue){
        //     console.log(password, passValue, '???')
        //     setPassMsg("두 비밀번호가 다릅니다.") }
        // else{
        //     setPassMsg('')
        // }
        setPasswordTwo(passValue)
        isSame(password, passValue)
    }

        const makeMarginBottom=()=>{
            if( passMsg.length>0 ){
                return ''
            }else{
                return 'mb-3'
            }
        }
    return( //error = false msg = '사용가능합니다' 가 되어야 함
    <div className={`w-full  `}>
        <div className="w-full flex flex-col" >
            <div className="flex">
                <label className="w-1/4 flex justify-center items-center text-center">비밀번호  </label >
                <input className={`w-full input-lime ${makeMarginBottom()} `} placeholder={isModifyMode?"새 비밀번호":"비밀번호"} type="password"
                value={password} onChange={onChangeMainId}/>
            </div>
          <div>{passMsg.length>0 && <FormErrorLight errorMessage={passMsg} />}</div>  
        
        <div className="flex">
            <label className="w-1/4 ">
                <div>비밀번호</div>
                <div className="text-center">확인</div>
            </label >
            <input className={`w-full input-lime  `} placeholder={isModifyMode?"새 비밀번호 확인":"비밀번호 확인"} type="password"
            value={passwordTwo} onChange={onChangePassTwo}/>
        </div>
        </div>
        
        
    </div>
    )
}