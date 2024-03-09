import { useReactiveVar } from "@apollo/client";
import BaseMax400 from "../../../components/layout/basic-component/base-max400"
import { InstiHeader } from "../insti-home/insti-header"
import { InstiCenterBank } from "./insti-center-bank"
import { cpInstitutionVar } from "../../../stores/cp-institution";
import { InstiCenterBankDeleteMoney } from "./insti-center-bank-delmoney";





 


export const InstiCenterBankOuter = () => {
    const selPermissionNum = useReactiveVar(cpInstitutionVar).selPermissionNum;
    const insitContent=()=>{
        if(selPermissionNum===0){
            return <InstiCenterBank />
        }else if(selPermissionNum===1){
            return <InstiCenterBankDeleteMoney />
        }
        return <div></div>
     
       
    }
    return(
        <BaseMax400>
            <InstiHeader />
            {insitContent()}
        </BaseMax400>
    )

}