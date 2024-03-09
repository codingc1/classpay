import { useReactiveVar } from "@apollo/client";
import BaseMax400 from "../../../components/layout/basic-component/base-max400"
import { InstiHeader } from "../insti-home/insti-header"
import { InstiCenterBank } from "./insti-center-bank"
import { cpInstitutionVar } from "../../../stores/cp-institution";
import { InstiCenterBankDeleteMoney } from "./insti-center-bank-delmoney";
import { InstitutionBank } from "./insti-bank";



 

 


export const InstiBankOuter = () => {
    const selPermissionNum = useReactiveVar(cpInstitutionVar).selPermissionNum;
    const insitContent=()=>{
        if(selPermissionNum===0){
            return <InstitutionBank />
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