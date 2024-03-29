
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

import { useReactiveVar } from "@apollo/client";

import { FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { createdAtToDate } from "../../../../../utils/date/createdAt-to-date";
import { RECORD_TYPE } from "../../../../../__generated__/gql-types";
import { addCommaMan } from "../../../../../func/basic/number/addComma";
import { cpStudentFn } from "../../../../../stores/sub-store-fn/cp-student-fn";
import { cpStudentsVar } from "../../../../../stores/cp-students-store";


export const CBBankBookHistoryDetail = ({bankbook}:{bankbook:IBankBook}) => {
    const studentList = useReactiveVar(cpStudentsVar).students
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;

    //Date => 2023/12/31 14:00 
    const {madeDate} = createdAtToDate(bankbook.createdAt)
    //madedate에서 12/31 14:00 만 가져움
    const madeDateSlice = madeDate.slice(5,16)

    const findStudent = (book:IBankBook)=>{
        const id = book.user_id
        const student = studentList.find((student)=>student.id === id)
        if(student){
            return student
        }
        return cpStudentFn.store.student
    }
    const student = findStudent(bankbook)
    //판매자와 user가 같으면 isIncome = true
    const isIncome =()=>{
        if(bankbook.recordtype === RECORD_TYPE.Income)return true
        return false
    }
    

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
 
    //student가 sender_name이면 <div></div>로 표시
    if( (!student || student.name === bankbook.sender_name)&& (bankbook.sender_name !== bankbook.receiver_name))return <div></div>
    const arrowIcon = <span className="px-1"><FaRegArrowAltCircleLeft color="gray" fontSize={'0.8rem'}  /></span>

    return(
        <div className="px-1 py-1 w-full flex">
            <div className=" w-full" >
                <div className="w-full flex flex-wrap justify-between">

                    <div className="flex items-center">
                        {student.name}
                        {arrowIcon}
                        <span className="">{stringSlice(bankbook.sender_name,3)},</span>      
                        <span className="ml-1">{addCommaMan(bankbook.price, numberOfDigits) || 0}</span>
                    </div>
                    
                    <div className="flex items-center">
                        <div className="mr-1">{stringSlice(bankbook.desciption,6)}</div>
                        <div className="text-gray-400 text-sm">{madeDateSlice}</div>
                        {/* <div className="">{stringSlice(bankbook.sender_name,3)}</div> */}
                        {/* <span>{addCommaMan(bankbook.price, numberOfDigits) || 0}{moneyUnit}</span> */}
                    </div>
                </div>
                {/* {isIncome()?<div className="text-center " ><FaCirclePlus color="blue" size={'2rem'} /></div>
                :<div className="text-center " ><FaCircleMinus color="red" size={'2rem'} /></div>} */}
                {/* <div className="w-full flex justify-between">
                    <div className="flex items-center text-sm">
                        <span>{addCommaMan(bankbook.price, numberOfDigits) || 0}{moneyUnit}</span>
                        {bankbook.beforeMoney>=10000000?'':<div className="flex items-center">{addCommaMan(bankbook.beforeMoney, numberOfDigits)}
                        <span className="px-1"><FaRegArrowAltCircleRight color="gray" fontSize={'0.8rem'}  /></span></div>}
                        <div>{addCommaMan(bankbook.resultMoney, numberOfDigits)}</div>
                        <span >{moneyUnit}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{madeDate}</div>
                </div> */}
            </div>



        </div>
        
    )
}