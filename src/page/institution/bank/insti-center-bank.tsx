import { useMutation, useReactiveVar } from "@apollo/client";
import { cpPayVar } from "../../../stores/cp-pay-store";
import { addCommaMan } from "../../../func/basic/number/addComma";
import NomadInputPrice from "../../../components/input/nomad-input/nomad-input-price";
import { useEffect, useState } from "react";
import NomadCssButton from "../../../components/button/nomad-css-btn";
import { CP_GET_MONEY_SUPPLY_MUTATION, CP_INSTI_ISSUEMONEY_MUTATION } from "../../../hooks/cp-pay/institution/institutionMu";
import useErrorShow from "../../../func/sys/err/useErrShow";
import { cp_insti_issueMoneytMutationMutation, cp_insti_issueMoneytMutationMutationVariables,
    cp_cp_getMoneySupplytMutationMutation,cp_cp_getMoneySupplytMutationMutationVariables } from "../../../hooks/cp-pay/institution/institutionMu.generated";
import { client } from "../../../apollo";
import { CP_ME_QUERY, useMe } from "../../../hooks/user/useMe";
import { chkCpInstitutuion } from "../../../utils/check-create/cp-insti-check";
import "../../../styles/button/button-color.css";
import BaseMax400 from "../../../components/layout/basic-component/base-max400";
import { InstiHeader } from "../insti-home/insti-header";
import { SENDMONEY_REFETCH_ARR } from "../../../hooks/cp-pay/institution/sendRefetch";
import { useStudentsListMu } from "../../../hooks/cp-pay/cp-pay-user/useStudentsListMu";

 

export const InstiCenterBank=()=>{
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    // const productRedux = useReactiveVar(cpPayVar).trade;
    const {data:meData} =useMe()

    const [supplyMoney, setSupplyMoney] = useState(0)
    const [money, setMoney] = useState(0)
    const moneychange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        setMoney(num)
    }



    const [handleError] = useErrorShow()
    const [cp_cp_getMoneySupplytMutation, { loading:getMoneySupplyLoading,  }] = useMutation<cp_cp_getMoneySupplytMutationMutation,cp_cp_getMoneySupplytMutationMutationVariables>(CP_GET_MONEY_SUPPLY_MUTATION, {async onCompleted (data){
        if(data.cp_cp_getMoneySupply.ok  ){ //
          setSupplyMoney(data.cp_cp_getMoneySupply.money)
       }else if(data.cp_cp_getMoneySupply.error){
         // console.log(data.myChecks.error)
         alert(`조회에 실패하였습니다..\n${data.cp_cp_getMoneySupply.error}` );
       }
     }, onError: (err) => {
        handleError(err, '조회에 실패하였습니다.')
     } });
     const getSupplySubmit=()=>{
        if(getMoneySupplyLoading)return;
        cp_cp_getMoneySupplytMutation();
     }

     const {studentListRefetch} = useStudentsListMu()
    const [cp_insti_issueMoneytMutation, { loading,  }] = useMutation<cp_insti_issueMoneytMutationMutation, cp_insti_issueMoneytMutationMutationVariables>(CP_INSTI_ISSUEMONEY_MUTATION, {async onCompleted (data){
        if(data.cp_insti_issueMoney.ok  ){ //
        alert('화폐를 발행하였습니다.')
        await client.refetchQueries({ 
            include: SENDMONEY_REFETCH_ARR,//cppay list refech
            });
        studentListRefetch()
        setMoney(0)
        }else if(data.cp_insti_issueMoney.error){
            // console.log(data.myChecks.error)
            alert(`화폐를 발행에 실패하였습니다..\n${data.cp_insti_issueMoney.error}` );
        }
        }, onError: (err) => {
        handleError(err, '화폐를 발행에 실패하였습니다.')
        } });

    const submit=()=>{
    if(loading)return;
    if(chkCpInstitutuion.money(money).error){
        alert(chkCpInstitutuion.money(money).error);return;
    }
    const isConfirm = window.confirm(money+moneyUnit+'을 발행할까요? ')
    if(!isConfirm)return
    // console.log('submit', name, desciption, price, qty, imgurl)
    cp_insti_issueMoneytMutation({
        variables: {
            cp_instiAcitveTeacherIssueMoneyInput: { money }, //cppay_id:Number(payid),
        },
        });
    }

    //{addCommaMan(meData?.cp_me.money||0)}
    return( // style={{width:'38%'}} //bg-indigo-500 
        <div className="w-full mt-3 px-3">
            <div>
            <div className="text-xl font-bold">한국 은행</div>
            <section className="py-2 h-20 w-full  rounded-xl flex justify-center items-center" >
                <div className="w-full h-full border rounded-lg shadow-md">
                    <article className="w-full h-full  flex justify-between items-center rounded-lg bg-white    font-bold">
                        <div className="px-2  ">
                            {/* <div className="cursor-pointer"><IoMdRefresh /></div> */}
                            <div>통화량</div>
                        </div>
                        <div className="px-2 flex justify-between items-center flex-1">
                            <div className="px-2 flex flex-1 justify-end items-center  space-x-1 text-indigo-500 "  >
                                <div className="text-right">{addCommaMan(supplyMoney, numberOfDigits)}</div>
                                <div>{moneyUnit}</div>
                                {/* <div>&#62;</div> */}
                            </div> 
                            <div className="h-10 px-3 rounded-md shadow-sm text-white c_btn_blue flex justify-center items-center cursor-pointer"
                                onClick={getSupplySubmit}>조회</div>
                        </div>
                    </article> 
                </div>
            </section> 
            {/* <section className="py-4 h-20 w-full  rounded-xl 
                flex justify-center items-center" style={{backgroundColor: 'rgb(96 165 250'}}>
                         
                <div className="w-full flex justify-center items-center shadow-md">
                    <article className=" h-12 flex justify-between items-center 
                        rounded-lg bg-white relative  font-bold" style={{width:'90%'}}>
                        <div className="px-2 flex items-center space-x-1  ">
                            <div className="cursor-pointer"><IoMdRefresh /></div>
                            <div>총 발행량</div>
                        </div>
                        <div className="px-2 flex items-center  space-x-1 text-indigo-500">
                            <div className="flex">
                                <div className="">
                                
                                </div>
                                <div>{moneyUnit}</div>
                            </div>
                            <div>&#62;</div>
                        </div> 
                    </article> 
                </div>
            </section>    */}
                {/* <div className="flex py-1">
                    <div>총 발행량:&nbsp;</div>
                    <div className='flex-1 font-semibold'>{addCommaMan(productRedux.product.price)}{moneyUnit}</div>
                </div> */}
            </div>
            
            <div className="mt-5 flex">
                <div>한국은행 보유금액(선생님):</div>
                <div className="flex-1 px-2">{meData?addCommaMan(meData.cp_me.money, numberOfDigits):0}{moneyUnit}</div>
            </div>
            <div className="mt-2"></div>
            <NomadInputPrice value={money}  onChange={moneychange} label="발행할 금액" name="price" isHideZeoro={true} options={{focusColor:'c_input_blue'}} moneyUnit={moneyUnit}/>
            {/* <div>발행할 금액</div> */}
            <div className="  flex mt-3" >
                    <NomadCssButton text={"승인"} onClick={submit} large={true}  />
                {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                    cursor-pointer" onClick={()=>setIsModal(true)}>
                    <div>판매물품 추가</div>  
                </div> */}
                </div>
        </div>

    )
}