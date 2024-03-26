import { gql, useMutation, useReactiveVar } from "@apollo/client";
import  {  useCallback, useEffect, useState } from "react";
import {Helmet} from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { client } from "../../../apollo";


import { LoginButton } from "../../../components/button/login-button";
import {InlineInputLable, InlineInputLableNum} from "../../../components/input/inline-input-lable";
import { inputOnChangeObj } from "../../../func/html/inputOnChangObj";
import useError from "../../../func/sys/err/useErr";
import { cp_createClassPayMutationDocument } from "../../../hooks/cp-pay/basic/createClassPay.generated";
import { routeVar, editRouteVar } from "../../../stores/route-info-store";
import { logoutFunc } from "../../../func/sys/auth/logout-func";
import { editCpPayVar } from "../../../stores/cp-pay-store";


//!--Depessed --!//
export const CreateCpPay = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')

  const [classPay, setClassPay] = useState({className:'',schoolName:'',classTh:0,classNum:0})
  const [isClassName, setIsClassName] = useState(true) //https://www.daleseo.com/react-checkboxes/
  // const [className, setClassName] = useState('')
  // const [schoolName, setSchoolName] = useState('')
  // const [classTh, setClassTh] = useState('')
  // const [classNum, setClassNum] = useState('')
  
  // const [lastRequestTime, setLastRequestTime] = useState(new Date())
  const navigate = useNavigate();
  const routeInfo = useReactiveVar(routeVar);

  useEffect(()=>{
    editRouteVar.header.setVisible(false) //상단 메뉴 보이게
  },[])


  const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    inputOnChangeObj({e, obj:classPay, fn:setClassPay})
  }
  const checkChenged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsClassName(e.target.checked)
    // if(e.target.checked){
    //   setClassPay({...classPay, schoolName:'',classTh:0,classNum:0})
    // }
  }
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name, type } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    
  //   if(type === 'number' ){
  //     const num = Number(value)
  //     if(typeof num === 'number' && num >=0){
  //       setClassPay({
  //         ...classPay, // 기존의 input 객체를 복사한 뒤
  //         [name]: num // name 키를 가진 값을 value 로 설정
  //       });  
  //     }
  //   }else{
  //     setClassPay({
  //       ...classPay, // 기존의 input 객체를 복사한 뒤
  //       [name]: value // name 키를 가진 값을 value 로 설정
  //     });
  //   }
    
  // };

  // const onChangeClassName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setClassName( e.target.value)
  // }, [])
  // const onChangePassword =(e: React.ChangeEvent<HTMLInputElement>) => {
  //   const passValue= e.target.value; 
  //   setPassword(passValue)
  // }
  // const onChangePassTwo =(e: React.ChangeEvent<HTMLInputElement>) => {
  //   const passValue= e.target.value; 
  //   setPasswordTwo(passValue)
  // }

  const [handleError] = useError()
  const classCreateMutation =()=>{
    editRouteVar.setLoading(true)
    const {className, schoolName,classTh,classNum} = classPay
    client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
      mutation:cp_createClassPayMutationDocument,
      variables:{
        cp_createClassPayInput:{className:className.trim(), schoolName:schoolName.trim(),classTh,classNum}
      }
    })
    .then(async({data})=>{
      // console.log(data, ': data res')
      if(data &&data.cp_CreateClassPay.result ){
        alert('생성하였습니다.')
        const respay =data.cp_CreateClassPay.result
        editCpPayVar.setPayID(respay.id)
        editCpPayVar.cppay.set(respay)
        // await client.refetchQueries({
        //   include: [CP_PAYS_QUERY],
        // });
        logoutFunc()
        navigate("/")
      }else if(data?.cp_CreateClassPay.error){
        alert(data.cp_CreateClassPay.error)
      }
    })
    .catch(e => handleError(e, 'cp_CreateClassPayMutation'))
    .finally(()=>editRouteVar.setLoading(false))
  }
  
  const submit = () => { //회원가입 버튼 눌렀을 때
    if(routeInfo.isLoading)return
    const {className, schoolName,classTh,classNum} = classPay
    if(className.length < 2){
      alert('2자 이상 입력해 주세요');return;
    }
    if(schoolName.length !== 0){
      if(schoolName.length < 3){
        alert('학교 이름이 맞는지 확인해 주세요');return;
      }
      if(classTh ===0){
        alert('학년을 입력해 주세요');return;
      }
      if(classNum ===0){
        alert('학반을 입력해 주세요');return;
      }
    }

    const isConfirm = window.confirm(className+'를 생성하시겠습니까? ')
    if(!isConfirm)return
    classCreateMutation()


  }; 

  return(
    <div className="w-full h-screen px-5 mt-7 max-w-screen-lg mx-auto flex flex-col  items-center">
      <Helmet><title>물고기 교실경제</title></Helmet>
      <section className="w-full max-w-sm flex flex-col justify-center items-center text-sm">
        <div className="py-2 text-lg">물고기경제 학급 추가</div>
        <div className="w-full mt-3 ">학급에서 사용할 학급 페이를 만듭니다.</div>
        <div className="mt-3 mb-2 w-full flex ">
          <label className=" w-1/3 flex justify-center items-center text-center">물고기경제 이름</label >
          <input className="w-full input-lime " name={'className'} placeholder="이름" value={classPay.className} onChange={onChange}/>
        </div>

        <div className="w-full text-sm">
        <label><input
          type="checkbox"
          checked={isClassName}
          onChange={checkChenged}
        />
        &nbsp;학반 사용
      </label>
      </div>

        {isClassName
        &&<div className="w-full px-1 py-3 rounded-md border border-blue-400">
          <div className="w-full text-xs"># 선택(학생이 학교,학반 정보로 아이디 찾기 가능)</div>
          <div className="px-3 text-xs">없어도 물고기경제 개설이 가능합니다.</div>
          <InlineInputLable label="학교이름" name={'schoolName'} value={classPay.schoolName} onChangeValue={onChange} />
          <InlineInputLableNum label="학년"  name={'classTh'} value={classPay.classTh} onChangeValue={onChange} />
          <InlineInputLableNum label="반"  name={'classNum'} value={classPay.classNum} onChangeValue={onChange} />
        </div>}
        {/* <div className="mt-3 w-full flex ">
          <div className=" w-1/3 flex justify-center items-center text-center">비밀번호</div>
          <div className="w-full flex flex-col" >
            <input className={`w-full input-lime `} placeholder={"물고기경제 로그인 비밀번호"} type="password"
              value={password} onChange={onChangePassword}/>       
            <input className={`w-full input-lime  `} placeholder={"비밀번호 확인"} type="password"
              value={passwordTwo} onChange={onChangePassTwo}/>
        </div>
        </div> */}
        {/* <div className="w-full mb-2  text-xs"># 4자리이상</div> */}
  
        
        
        <div className="w-full mt-3 mb-1">
          <LoginButton loading={false} actionText={"학급 생성"} submit={submit} />
        </div>

      
        {/* <div className=" w-full flex justify-between text-sm">
        {renderChecks()}
              <button  className="text-lime-600 hover:underline">비밀번호 찾기</button>
        </div> */}
      </section>
  
      
  
  
    </div>
    
  );
 };
