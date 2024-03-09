import { useNavigate } from "react-router-dom";
import { CL_CP_INSTI_NAME_HANGUL, IInstitution } from "../../../stores/type/institution-type"
import { editCpInstitutionVar } from "../../../stores/cp-institution";
import { CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME, CP_INSTITUTION_BANK_ROUTE_NAME, CP_INSTITUTION_CENTERBANK_ROUTE_NAME, CP_INSTITUTION_HOME_ROUTE_NAME } from "../../../routers/contains/ecomomy";



//기관 이름들
export const InstitutionChild = ({institutionsList,setSidebarOpen}:{
    institutionsList:IInstitution[],
    setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>
}) => { //Partial
  let navigate = useNavigate();
//   const {data:Medata} = useMe()
//   const isStudent= ()=>{
//     if(!Medata)return true
//     console.log(Medata.cp_me.position!==POSITION.Teacher)
//     return Medata.cp_me.position!==POSITION.Teacher
//   }
    // const { institutionsList} =useInstitutionshMutation()
    return(
        <div className="w-full" >
            {institutionsList.map((institution:IInstitution)=>{ //pl-9
                // if(institution.insti_name==='설정' && isStudent()){
                //     return <div></div>
                // }
                return(
                    <div key={institution.id} className="py-2 text-gray-400 hover:bg-gray-50 hover:text-gray-900 text-base  cursor-pointer" style={{paddingLeft:'2.25rem'}}
                        onClick={()=>{
                            editCpInstitutionVar.institution.selectSet(institution) //기관 선택 
                            editCpInstitutionVar.selPermissionNum(0)//기관 상단의 서브 메뉴 번호
                            setSidebarOpen(false)
                            if(institution.insti_name===CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK){ //중앙은행
                                navigate(CP_INSTITUTION_CENTERBANK_ROUTE_NAME)
                            }else if(institution.insti_name===CL_CP_INSTI_NAME_HANGUL.BANK){ //은행
                                navigate(CP_INSTITUTION_BANK_ROUTE_NAME)
                            }else if(institution.insti_name===CL_CP_INSTI_NAME_HANGUL.FAIR_TRADE){ //공정거래위원회 -최근 거래내역
                                navigate(CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME)
                            }else{
                                navigate(CP_INSTITUTION_HOME_ROUTE_NAME)
                            }
                            
                        }}>
                        {institution.insti_name}
                    </div>
                )
            })}
            {/* <div className="pl-9 text-gray-400 hover:bg-gray-50 hover:text-gray-900 text-base  cursor-pointer">
                child
            </div> */}
            
        </div>
    )
}