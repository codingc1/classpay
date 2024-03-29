import { useMutation, useReactiveVar } from "@apollo/client";
import { cpPayVar } from "../../../stores/cp-pay-store";
import { addCommaMan } from "../../../func/basic/number/addComma";
import NomadInputPrice from "../../../components/input/nomad-input/nomad-input-price";
import { useEffect, useState } from "react";
import NomadCssButton from "../../../components/button/nomad-css-btn";
import { CP_GET_MONEY_SUPPLY_MUTATION, CP_INSTI_DELETEMONEY_MUTATION, CP_INSTI_ISSUEMONEY_MUTATION } from "../../../hooks/cp-pay/institution/institutionMu";
import useErrorShow from "../../../func/sys/err/useErrShow";
import { cp_insti_issueMoneytMutationMutation, cp_insti_issueMoneytMutationMutationVariables,
    cp_cp_getMoneySupplytMutationMutation,cp_cp_getMoneySupplytMutationMutationVariables, cp_insti_deleteMoneytMutationMutation, cp_insti_deleteMoneytMutationMutationVariables } from "../../../hooks/cp-pay/institution/institutionMu.generated";
import { client } from "../../../apollo";
import { CP_ME_QUERY, useMe } from "../../../hooks/user/useMe";
import { chkCpInstitutuion } from "../../../utils/check-create/cp-insti-check";
import { SENDMONEY_REFETCH_ARR } from "../../../hooks/cp-pay/institution/sendRefetch";
import { useStudentsListMu } from "../../../hooks/cp-pay/cp-pay-user/useStudentsListMu";


export const InstiCenterBankDeleteMoney=()=>{
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    // const productRedux = useReactiveVar(cpPayVar).trade;
    const {data:meData} =useMe()

    const [money, setMoney] = useState(0)
    const moneychange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        setMoney(num)
    }



    const [handleError] = useErrorShow()
    const {studentListRefetch} = useStudentsListMu()
    const [cp_insti_deleteMoneytMutation, { loading,  }] = useMutation<cp_insti_deleteMoneytMutationMutation, cp_insti_deleteMoneytMutationMutationVariables>(CP_INSTI_DELETEMONEY_MUTATION, {async onCompleted (data){
        if(data.cp_insti_deleteMoney.ok  ){ //
        alert('화폐 축소를 하였습니다.')
        await client.refetchQueries({
            include: SENDMONEY_REFETCH_ARR,//cppay list refech
            });
        studentListRefetch()
        setMoney(0)
        }else if(data.cp_insti_deleteMoney.error){
            // console.log(data.myChecks.error)
            alert(`화폐 축소에 실패하였습니다..\n${data.cp_insti_deleteMoney.error}` );
        }
        }, onError: (err) => {
        handleError(err, '화폐 축소에 실패하였습니다.')
        } });

    const submit=()=>{
    if(loading)return;
    if(chkCpInstitutuion.money(money).error){
        alert(chkCpInstitutuion.money(money).error);return;
    }
    const isConfirm = window.confirm(money+moneyUnit+'을 축소할까요? ')
    if(!isConfirm)return
    // console.log('submit', name, desciption, price, qty, imgurl)
    cp_insti_deleteMoneytMutation({
        variables: {
            cp_instiAcitveTeacherIssueMoneyInput: { money }, //cppay_id:Number(payid),
        },
        });
    }

    //{addCommaMan(meData?.cp_me.money||0)}
    return( // style={{width:'38%'}} //bg-indigo-500 
        
        <div className="w-full mt-3 px-3">
            <div>
                <div className="text-xl font-bold ">한국 은행</div>

            </div>
            
            <div className="mt-5 flex">
                <div>한국은행 보유금액(선생님):</div>
                <div className="flex-1 px-2">{meData?addCommaMan(meData.cp_me.money, numberOfDigits):0}{moneyUnit}</div>
            </div>
            <div className="mt-2"></div>
            <NomadInputPrice value={money}  onChange={moneychange} label="축소할 금액" name="price" isHideZeoro={true} options={{focusColor:'c_input_blue'}} moneyUnit={moneyUnit} />
            <div className="  flex mt-3" >
                    <NomadCssButton text={"승인"} onClick={submit} large={true} option={{cls:'c_btn_red'}} />
            </div>
        </div>
        
    )
}