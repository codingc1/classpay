import { useReactiveVar } from "@apollo/client";
import BaseMax400 from "../../../components/layout/basic-component/base-max400";
import { InstiHeader } from "../insti-home/insti-header";
import { cpInstitutionVar } from "../../../stores/cp-institution";
import { FairTradeBookBankHome } from "./book-bank/fair-book-bank-home";



//금융감독원 => 공정거래위원회
export const FairTradeOuter = () => { 

    const selPermissionNum = useReactiveVar(cpInstitutionVar).selPermissionNum;
    const insitContent=()=>{
        if(selPermissionNum===0){
            return <FairTradeBookBankHome />
        }else if(selPermissionNum===1){ //시장놀이 조회
            return <div></div>
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