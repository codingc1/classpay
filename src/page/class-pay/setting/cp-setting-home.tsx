import { useReactiveVar } from "@apollo/client";
import { useNavigate,  } from "react-router-dom";
import { client } from "../../../apollo"
import useError from "../../../func/sys/err/useErr"
import { cp_payUpdateInfoMutationDocument } from "../../../hooks/cp-pay/basic/createClassPay.generated"
import { cpPayVar, editCpPayVar } from "../../../stores/cp-pay-store";
import BaseMax400 from "../../../components/layout/basic-component/base-max400";
import { TitleAndLine } from "../../../components/title/title-line";
// import { useCheckboxAndText } from "../../../components/checkbox/useCheckboxAndText";
import { useState } from "react";
import { InlineInputLable } from "../../../components/input/inline-input-lable";
import { grayBtnCss } from "../../../components/button/tailwind-btn/gray-button";
import { cls } from "../../../func/basic/string/cls";
import { useSettingSubmit } from "./setting-home/useSettingSubmit";
import { SettingMoneyunit } from "./setting-home/setting-moneyunit";



export type CpSettingSubmit = {
    // setLastSettingMutationTime:React.Dispatch<React.SetStateAction<Date>>,
    moneyUnit?:string,
    numberOfDigits?:number,
    isTrade?:boolean
    objKey:string
}
 
export const CpSettingHome=()=>{
    // const cpPayRedux = useReactiveVar(cpPayVar); 
    let navigate = useNavigate()
    const cppay = useReactiveVar(cpPayVar).cppay;
    const [moneyUnit, setMoneyUnit] = useState(cppay.moneyUnit) //화폐 단위
    const [checked, setChecked] = useState(!cppay.isTrade)

    const onChangeMoneyUnit =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setMoneyUnit(e.target.value)      
    }
    const handleCheckClick = () => {
        setChecked(!checked)
        handlesubmit({objKey:'isTrade', isTrade:checked})
    }
    const [lastSettingMutationTime, setLastSettingMutationTime] = useState(new Date()) //마지막 설정 시간
    // const [lastSettingTime, setLastSettingTime] = useState(new Date()) //마지막 설정 시간

    const isCheckPossibleMutation = ()=>{ //lastSettingTime보다 1초가 지나야 설정이 가능하다.
        const now = new Date()
        const diff = now.getTime() - lastSettingMutationTime.getTime()
        if(diff < 1000){
            return false
        }
        return true
    }
    //lastSettingTime보다 1초가 지나야 설정이 가능하다.
    // const isCheckPossible = ()=>{
    //     const now = new Date()
    //     const diff = now.getTime() - lastSettingTime.getTime()
    //     if(diff < 1000){
    //         return false
    //     }
    //     return true
    // }

    const {submit} = useSettingSubmit()
    const handlesubmit=({ numberOfDigits, isTrade, moneyUnit, objKey}:CpSettingSubmit)=>{

        if(!isCheckPossibleMutation()){
          alert('업데이트에 실패하였습니다 다시 시도해 주세요.')
          return
      }
      submit({setLastSettingMutationTime, objKey, moneyUnit,numberOfDigits, isTrade })
    }


    return(  

<BaseMax400>
        {/* <div className="py-5 h-full    rounded-xl shadow-xl  flex flex-col items-center bg-white" 
            style={{width:'396px', }}> */}
  <TitleAndLine title="설정" />
  {/* <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0'}}>
                <div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
                <div>거래 내역</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section> */}
                {/* <div>payid : {payid}</div> */}
  <div className="px-3 mt-3 ">
    <SettingMoneyunit moneyUnit={moneyUnit} onChangeMoneyUnit={onChangeMoneyUnit} submit={handlesubmit} />
    {/* <div className="flex items-center">
      <div className="" style={{width:'80%'}}>
        <InlineInputLable label={'화폐 단위'} name={'moneyUnit'} placeholder={'화폐 단위'} value={moneyUnit} onChangeValue={onChange} />
      </div>
      <div className={cls(grayBtnCss({}), 'ml-1 h-8 text-center')}>변경</div>
    </div> */}
    {/* <div className=" flex  items-center">
      <div>화폐 단위</div>
      <div className="text-md ">원</div>
    </div> */}
  </div>
  <div className="px-3 mt-3 flex items-center">
    {/* {isBlockTradeContent} */}
    <ul className='text-md'>
            <label>
                <input
                type='checkbox'
                checked={checked}
                onChange={ handleCheckClick}
                />
                &nbsp;송금, 거래 금지
            </label>
        </ul>
      <span className="ml-2 text-lime-600 text-xs cursor-pointer">(체크하더라도 선생님은 가능)</span>

  </div>
  <div className="px-3 mt-7 text-sm">
    <div>물고기 경제</div>
    <div className="flex flex-wrap">사용 가능 기능 : 
     <div className="flex-1">송금, 시장놀이(물품등록, 판매-qr코드)</div>
    </div>
    <div>사용 불가능 기능 : 투자, 세금, 직업</div>
  </div>
  {/* <div className="px-3 mt-3">
    <button onClick={handlesubmit}>송금, 거래 금지</button>
    <button onClick={handlesubmit}>학급 삭제하기</button>
  </div> */}
</BaseMax400>
    )
}