import { useState } from "react"
import { StudentListTableMoney } from "../../../../../components/students/stulist-height-money"
import { useCpPayUserList } from "../../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import { ICpStudent, cpStudentsVar, editStudentsVar } from "../../../../../stores/cp-students-store"
import { OneStudnetBookBank } from "./one-student-bookbank"
import { useReactiveVar } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME, CP_FAIR_TRADE_ROUTE_NAME } from "../../../../../routers/contains/ecomomy"
import BaseMax400 from "../../../../../components/layout/basic-component/base-max400"
import { InstiHeader } from "../../../insti-home/insti-header"
import { FairTradeCheckBankBookGroupBox } from "../ftc-bankbook-group-box"


//students list bankbook
export const StudentBookBankSubHome = () => {
  let navigate = useNavigate();
    const{data} = useCpPayUserList() 
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    // const [isStudentListView, setIsStudentListView] = useState(true)

    const onClickStudent=(stu:ICpStudent)=>{ //한명 선택
        editStudentsVar.setStudent(stu)
        // setIsStudentListView(false)
        navigate(CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME+'/'+stu.number)
        //학생의 통장거래 가져오기
        //!-- 할일
    }
    
    return(
      <BaseMax400>
        <InstiHeader />
        <div className="w-full mt-3 px-3">
          <FairTradeCheckBankBookGroupBox />
          <div>
              <div className="mt-2 border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
                {/* <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt> */}
                <dd className="mt-2 text-sm text-gray-900 ">
                {/* divide-y divide-gray-100 rounded-md border border-gray-200 */}
                  <ul role="list" className=" divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
                  {studentList.map((student,i)=><StudentListTableMoney key={'sender'+i} index={i} student={student} onClickStudent={onClickStudent} />)}
                  </ul>
                </dd>
            </div>
            {/* {!isStudentListView && <OneStudnetBookBank />} */}
            {/* student={student} setIsStudentListView={setIsStudentListView}  */}
          </div>
        </div>
    </BaseMax400>
    )
}