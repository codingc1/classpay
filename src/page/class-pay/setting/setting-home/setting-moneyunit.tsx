import { grayBtnCss } from "../../../../components/button/tailwind-btn/gray-button"
import { cls } from "../../../../func/basic/string/cls"
import { CpSettingSubmit } from "../cp-setting-home"




export const SettingMoneyunit = ({moneyUnit,onChangeMoneyUnit, submit}:{
    moneyUnit:string,
    onChangeMoneyUnit:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    submit:({objKey,moneyUnit}:CpSettingSubmit)=>void
}) => {


    return( //mt-3 mb-2
    <div className="flex items-center">
      <div className="" >
        <div className={` w-full flex `}  >
            <label className=" w-20 flex justify-center items-center text-center">화폐 단위</label >
            <input className="w-20 border  rounded-md text-center" 
            placeholder={'화폐 단위'} value={moneyUnit} onChange={onChangeMoneyUnit}/>
        </div>
      </div>
      <div className={cls(grayBtnCss({}), 'ml-1 h-8 text-center')} onClick={()=>submit({objKey:'moneyUnit' ,moneyUnit})}>변경</div>
    </div>
    )
}