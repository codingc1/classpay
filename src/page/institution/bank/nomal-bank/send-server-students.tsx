import { useEffect, useState } from "react"
import { useCpPayUserList } from "../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { IoAccessibilityOutline } from "react-icons/io5";
import { cls } from "../../../../func/basic/string/cls";
import { ICpStudent, cpStudentsVar, editStudentsVar } from "../../../../stores/cp-students-store";
import { cpStudentFn } from "../../../../stores/sub-store-fn/cp-student-fn";
import { useReactiveVar } from "@apollo/client";
import { StudentListTableMoney } from "../../../../components/students/stulist-height-money";
import { StudentListTableMoneyServeral } from "../../../../components/students/stulist-height-money-several";
import { useSendmoneyInput } from "../../../../components/bundle/institution/useSendmoneyInput";
import { useInstiSendMoneyOneToMany } from "../../../../hooks/cp-pay/institution/bankbook/useInstiSendMoneyOneToMany";
import { cpInstitutionVar } from "../../../../stores/cp-institution";
import { checkMoney } from "../../../../utils/institution/chk-sendmoney";
import { addCommaMan } from "../../../../func/basic/number/addComma";
import { cpPayVar } from "../../../../stores/cp-pay-store";

export const ServerStudents=()=>{
    const{data} = useCpPayUserList() 
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    const institution = useReactiveVar(cpInstitutionVar).institution;
    //배열이 3배로 늘어남
    // const basicstudentList = data && data.cp_PayUserLists?data.cp_PayUserLists :[] 
    // const studentList = basicstudentList.concat(basicstudentList).concat(basicstudentList)
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    const selectStudent = useReactiveVar(cpStudentsVar).student; 
    const [isStudentModal, setIsStudentModal] = useState(true)//한명
    const [isServeralStudentModal, setIsServeralStudentModal] = useState(false)//여러명
    const [receiveStudents, setReceiveStudents] = useState<ICpStudent[]>([]) //송금 받는 학생들

    useEffect(()=>{
        editStudentsVar.setStudent(cpStudentFn.store.student)
        return ()=>editStudentsVar.setStudent(cpStudentFn.store.student)
    },[])
    //studentList를 3배로 늘임
    // const dummy = studentList.concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList)
    //i가 짝수면 bg color gray-100
    
    const onClickStudent=(stu:ICpStudent)=>{ //한명 선택
        editStudentsVar.setStudent(stu)
        setIsStudentModal(false)
    }

    const allSelectStudents=()=>{
      //자기 자신은 선택 불가
      const filterdStudent = studentList.filter((student)=>student.id!==selectStudent.id)
      setReceiveStudents([...filterdStudent])
    }
    const allUnSelectStudents=()=>{
      setReceiveStudents([])
    }
    const onClickStudentServeral=(stu:ICpStudent)=>{ //여러명 선택
      //receiveStudents에서 id가 같은 학생이 있으면 삭제, 없으면 추가
      const index = receiveStudents.findIndex((student)=>student.id===stu.id)
      if(index===-1){
        //자기 자신은 선택 불가
        if(stu.id===selectStudent.id)return
        const pushStudent = [...receiveStudents,stu]
        //pushStudent를 number 순으로 정렬하기
        const res= pushStudent.sort((a,b)=>a.number-b.number)
        setReceiveStudents(res)
      }else{
        const newStudents = receiveStudents.filter((student)=>student.id!==stu.id)
        setReceiveStudents(newStudents)
      }
    }

  const {callMutation,} = useInstiSendMoneyOneToMany()
    const submit=()=>{
      //한명도 선택하지 않았다면
      if(!selectStudent.name){
        alert('보내는 사람을 선택해주세요.')
        return
      }
      if(receiveStudents.length===0){
        alert('받는 사람을 선택해주세요.')
        return
      }
      //금액 체크 //server와 동일한 방법
      const isSenderMinusMoney = checkMoney.minusMoney(selectStudent.money, money)
      if(isSenderMinusMoney.error ||!isSenderMinusMoney.senderResultPrice ){
        alert(isSenderMinusMoney.error)
        return
      }
      //보내는 사람과 받는 사람이 똑같은 사람이 있는지?
      const isSameStudent = receiveStudents.find((student)=>student.id===selectStudent.id)
      if(isSameStudent){
        alert('받는 사람에 보내는 사람과 동일한 사람이 들어갔습니다.')
        return
      }
      const receiverResMoney = receiveStudents.map(el=>el.money + money) //받는 사람 금액 계산
      const chkReceiverResMoney = receiverResMoney.map(el=>checkMoney.maxMoney(el))
      const isReceiversMoneyMaxOverError = chkReceiverResMoney.find(el=>el.error) //받는 사람 금액 오버?
      if(isReceiversMoneyMaxOverError){
        alert(isReceiversMoneyMaxOverError.error)
        return
      }
      const isConfirm = confirm('송금 하시겠습니까?')
      if(!isConfirm)return
      callMutation({insti_id:institution.id, oneuser_id:selectStudent.id, serveral_ids:receiveStudents.map((student)=>student.id), money, desciption:'은행송금'})
    }
    const {sendmoneyInputComponent,money,moneyUnit} = useSendmoneyInput({submit:submit, label:'보낼 금액(1인당)'})

    return( 
        <div className="w-full mt-3 px-3">
            {!isServeralStudentModal && <div className="mt-2 flex h-10 items-center ">
                <div className="text-md ">보내는 사람 :</div>
                <div className="ml-3 h-8 flex-1 flex justify-center items-center  rounded-md shadow-xl font-semibold border-2 cursor-pointer  " onClick={()=>{setIsStudentModal(!isStudentModal)}}>
                {/* +'('+selectStudent.money+')' */}
                    {selectStudent.name?selectStudent.number +'. '+ selectStudent.name:''}
                </div>
            </div>}

        {isStudentModal && <div className="mt-2 border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt> */}
            <dd className="mt-2 text-sm text-gray-900 " >
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
              {studentList.map((student,i)=><StudentListTableMoney key={'oneselstudent'+student.id} index={i} student={student} onClickStudent={onClickStudent} />)}
                {/* <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
              </ul>
            </dd>
          </div>}

          <div className="mt-2  ">
              <div className="flex">
                  <div className="text-md ">받는 사람 :</div>
                  <div>{receiveStudents.length}명</div>
              </div>
              <div className={cls("py-1 flex flex-wrap rounded-md shadow-xl border-2 cursor-pointer  ",receiveStudents.length>12?' text-xs':'font-semibold'  )}
                onClick={()=>{setIsServeralStudentModal(!isServeralStudentModal)}}>
                  {receiveStudents.length===0?'받는 사람 선택':''}
                  {receiveStudents.map((selstudent,i)=>(<div key={'selstudentsname'+i}>{i!==0?' ,':''}{selstudent.name}</div>))}
              </div>
          </div>

            {isServeralStudentModal && <div className="border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
            <dd className="mt-2 text-sm text-gray-900 ">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
                <div className="px-3 py-2 flex justify-between">
                  <div className="flex text-sm">
                    <div className="px-2 cursor-pointer" onClick={allSelectStudents}>모두 선택</div>
                    <div className="px-2 cursor-pointer" onClick={allUnSelectStudents}>선택 해제</div>
                  </div>
                  <div className=" text-right font-semibold text-lg cursor-pointer hover:bg-gray-200" onClick={()=>setIsServeralStudentModal(false)}>X</div>
                </div>
                {studentList.map((student,i)=>{
                  if(student.id===selectStudent.id)return
                  return(<StudentListTableMoneyServeral key={'selstudent'+student.id} index={i} student={student} onClickStudent={onClickStudentServeral} 
                    receiveStudents={receiveStudents} setReceiveStudents={setReceiveStudents} />)
                })}

              </ul>
            </dd>
            </div>}

            <div className="mt-2">
              {selectStudent.name && receiveStudents.length>0 && sendmoneyInputComponent}
            </div>
            {selectStudent.name && receiveStudents.length>0 && money>0 && 
            <div className="mt-2 flex justify-between">
              <div>{money}{moneyUnit} x {receiveStudents.length}명</div>
              <div>총 : {addCommaMan(money * receiveStudents.length, numberOfDigits)}{moneyUnit}</div>
            </div>}
            <div className="py-2"></div>
        </div> 
    )
}