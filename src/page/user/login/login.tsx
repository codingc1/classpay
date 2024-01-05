import { gql, useLazyQuery,   } from "@apollo/client";
import { useNavigate,  } from "react-router-dom";
import {Helmet} from "react-helmet-async";
import { useCallback, useEffect, useState } from "react";
import { LoginButton } from "../../../components/button/login-button";
import { useAutoLogin } from "./auto-login";
import { client } from "../../../apollo";
import {cp_loginMutationDocument} from './login.generated'
import useError from "../../../func/sys/err/useErr";
import TokenRepository from "../../../api/token/tokenRepo";
import { editAuth } from "../../../stores/authstore";
import { logoutFunc } from "../../../func/sys/auth/logout-func";
import { editRouteVar } from "../../../stores/route-info-store";
import { CP_ME_QUERY } from "../../../hooks/user/useMe";
import { editCpPayVar } from "../../../stores/cp-pay-store";
export const CP_LOGIN_MUTATION = gql`
  mutation cp_loginMutation($cp_LoginInput: CP_LoginInput!) {
    cp_login(input: $cp_LoginInput) {
      ok
      token
      error
    }
  }
`;


export const Login = () => {
  const navigate = useNavigate();
  const [mainId, setMainId] = useState('aaa1')
  const [password, setPassword] = useState('1111')

  // const {setRouteGotoFunc} = useRouteGoTo() 
  useEffect(()=>{
    const reset =async()=>{
      editRouteVar.header.setVisible(false) //상단 메뉴 보이게
      logoutFunc()
      await client.cache.reset() 
      // setRouteGotoFunc() //다른곳에서 자동이동 파라메터를 붙였으면 설정
    }
    reset()
  },[])

  const [isChecked, renderChecks] = useAutoLogin() //auto-login에서 가져옴 네이버에서 배움 https://engineering.linecorp.com/ko/blog/line-securities-frontend-3/

const onChangeMainId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setMainId( e.target.value)
}, [])
const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value)
}


const loginSuccess=(token:string)=>{
  return new Promise((resolve) => {
  if( isChecked){ //자동로그인일때만 토큰 저장
    TokenRepository.setAuto()
  }else{
    TokenRepository.setNotAuto(); //자동저장 취소
  }
  TokenRepository.save(token)
  // editAuth.setToken(token);
  // editAuth.setLogin(true) //login처리
  resolve(token)
}
)}
const [callQuery,] = useLazyQuery(CP_ME_QUERY, { // { data:lzaymedata, called }
  onCompleted: res => {
    if(res.cp_me){
      editAuth.setLogin(true) //login처리 //same CreateCpPay, deleteCpPay
      if(res.cp_me.joinclasspay){
        editCpPayVar.setPayID(res.cp_me.joinclasspay.id)
        editCpPayVar.cppay.set(res.cp_me.joinclasspay)
        // console.log('res.cp_me.joinclasspay', res.cp_me.joinclasspay)
      }
      navigate('/')
    }
  }
});
const loginMutation =()=>{
  client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
    mutation:cp_loginMutationDocument,
    variables:{
      cp_LoginInput:{mainId, password}
    }
  })
  .then(async({data})=>{
    if(data &&data.cp_login.ok && data.cp_login.token){
      await loginSuccess(data.cp_login.token)
      callQuery()
      // await client.refetchQueries({
      //   include: [CP_ME_QUERY],//cppay list refech
      // });
    }else if(data?.cp_login.error){
      alert(data.cp_login.error)
    }
  })
  .catch(e => handleError(e, 'cp_LoginMutation'))
}
const [handleError] = useError()
  const submit = () => {
    if(mainId.length <2){
      alert('아이디를 입력해 주세요');return;
    }
    if(password.length <4){
      alert('비밀번호를 입력해 주세요');return;
    }
    loginMutation()

  };
  return (
    <div className="w-full h-screen flex flex-col items-center">
    <div className="w-full h-screen flex items-center flex-col justify-center">
        <Helmet><title>학급페이 로그인</title>
          <meta name="title" content="학급페이" />
          <meta name="description" content="학급페이입니다, 구글크롬에서 작동합니다." />
          <meta property="og:title" content="학급페이 로그인" />
          <meta property="og:description" content="학급페이 로그인입니다" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/airship192.png" />
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        </Helmet>

    <div className="-mt-3 w-full max-w-sm flex flex-col justify-center items-center">
      <div className=" mb-3 text-4xl font-mono text-center">학급페이</div>  
        <input className="w-full input-lime mb-3" placeholder="id" value={mainId} onChange={onChangeMainId}/>
        <input className={`w-full input-lime mb-3`} placeholder=" 비밀번호" type="password" value={password} onChange={onChangePassword}/>
        <div className="w-full mb-1">
          <LoginButton loading={false} actionText={"로그인"} submit={submit} />
        </div>

      <div className=" w-full flex justify-between">
        {renderChecks()}
            <button  className="text-lime-600 hover:underline">비밀번호 찾기</button>
      </div>
    {/* <div className=" w-full flex justify-start items-center">
      <div>학급페이가 처음이세요?{" "}</div>
      <div className="px-2 py-2">
        <a href="/create-account" className="text-lime-600 hover:underline">회원 가입하기</a>
      </div>
    </div> */}
    
    </div>

</div>
 </div>
  );
};