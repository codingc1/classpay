import { useNavigate, useParams } from "react-router-dom";
import { addCommaMan } from "../../../../../func/basic/number/addComma";
import { BankBookHistoryDetail } from "../../../../class-pay/economy/bankbook/book-history/th-detail";
import { useReactiveVar } from "@apollo/client";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { useState } from "react";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { OTMBookBankContainer } from "./otm-bookbank-container";
import { IoIosArrowBack } from "react-icons/io";
import { useCpPayUserList } from "../../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { cpStudentFn } from "../../../../../stores/sub-store-fn/cp-student-fn";
import BaseMax400 from "../../../../../components/layout/basic-component/base-max400";
import { DateObj } from "../../../../../utils/date/dateObj";


// {student, setIsStudentListView}:{
//     student:ICpStudent,
//     setIsStudentListView:React.Dispatch<React.SetStateAction<boolean>>
// }
//한 명 학생 조회 -풀화면으로 만들어줘야함...
export const OneStudnetBookBank = () => {
    let navigate = useNavigate();
    const{data} = useCpPayUserList() 
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    const {number} = useParams(); 
    const findStudent = number? studentList.find((stu)=>stu.number === Number(number)): cpStudentFn.store.student;
    const student = findStudent?findStudent:cpStudentFn.store.student;

    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const [currentDate, setCurrentDate] = useState(DateObj.today);
    const [nowBook, setNowBook] = useState<IBankBook[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    
     

    return( //checkbox생략 뒤로가기로 찾아가기
        <BaseMax400>
        <div className="w-full mt-3 px-3">
 
             {/* <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0'}}>
                <div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
                <div>나의 통장</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section> */}
            <section style={{height:'5rem'}} className="w-full flex justify-center items-center border-b-2 border-t-2 border-blue-400 bg-white">
                <div className="px-2 cursor-pointer" onClick={()=>navigate(-1)}><IoIosArrowBack /></div>
                <div style={{fontSize:'1.3rem'}}>{student.name},</div>
                <div className="ml-2 " style={{fontSize:'1.3rem'}}>{addCommaMan(student.money||0,numberOfDigits)}{moneyUnit}</div>
                <div className="px-2"></div>
            </section>
            <section className="w-full px-1 bg-white bankbookDetailHeight">
                <OTMBookBankContainer currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBook={setNowBook} isLoading={isLoading} setIsLoading={setIsLoading} 
                    student={student}  />

                {!isLoading && nowBook.map((book, index) => <BankBookHistoryDetail key={'book'+index}bankbook={book} />)}

            </section>
        </div>
        </BaseMax400>
    )
}