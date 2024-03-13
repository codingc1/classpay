import { StudentListTableMoney } from "../../../../../components/students/stulist-height-money"
import { useCpPayUserList } from "../../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import { ICpStudent, editStudentsVar } from "../../../../../stores/cp-students-store"
import { useNavigate } from "react-router-dom"
import { CP_FAIR_TRADE_MARKETTRADE_STUDENTS_ROUTE_NAME } from "../../../../../routers/contains/ecomomy"
import BaseMax400 from "../../../../../components/layout/basic-component/base-max400"
import { InstiHeader } from "../../../insti-home/insti-header"
import { FairTradeCheckMarketTradeGroupBox } from "../ftc-markettrade-group-box"


//students list market
export const StudentListMarket = () => {
  let navigate = useNavigate();
    const{data} = useCpPayUserList() 
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    
    const onClickStudent=(stu:ICpStudent)=>{ //한명 선택
        editStudentsVar.setStudent(stu)
        navigate(CP_FAIR_TRADE_MARKETTRADE_STUDENTS_ROUTE_NAME+'/'+stu.number)
    }
    
    return(
      <BaseMax400>
        <InstiHeader />
        <div className="w-full mt-3 px-3">
          <FairTradeCheckMarketTradeGroupBox />
          <div>
              <div className="mt-2 border-t border-gray-100 py-2 sm:col-span-2 sm:px-0">
                <dd className="mt-2 text-sm text-gray-900">
                  <ul role="list" className=" divide-y divide-gray-100 rounded-md border border-gray-200" style={{maxHeight:'50vh',overflowY:'auto'}}>
                  {studentList.map((student,i)=><StudentListTableMoney key={'sender'+i} index={i} student={student} onClickStudent={onClickStudent} />)}
                  </ul>
                </dd>
            </div>
          </div>
        </div>
    </BaseMax400>
    )
}