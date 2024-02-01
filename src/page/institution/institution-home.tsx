import { useReactiveVar } from "@apollo/client";
import { useWindowSizeTrans } from "../../func/html/useWidthTrans"
import { CSS_LEN } from "../../func/html/width-contain/css-contain"
import { cpInstitutionVar, editCpInstitutionVar } from "../../stores/cp-institution";
import { CL_CP_INSTI_NAME_HANGUL, Class_Insti, IInstiPermission, IInstitution } from "../../stores/type/institution-type";
import { useState } from "react";
import { InstiCenterBank } from "./bank/insti-center-bank";
import { InstiCenterBankDeleteMoney } from "./bank/insti-center-bank-delmoney";
import { InstitutionBank } from "./bank/insti-bank";






//어느 기관을 클릭하던 보여줌, 단지 그 기관에 주어진 권한을 위에 보여줌
//css-base CProductsHome
export const InstitutionHome=()=>{
    const institution = useReactiveVar(cpInstitutionVar).institution;
    const selPermissionNum = useReactiveVar(cpInstitutionVar).selPermissionNum;

    //
    const {transW500} = useWindowSizeTrans()

    const CPermission = new Class_Insti();

    const gridCss =(idx:number)=>{
        if(idx===selPermissionNum){
            return 'h-12 mt-3 flex items-center bg-slate-700 rounded-lg cursor-pointer text-white '
        }
        return 'h-12 mt-3 flex items-center bg-slate-200 rounded-lg cursor-pointer text-gray-900'
    }
    //sm:text-3xl sm:truncate
    //onClick={()=>navigate(CP_PAY_TRADE_HISTORY_ROUTE_NAME)}
    const insitContent=()=>{
        // {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK && selPermissionNum===0 && <InstiCenterBank />}
        // {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK && selPermissionNum===1 && <InstiCenterBankDeleteMoney />}
        // {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.BANK && selPermissionNum===0 && <InstitutionBank />}
        switch(institution.insti_name){
            case CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK:
                if(selPermissionNum===0){
                    return <InstiCenterBank />
                }else if(selPermissionNum===1){
                    return <InstiCenterBankDeleteMoney />
                }
                return <div></div>
            case CL_CP_INSTI_NAME_HANGUL.BANK:
                if(selPermissionNum===0){
                    return <InstitutionBank />
                }
                return <div></div>
            default:  <div></div>
        }
    }
    return( 
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className="py-5 max-w-sm  rounded-xl shadow-xl  flex flex-col items-center" //bg-slate-200
        //mt-5 ,height:'500px' //490px
            style={{width:transW500(CSS_LEN.basic_wide), minHeight:'500px'}}>
            <header className="w-full  ">
                <div className="grid box-border" style={{gridTemplateColumns:'repeat(3, minmax(0, 1fr)',gap: '0.25rem'}}>
                    {institution.instiPermission.map((permission,index)=>{
                        return(
                            <div key={permission.id} className={gridCss(index)} onClick={()=>editCpInstitutionVar.selPermissionNum(index)}>
                                <div className="w-full text-center   truncate">{CPermission.permition_toString(permission.permissionName)}</div>  
                            </div>
                        )
                    })}
                </div>
                {/* <div className="grid " style={{gridTemplateColumns:'repeat(3, minmax(0, 1fr)',gap: '0.25rem'}}>
                    <div className="h-12 mt-3 flex items-center bg-slate-700 rounded-lg cursor-pointer">
                        <div className="w-full text-center  text-white truncate">
                            거래내역dddd
                        </div>
                    </div>
                    <div className=" h-12 mt-3 flex justify-center items-center bg-slate-200 rounded-lg text-gray-900 border-slate-600 border
                        cursor-pointer" >
                        <div>거래내역</div>  
                    </div>
                    <div className=" h-12 mt-3 flex justify-center items-center bg-slate-200 rounded-lg text-gray-900 border-slate-600 border
                        cursor-pointer" >
                        <div>거래내역</div>  
                    </div>
                    <div  >
                        거래
                    </div>
                </div> */}
                {/* <div className="grid grid-cols-4 gap-4">
                    <div className="border">01</div><div>01</div><div>01</div><div>01</div>
                    <div>01</div><div>01</div><div>01</div><div>01</div>
                    <div>09</div>
                </div> */}
            </header>

            {insitContent()}
            {/* {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK && selPermissionNum===0 && <InstiCenterBank />}
            {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.HANGOOK_BANK && selPermissionNum===1 && <InstiCenterBankDeleteMoney />}
            {institution.insti_name===CL_CP_INSTI_NAME_HANGUL.BANK && selPermissionNum===0 && <InstitutionBank />} */}
        </div>
        </div>
    )
}

{/* <div className=" h-12 mt-3 flex justify-center items-center bg-slate-700 rounded-lg text-white
                        cursor-pointer" >
                        <div>거래내역</div>  
                    </div>
                    <div className=" h-12 mt-3 flex justify-center items-center bg-slate-200 rounded-lg text-gray-900 border-slate-600 border
                        cursor-pointer" >
                        <div>거래내역</div>  
                    </div>
                    <div className=" h-12 mt-3 flex justify-center items-center bg-slate-200 rounded-lg text-gray-900 border-slate-600 border
                        cursor-pointer" >
                        <div>거래내역</div>  
                    </div> */}

                    // <div className=" w-1/3 flex items-center">
                    //     <div className="text-xl font-semibold leading-7 text-gray-900 ">
                    //         기관관리
                    //     </div>
                    // </div>