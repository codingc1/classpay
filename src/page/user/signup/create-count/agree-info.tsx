import { useEffect, useState } from "react"
import { useCheckboxAndText } from "../../../../components/checkbox/useCheckboxAndText"
import { AGREE_PRIVACY_ROUTE_NAME, LOGIN_ROUTE_NAME, TERMS_CONDITIONS } from "../../../../routers/route-name-constants"





export const AgreeInfo = ({setIsTeacher, setAgreeAll}:{
    // agreeAll:boolean, 
    setIsTeacher: React.Dispatch<React.SetStateAction<boolean>>,
    setAgreeAll: React.Dispatch<React.SetStateAction<boolean>>
}) => { 
    const [ indivisualContent, indivisualChecked,] = useCheckboxAndText({text:'개인정보 수집 동의',size:' text-md'}) //PRIVACY_POLICY_ROUTE_NAME
    const [ mulgogiAgreeContent, mulgogiAgreeChecked,] = useCheckboxAndText({text:'물고기 교실경제 이용약관',size:' text-md'})
    const [ isTeacherContent, isTeacherChecked,] = useCheckboxAndText({text:'14세 이상이고 선생님입니다',size:' text-md'})
    useEffect(()=>{ 
        if(indivisualChecked && mulgogiAgreeChecked ){
            setAgreeAll(true)
        }else{
            setAgreeAll(false)
        }
    },[indivisualChecked, mulgogiAgreeChecked, ])
    useEffect(()=>{
        if(isTeacherChecked){
            setIsTeacher(true)
        }else{
            setIsTeacher(false)
        }
    },[isTeacherChecked])
    //TERMS_CONDITIONS
    return(
    <div>
        {/* <div>개인정보 수집 동의</div> */}
        <div className="mt-2 flex">
            {isTeacherContent}
        </div>
        <div className="mt-1 flex">
            {indivisualContent}
            <span className="ml-2 text-lime-600"> 
                <a href={AGREE_PRIVACY_ROUTE_NAME} target="_blank" rel="noopener noreferrer">보기</a></span>
        </div>
        <div className="mt-1 flex">
            {mulgogiAgreeContent}
            <span className="ml-2 text-lime-600"> 
                <a href={TERMS_CONDITIONS} target="_blank" rel="noopener noreferrer">보기</a></span>
        </div>
        <div className="mt-2">
          이미 회원가입 하셨나요?{" "}
          <a href={LOGIN_ROUTE_NAME} className="text-lime-600 hover:underline">로그인</a>
        </div>
    </div>
    )
}