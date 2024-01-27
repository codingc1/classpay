import { useNavigate } from "react-router-dom";
import { CP_INSTITUTION_HOME_ROUTE_NAME } from "../../../routers/route-name-constants"
import { IInstitution } from "../../../stores/type/institution-type"
import { useInstitutionshMutation } from "./useInstitutionshMutation"
import { editCpInstitutionVar } from "../../../stores/cp-institution";


//
export const InstitutionChild = ({institutionsList,setSidebarOpen}:{
    institutionsList:IInstitution[],
    setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>
}) => { //Partial
  let navigate = useNavigate();
    // const { institutionsList} =useInstitutionshMutation()
    return(
        <div className="w-full" >
            {institutionsList.map((institution:IInstitution)=>{ //pl-9
                return(
                    <div key={institution.id} className="py-2 text-gray-400 hover:bg-gray-50 hover:text-gray-900 text-base  cursor-pointer" style={{paddingLeft:'2.25rem'}}
                        onClick={()=>{
                            editCpInstitutionVar.institution.selectSet(institution)
                            setSidebarOpen(false)
                            navigate(CP_INSTITUTION_HOME_ROUTE_NAME)
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