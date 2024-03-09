import { Helmet } from "react-helmet-async"
import { LoginButton } from "../../../components/button/login-button"
import { useCallback, useState } from "react"
import { CreateAccMainId } from "./create-count/create-acc-mainid"
import { CreateAccEmail } from "./create-count/create-acc-email"
import { CreateAccPassword } from "./create-count/create-acc-password"
import { chkCpUser } from "../../../utils/check-create/cp-id-password-check"
import useErrorShow from "../../../func/sys/err/useErrShow"
import { useMutation } from "@apollo/client"
import { CP_CREATE_TEACHER_MUTATION } from "./create-count/cp_checkExistId"
import { cp_CreateTeacherMutationMutation, cp_CreateTeacherMutationMutationVariables } from "./create-count/cp_checkExistId.generated"
import { useNavigate } from "react-router-dom"
import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants"
import { AgreeInfo } from "./create-count/agree-info"



export const SignUp = () => {
  let navigate = useNavigate()
    const [mainId, setMainId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [isMainIdMsgObj, setIsMainIdMsgObj] = useState({isMainIdMsg:'', isMainIdError:true})
    const [emailMsg, setEmailMsg] = useState('')
    const [passMsg, setPassMsg] = useState('')

    const [name, setName] = useState('선생님')
    const [className, setClassName] = useState('')

    const [isTeacher, setIsTeacher] = useState(false)
    const [agreeAll, setAgreeAll] = useState(false)
    

    const onChangName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName( e.target.value)
      }, [])
    const onChangeClassName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {setClassName( e.target.value)}, [])

    
    const [handleError] = useErrorShow()
    const [cp_CreateTeacherMutation, { loading,  }] = useMutation<cp_CreateTeacherMutationMutation, cp_CreateTeacherMutationMutationVariables>(CP_CREATE_TEACHER_MUTATION, {
       onCompleted(data) {
           if(data.cp_CreateTeacher?.ok === true){
            alert('회원가입이 완료되었습니다.')
            navigate(LOGIN_ROUTE_NAME)
           }else if(data.cp_CreateTeacher?.error){
            alert(data.cp_CreateTeacher.error)
           }else{
               alert('error')
           }
       }, onError: (err) => {
           handleError(err, 'useChecks')
         } });
    const submit =()=>{
        if(loading)return;
        if(isMainIdMsgObj.isMainIdError  ){ // || (!isMainIdMsgObj.isMainIdError && isMainIdMsgObj.isMainIdMsg)
            alert("아이디를 입력해 주세요"); return}
        if(isMainIdMsgObj.isMainIdMsg.length>0 && isMainIdMsgObj.isMainIdError){
          alert(isMainIdMsgObj.isMainIdMsg); return
        }
          if(emailMsg.length>0){
            alert("이메일을 입력해 주세요"); return}
            //약간 중복되는 감? 각각에도 체크메세지가 발생하는데
          if(chkCpUser.checkPosibleCpUser({mainId, name,  password, number:0}).error){  //email은 없음
            alert(chkCpUser.checkPosibleCpUser({mainId, name,  password, number:0}).error)
            return;
          }
          if(passMsg.length>0){
            alert("비밀번호를 입력해 주세요"); return}      
          if(password !== passwordTwo){
            alert('두 비밀번호가 다릅니다.'); return; }

          if(!agreeAll){
            alert('아래 약관에 동의하셔야 가입할 수 있습니다.'); return;
          }
          if(!isTeacher){
            alert('선생님만 회원가입을 할 수 있습니다.'); return;
          }
            cp_CreateTeacherMutation({
              variables: {
                createCpTeacherInput: { mainId,email, password, name, className,  },
                      },
              });
    }
    return(
        <div className="w-full h-screen flex flex-col items-center">
        <div className="w-full h-screen flex items-center flex-col ">
            <Helmet><title>물고기경제 로그인</title>
              <meta name="title" content="물고기경제" />
              <meta name="description" content="물고기경제입니다, 구글크롬에서 작동합니다." />
              <meta property="og:title" content="물고기경제 로그인" />
              <meta property="og:description" content="물고기경제 로그인입니다" />
              <link rel="apple-touch-icon" href="%PUBLIC_URL%/airship192.png" />
              {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
            </Helmet>
            {/* -mt-3 */}
            <div className=" w-full mt-2 max-w-sm flex flex-col  ">
                <div className=" mb-3 text-2xl font-mono text-center">물고기경제 회원가입</div>  
                <br />
                <CreateAccMainId mainId={mainId} setMainId={setMainId} isMainIdMsgObj={isMainIdMsgObj} setIsMainIdMsgObj={setIsMainIdMsgObj} />
                <CreateAccEmail email={email} setEmail={setEmail} emailMsg={emailMsg} setEmailMsg={setEmailMsg} />
                <CreateAccPassword password={password} passwordTwo={passwordTwo} setPassword={setPassword} setPasswordTwo={setPasswordTwo} passMsg={passMsg} setPassMsg={setPassMsg} />

                <div className="w-full mt-2 text-sm">(학급생성)학생들에게 보여지는 선생님 이름</div>
                <div className="mb-2 w-full flex ">
                    <div className=" w-1/4 flex justify-center items-center text-center">이름</div>
                    <input className="w-full input-lime " placeholder="이름" value={name} onChange={onChangName}/>
                </div>

                <section className="w-full mt-1 ">
                    {/* <div className=" text-lg">학급 이름</div> */}
                <div className=" mb-2 w-full flex ">
                    <label className=" w-1/4 flex justify-center items-center text-center">학급명</label >
                    <input className="w-full input-lime " name={'className'} placeholder="이름" value={className} onChange={onChangeClassName}/>
                </div>
                </section>
                <div className="w-full mb-1">
                    <LoginButton loading={false} actionText={"회원가입"} submit={submit} />
                </div>

                <AgreeInfo setIsTeacher={setIsTeacher} setAgreeAll={setAgreeAll} />

            </div>


           

        </div>
        </div>
    )
}