
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

import { useReactiveVar } from "@apollo/client";

import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { IBill, cpPayVar } from "../../../../../stores/cp-pay-store";
import { createdAtToDate } from "../../../../../utils/date/createdAt-to-date";
import { RECORD_TYPE } from "../../../../../__generated__/gql-types";
import { addCommaMan } from "../../../../../func/basic/number/addComma";
import { useCpPayUserList } from "../../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { cpStudentFn } from "../../../../../stores/sub-store-fn/cp-student-fn";


export const FairTradeMarketResentDetail = ({bill}:{bill:IBill}) => {
    const{data} = useCpPayUserList() 
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;

    //Date => 2023/12/31 14:00 
    const {madeDate} = createdAtToDate(bill.createdAt)
    //madedate에서 12/31 14:00 만 가져움
    const madeDateSlice = madeDate.slice(5,16)

    const findStudent = (bill:IBill)=>{
        const id = bill.seller_id
        const student = studentList.find((student)=>student.id === id)
        if(student){
            return student
        }
        return cpStudentFn.store.student
    }
    const student = findStudent(bill)
    //판매자와 user가 같으면 isIncome = true
    // const isIncome =()=>{
    //     if(bill.recordtype === RECORD_TYPE.Income)return true
    //     return false
    // }
    

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
 
    //sender_name=>consumer_name
    //receiver_name=>seller_name
    if( (!student || student.name === bill.consumer_name)&& (bill.consumer_name !== bill.seller_name))return <div></div>
    const arrowIcon = <span className="px-1"><FaRegArrowAltCircleLeft color="gray" fontSize={'0.8rem'}  /></span>

    return(
        <div className="px-1 py-1 w-full flex">
            <div className=" w-full" >
                <div className="w-full flex flex-wrap justify-between">

                    <div className="flex items-center">
                        {student.name}
                        {arrowIcon}
                        <span className="">{stringSlice(bill.consumer_name,3)},</span>      
                        <span className="ml-1">{addCommaMan(bill.price, numberOfDigits) || 0}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <div className="mr-1">{stringSlice(bill.desciption,6)}</div>
                        <div className="text-gray-400 text-sm">{madeDateSlice}</div>

                    </div>
                </div>

            </div>



        </div>
        
    )
}