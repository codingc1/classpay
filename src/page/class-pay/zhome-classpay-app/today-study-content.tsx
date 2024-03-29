import { useCpPayUserList } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { grayBtnCss } from "../../../components/button/tailwind-btn/gray-button";
import { useNavigate } from "react-router-dom";
import { CP_PAY_MEMBER_ROUTE_NAME } from "../../../routers/route-name-constants";
import { useEffect, useState } from "react";
import { CP_INSTITUTION_CENTERBANK_ROUTE_NAME } from "../../../routers/contains/ecomomy";
import { cls } from "../../../func/basic/string/cls";
import { useMe } from "../../../hooks/user/useMe";
import { useStudentsList } from "../../../hooks/cp-pay/cp-pay-user/useStudentsList";


 
export const TodayStudyContent = () => {
  let navigate = useNavigate()
  // const{data} = useCpPayUserList() 
  const {data:meData} = useMe()
  const [alramStatus, setAlramStatus] = useState('')
  const {studentList} = useStudentsList()
  // const {data:meData} = useMe()
  // const institution = useReactiveVar(cpInstitutionVar).institution;
  // const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
//학생을 등록해 주세요
//화폐를 발행해 주세요
//처음 하는 교사에게 해야할 것 안내
useEffect(()=>{
  if(studentList.length <= 1){
    setAlramStatus('NO_STUDENT')
  }else if(isNoMoney() && meData && meData.cp_me.money === 0){
    setAlramStatus('NO_MONEY')
  }else{
    setAlramStatus('')
  }
},[studentList, meData])
//cp_institution home에서 모든 기관을 사용 (넘복잡) => 각 기관별로 이동..
const isNoMoney = ()=>{
  //money가 0이 아닌 학생 찾기
  if(!studentList ) return false
  // if(meData.cp_me.money !== 0) return false
  const students = studentList
  for(let i=0; i<students.length; i++){
    if(students[i].money !== 0) {
      return false
    }
  }
  return true
}
// const firstUserView = ()=>{
//   if(studentList.length <= 1){
//     return (
//     <div className="flex px-2 items-center">
//       <div>학생 등록하기</div>
//       <div className={grayBtnCss({})} onClick={()=>navigate(CP_PAY_MEMBER_ROUTE_NAME)}>이동</div>
//     </div>
//     )
//   }else if(isNoMoney()){
//     <div className="flex px-2 items-center">
//       <div>화폐 발행하기</div>
//       <div className={grayBtnCss({})} onClick={()=>navigate(CP_PAY_MEMBER_ROUTE_NAME)}>이동</div>
//     </div>
//   }else{
//     return <div></div>
//   }
// }

const alramView = ()=>{
  if(alramStatus === 'NO_STUDENT'){
    return (
      <div className="flex px-2 items-center">
      <div>학생을 등록해 주세요</div>
      <div className={grayBtnCss({})} onClick={()=>navigate(CP_PAY_MEMBER_ROUTE_NAME)}>이동</div>
    </div>
    )
}
if(alramStatus === 'NO_MONEY'){ 
  return (
    <div className="flex px-2 items-center">
      <div>화폐 발행하기</div>
      <div className={cls(grayBtnCss({}), 'ml-2')} onClick={()=>navigate(CP_INSTITUTION_CENTERBANK_ROUTE_NAME)}>이동</div>
    </div>
    )
}
return <div></div>
}

 
return(
<article className="w-full relative px-3 mt-2">
  <div className="w-full h-20 p-3 flex flex-col   bg-white rounded-lg">
    <div className="w-full px-2 font-bold">공부할 내용</div>
    <div>
      {/* {firstUserView()} */}
      {alramView( )}
    </div>
  </div>
</article>
)
}