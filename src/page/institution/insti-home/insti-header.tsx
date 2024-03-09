import { useReactiveVar } from "@apollo/client";
import { cpInstitutionVar, editCpInstitutionVar } from "../../../stores/cp-institution";
import { Class_Insti, IInstiPermission } from "../../../stores/type/institution-type";
import { CP_INSTI_PERMISSION } from "../../../__generated__/gql-types";
import { useNavigate } from "react-router-dom";
import { CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME, CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME } from "../../../routers/contains/ecomomy";




export const InstiHeader=()=>{
    let navigate = useNavigate()
    const institution = useReactiveVar(cpInstitutionVar).institution;
    const selPermissionNum = useReactiveVar(cpInstitutionVar).selPermissionNum;
    const CPermission = new Class_Insti();
    
    const gridCss =(idx:number)=>{
        if(idx===selPermissionNum){
            return 'h-12 mt-3 flex items-center bg-slate-700 rounded-lg cursor-pointer text-white '
        }
        return 'h-12 mt-3 flex items-center bg-slate-200 rounded-lg cursor-pointer text-gray-900'
    }
    const move=(name:CP_INSTI_PERMISSION)=>{ //공정관리위원회는 navigate사용
        if(name===CP_INSTI_PERMISSION.FairTradeBookBank){
            navigate(CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME)
        }else if(name===CP_INSTI_PERMISSION.FairTradeCheck){
            navigate(CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME)
        }
            
    }
return(
    <header className="w-full  ">
        <div className="grid box-border" style={{gridTemplateColumns:'repeat(3, minmax(0, 1fr)',gap: '0.25rem'}}>
            {institution.instiPermission.map((permission,index)=>{
                return(
                    <div key={permission.id} className={gridCss(index)} onClick={()=>{
                        editCpInstitutionVar.selPermissionNum(index)
                        move(permission.permissionName)
                        }}>
                        <div className="w-full text-center   truncate">{CPermission.permition_toString(permission.permissionName)}</div>  
                    </div>
                )
            })}
        </div>
    </header>
)
}

function navigateCP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME() {
    throw new Error("Function not implemented.");
}
