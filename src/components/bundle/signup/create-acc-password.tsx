import { FormErrorLight } from "./form-error-light";
import { chkCpUser } from "../../../utils/check-create/cp-id-password-check";

interface ITdProps {
    password:string; passwordTwo:string;
    setPassword: React.Dispatch<React.SetStateAction<string>>; setPasswordTwo: React.Dispatch<React.SetStateAction<string>>;
    passMsg:string; setPassMsg: React.Dispatch<React.SetStateAction<string>>;
    isModifyMode?:boolean;
  }
// additionalSenMenu, setAdditionalSenMenu
// :{mainId:string, setMainId: React.Dispatch<React.SetStateAction<string>>,isMainIdMsgObj,setIsMainIdMsgObj:React.Dispatch<React.SetStateAction<{
//     isMainIdMsg: string; isMainIdError: boolean; }>>}
export const CreateAccPassword=({password, passwordTwo,setPassword, setPasswordTwo, passMsg, setPassMsg, isModifyMode}:ITdProps)=>{

    const isSame=(password:string, passwordTwo:string)=>{
        if(password !== passwordTwo){
            setPassMsg("두 비밀번호가 다릅니다.")
        }else{
            setPassMsg('')
        }
    }
    //useCallback, login실제 구현
    //https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
    const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
        const passValue= e.target.value; 
        setPassword(passValue)

        const errMsg = chkCpUser.passwordErrMsg(passValue)
        if (errMsg) { 
            setPassMsg(errMsg)//"6자 이상, 영어 숫자가 포함되어야 합니다"
        } else {
            isSame(passValue, passwordTwo)
        }
        // if (chkPassword(passValue).length>0) { 
        //     setPassMsg(chkPassword(passValue))//"6자 이상, 영어 숫자가 포함되어야 합니다"
        // } else {
        //     isSame(passValue, passwordTwo)
        // }
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
          <input className={`w-full input-lime ${makeMarginBottom()} `} placeholder={isModifyMode?"새 비밀번호":"비밀번호"} type="password"
            value={password} onChange={onChangePassword}/>
          <div>{passMsg.length>0 && <FormErrorLight errorMessage={passMsg} />}</div>          
          <input className={`w-full input-lime  `} placeholder={isModifyMode?"새 비밀번호 확인":"비밀번호 확인"} type="password"
            value={passwordTwo} onChange={onChangePassTwo}/>
        </div>
        
        
    </div>
    )
}