

import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IBill, cpPayVar } from "../../../../stores/cp-pay-store";
import { useMe } from "../../../../hooks/user/useMe";
import { addCommaMan } from "../../../../func/basic/number/addComma";
import { useReactiveVar } from "@apollo/client";

export const TradeHistoryDetail = ({bill, student_id}:{bill:IBill,student_id?:number}) => {
    const {data:meData, loading} = useMe()
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;

    //Date => 2023/12/31 14:00 
    const date = new Date(bill.createdAt)

    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hour = date.getHours()
    const strHour = hour < 10 ? `0${hour}` : hour;
    const minute = date.getMinutes()
    const strMinute = minute < 10 ? `0${minute}` : minute;
    const madeDate = `${year}/${month}/${day} ${strHour}:${strMinute}` 

    //판매자와 user가 같으면 isIncome = true
    const isIncome =()=>{
        if(student_id !== undefined){
            if(student_id === bill.seller_id )return true
            return false
        }
        if(!meData)return false
        if(meData.cp_me.id === bill.seller_id)return true
        return false
    }
    if(loading)return(<div>loading...</div>)

    //수입과 지출에 따라 내용이 바뀜
    //isIncome()?'수입':'지출'
    return(
        <div className="py-3 w-full flex">
            <div className="flex justify-center items-center" style={{width:'20%'}}>
                {isIncome()?<div className="text-center " ><FaCirclePlus color="blue" size={'2rem'} /></div>
                :<div className="text-center " ><FaCircleMinus color="red" size={'2rem'} /></div>}
                {/* <div className="text-center" >O</div> */}
            </div>
            <div className="" style={{width:'35%'}}>
                <div>{bill.name}</div>
                <div>{addCommaMan(bill.sumPrice, numberOfDigits)}{moneyUnit}</div>
            </div>
            <div className="" style={{width:'44%'}}>
                <div className="w-full flex justify-end "><div className="text-right">{isIncome()?bill.consumer_name||' ':bill.seller_name}</div></div>
                <div className="w-full flex justify-end "><div className="text-right">{bill.desciption}</div></div>
                <div className="w-full flex justify-end "><div className="text-right text-gray-400 text-sm">{madeDate}</div></div>
            </div>
        </div>
        
    )
}