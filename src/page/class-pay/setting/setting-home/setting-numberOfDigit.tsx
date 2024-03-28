import { grayBtnCss } from "../../../../components/button/tailwind-btn/gray-button"
import { cls } from "../../../../func/basic/string/cls"
import { CpSettingSubmit } from "../cp-setting-home"




export const SettingNumberOfDigit = ({numberOfDigits,onChangenumberOfDigits, submit}:{
    numberOfDigits:number,
    onChangenumberOfDigits:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    submit:({objKey,numberOfDigits}:CpSettingSubmit)=>void
}) => {


    return( //mt-3 mb-2
    <div className="flex items-center py-2 ">
      <div className="" >
        <div className={` w-full flex `}  >
            <label className=" w-20 flex justify-center items-center text-center">화폐 콤마</label >
            <input className="w-20 border  rounded-md text-center" 
            placeholder={'화폐 콤마 자리수'} value={numberOfDigits} onChange={onChangenumberOfDigits}/>
        </div>
      </div>
      <div>자리 마다</div>
      <div className={cls(grayBtnCss({}), 'ml-1 h-8 text-center')} onClick={()=>submit({objKey:'numberOfDigits' ,numberOfDigits})}>변경</div>
    </div>
    )
}