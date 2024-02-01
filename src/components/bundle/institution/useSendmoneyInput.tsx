import { useReactiveVar } from "@apollo/client";
import NomadCssButton from "../../button/nomad-css-btn"
import NomadInputPrice from "../../input/nomad-input/nomad-input-price"
import { cpPayVar } from "../../../stores/cp-pay-store";
import { useState } from "react";





//보내는 금액 , 보내기 버튼
export const useSendmoneyInput = ({submit, label='보낼 금액'}:
    {submit:()=>void, label?:string}) => {
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    
    const [money, setMoney] = useState(0)
    const moneychange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        setMoney(num)
    }

    const sendmoneyInputComponent =(
        <div>
            <NomadInputPrice value={money}  onChange={moneychange} label={label} name="price" isHideZeoro={true} options={{focusColor:'c_input_blue'}} moneyUnit={moneyUnit}/>
            <div className="  flex mt-3" >
                <NomadCssButton text={"보내기"} onClick={submit} large={true} option={{cls:'c_btn_red'}} />
            </div>
        </div>
    )

    return {sendmoneyInputComponent,money, moneyUnit}
}