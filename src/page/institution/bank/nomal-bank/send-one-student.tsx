import { useEffect, useState } from "react"
import { useCpPayUserList } from "../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { IoAccessibilityOutline } from "react-icons/io5";
import { cls } from "../../../../func/basic/string/cls";
import { ICpStudent, cpStudentsVar, editStudentsVar } from "../../../../stores/cp-students-store";
import { cpStudentFn } from "../../../../stores/sub-store-fn/cp-student-fn";
import { useReactiveVar } from "@apollo/client";
import { StudentListTableMoney } from "../../../../components/students/stulist-height-money";
import { useSendmoneyInput } from "../../../../components/bundle/institution/useSendmoneyInput";
import { cpInstitutionVar } from "../../../../stores/cp-institution";
import { checkMoney } from "../../../../utils/institution/chk-sendmoney";
import { useInstiSendMoneyOne } from "../../../../hooks/cp-pay/institution/bankbook/useInstiSendMoneyOne";
import { InlineInputLable } from "../../../../components/input/inline-input-lable";
import { useStudentsList } from "../../../../hooks/cp-pay/cp-pay-user/useStudentsList";

//한 명에게 보내기
export const SendOneStudent=()=>{ 
    // const{data} = useCpPayUserList() 
    const institution = useReactiveVar(cpInstitutionVar).institution;

    const {studentList} = useStudentsList()
    // const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    const selectStudent = useReactiveVar(cpStudentsVar).student; 
    const [selectReceiverStudent, setSelectReceiverStudent] = useState<ICpStudent>(cpStudentFn.store.student) //송금 받는 학생
    const [isStudentModal, setIsStudentModal] = useState(true)//한명
    const [isReceiverStudentModal, setIsReceiverStudentModal] = useState(false)//받는 사람
    const [note, setNote] = useState('') //비고
    // const [isServeralStudentModal, setIsServeralStudentModal] = useState(false)//여러명
    const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setNote(e.target.value)      
    }
    

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

    const onClickReciveStudent=(stu:ICpStudent)=>{ //한명 선택
      setSelectReceiverStudent(stu)
      setIsReceiverStudentModal(false)
  }


  const {callMutation,} = useInstiSendMoneyOne() //insti_id, sender_id, receiver_id, money, desciption
    const submit=()=>{
      //한명도 선택하지 않았다면
      if(!selectStudent.id){
        alert('보내는 사람을 선택해주세요.')
        return
      }
      if(!selectReceiverStudent.id){
        alert('받는 사람을 선택해주세요.')
        return
      }
      //금액 체크 //server와 동일한 방법
      const isSenderMinusMoney = checkMoney.minusMoney(selectStudent.money, money)
      if(isSenderMinusMoney.error  ){ //||!isSenderMinusMoney.senderResultPrice
        alert(isSenderMinusMoney.error)
        return
      }
      //보내는 사람과 받는 사람이 똑같은 사람이 있는지?
      const isReciveMoney = checkMoney.plusMoney(selectReceiverStudent.money, money)
      if(isReciveMoney.error ){
        alert(isReciveMoney.error)
        return
      }

      const isConfirm = confirm('송금 하시겠습니까?')
      if(!isConfirm)return
      callMutation({insti_id:institution.id, sender_id:selectStudent.id, receiver_id:selectReceiverStudent.id, money, desciption:note?note:'은행송금'})
    }
    const {sendmoneyInputComponent,money,moneyUnit} = useSendmoneyInput({submit:submit, label:'보낼 금액'})


    return(
        <div className="w-full mt-3 px-3">
            {!isReceiverStudentModal && <div className="mt-2 flex h-10 items-center ">
                <div className="text-md ">보내는 사람 :</div>
                <div className="ml-3 h-8 flex-1 flex justify-center items-center  rounded-md shadow-xl font-semibold border-2 cursor-pointer  " onClick={()=>{setIsStudentModal(!isStudentModal)}}>
                {/* +'('+selectStudent.money+')' */}
                    {selectStudent.name?selectStudent.number +'. '+ selectStudent.name:''}
                </div>
            </div>}

        {isStudentModal && <div className="mt-2 border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt> */}
            <dd className="mt-2 text-sm text-gray-900">
            {/* divide-y divide-gray-100 rounded-md border border-gray-200 */}
              <ul role="list" className=" divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
              {studentList.map((student,i)=><StudentListTableMoney key={'sender'+i} index={i} student={student} onClickStudent={onClickStudent} />)}
              </ul>
            </dd>
          </div>}

          <div className="mt-2 flex h-10 items-center ">
                <div className="text-md ">받는 사람 :</div>
                <div className="ml-3 h-8 flex-1 flex justify-center items-center  rounded-md shadow-xl font-semibold border-2 cursor-pointer  " onClick={()=>{setIsReceiverStudentModal(!isStudentModal)}}>
                {/* +'('+selectStudent.money+')' */}
                    {selectReceiverStudent.name?selectReceiverStudent.number +'. '+ selectReceiverStudent.name:''}
                </div>
            </div>

            {isReceiverStudentModal && <div className="mt-2 border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
            <dd className="mt-2 text-sm text-gray-900">
              <ul role="list" className=" divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
              {studentList.map((recivestudent,i)=><StudentListTableMoney key={'receive'+i} index={i} student={recivestudent} onClickStudent={onClickReciveStudent} />)}
              </ul>
            </dd>
          </div>}

          <InlineInputLable label={'비고'} name={'note'} placeholder={'내용(선택)'} value={note} onChangeValue={onChange} />
            <div className="mt-2">
              {selectStudent.id!==0 && selectReceiverStudent.id!==0 && sendmoneyInputComponent}
            </div>
        </div> 
    )
}