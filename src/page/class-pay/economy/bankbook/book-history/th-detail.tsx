import { IBankBook } from "../../../../../stores/type/cppay-type";

import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

import { useReactiveVar } from "@apollo/client";
import { useMe } from "../../../../../hooks/user/useMe";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { createdAtToDate } from "../../../../../utils/date/createdAt-to-date";
import { RECORD_TYPE } from "../../../../../__generated__/gql-types";
import { addCommaMan } from "../../../../../func/basic/number/addComma";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export const BankBookHistoryDetail = ({bankbook}:{bankbook:IBankBook}) => {
    const {data:meData, loading} = useMe()
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;

    //Date => 2023/12/31 14:00 
    const {madeDate} = createdAtToDate(bankbook.createdAt)

    //판매자와 user가 같으면 isIncome = true
    const isIncome =()=>{
        if(bankbook.recordtype === RECORD_TYPE.Income)return true
        return false
    }
    if(loading)return(<div>loading...</div>)

    const stringSlice = (str:string, num:number)=>{
        if(str.length>num){
            return str.slice(0,num)
        }
        return str
    }
    //수입과 지출에 따라 내용이 바뀜
    //isIncome()?'수입':'지출'
    //가장왼 : 수입/지출 아이콘
    //가운데 : description, 금액
    //가장오른 : 보낸이(받는이), 날짜

    //가운데: price, result
    //오: description, 보낸이(받는이), 날짜
    return(
        <div className="px-1 py-3 w-full flex">
            <div className="flex justify-center items-center" style={{width:'18%'}}>
                {isIncome()?<div className="text-center " ><FaCirclePlus color="blue" size={'2rem'} /></div>
                :<div className="text-center " ><FaCircleMinus color="red" size={'2rem'} /></div>}
                {/* <div className="text-center" >O</div> */}
            </div>
            {/* 두줄로 나누기 */}
            <div className="" style={{width:'81%'}}>
                <div className="flex justify-between">
                    <div>{addCommaMan(bankbook.price, numberOfDigits) || 0}{moneyUnit}</div>
                    <div className="flex ">
                        <div className="">{stringSlice(bankbook.desciption,6)}{bankbook.desciption.length>0?',':''}&nbsp;</div>
                        <div className="">{isIncome()?bankbook.sender_name||' ':stringSlice(bankbook.receiver_name,3)}</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {/* 천만원이상이면 beforeMoney 생략 */}
                        {bankbook.beforeMoney>=10000000?'':<div className="flex items-center">{addCommaMan(bankbook.beforeMoney, numberOfDigits)}{moneyUnit}
                        <FaRegArrowAltCircleRight color="gray" fontSize={'0.8rem'}  /></div>}
                        {/* <div className="flex items-center">{addCommaMan(bankbook.beforeMoney)}{moneyUnit}<FaRegArrowAltCircleRight color="gray" /></div> */}
                        <div>{addCommaMan(bankbook.resultMoney, numberOfDigits)}{moneyUnit}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{madeDate}</div>
                </div>
            </div>

            {/* <div className="border-2" style={{width:'35%'}}>
                <div>{addCommaMan(bankbook.price) || 0}{moneyUnit}</div>
                <div className="flex items-center">
                    <div className="flex items-center">{addCommaMan(bankbook.beforeMoney)}{moneyUnit}<FaRegArrowAltCircleRight /></div>
                    <div>{addCommaMan(bankbook.resultMoney)}{moneyUnit}</div>
                </div>
            </div>
            <div className="" style={{width:'44%'}}>
                <div className="w-full flex justify-end ">
                    <div className="flex text-right">
                        <div className="">{stringSlice(bankbook.desciption,6)}{bankbook.desciption.length>0?',':''}&nbsp;</div>
                        <div className="">{isIncome()?bankbook.sender_name||' ':stringSlice(bankbook.receiver_name,3)}</div>
                    </div>
                </div>
                <div className="w-full flex justify-end "><div className="text-right text-gray-400 text-sm">{madeDate}</div></div>
            </div> */}
        </div>
        
    )
}