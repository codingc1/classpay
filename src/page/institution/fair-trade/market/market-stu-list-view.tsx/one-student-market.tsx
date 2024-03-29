import { useNavigate, useParams } from "react-router-dom";
import { addCommaMan } from "../../../../../func/basic/number/addComma";
import { BankBookHistoryDetail } from "../../../../class-pay/economy/bankbook/book-history/th-detail";
import { useReactiveVar } from "@apollo/client";
import { IBill, cpPayVar } from "../../../../../stores/cp-pay-store";
import { useEffect, useState } from "react";
import { IBankBook } from "../../../../../stores/type/cppay-type";

import { IoIosArrowBack } from "react-icons/io";
import { cpStudentFn } from "../../../../../stores/sub-store-fn/cp-student-fn";
import BaseMax400 from "../../../../../components/layout/basic-component/base-max400";
import { BankBookHistoryMonth } from "../../book-bank/cbb-resent/cbb-book-th-title";
import { cpPayFn } from "../../../../../stores/sub-store-fn/cp-pay-fn";
import { useBillTeacherOneStudentMu } from "../../../../../hooks/cp-pay/institution/bill/useBillInstiTeacherOneStuMu";
import { useBillTeacherAllMu } from "../../../../../hooks/cp-pay/institution/bill/useBillInstiTeacherAllMu";
import { TradeHistoryDetail } from "../../../../trades/trade-history/trade-history/th-detail";
import { useDebounceFunction } from "../../../../../func/basic/useDebounce";
import { cpStudentsVar } from "../../../../../stores/cp-students-store";



//한 명 학생 조회 -풀화면으로 만들어줘야함...
export const OneStudnetMaketBook = () => {
    let navigate = useNavigate();
    const studentList = useReactiveVar(cpStudentsVar).students
    const {number} = useParams();  
    const findStudent = number!==undefined? studentList.find((stu)=>stu.number === Number(number)): cpStudentFn.store.student;
    const student = findStudent?findStudent:cpStudentFn.store.student;

    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()});
    const [nowBill, setNowBill] = useState<IBill[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    
    const billRedux = useReactiveVar(cpPayVar).bills;
    const { billMutation,loading } = useBillTeacherOneStudentMu({setData:setNowBill,setIsLoading:setIsLoading, })
    useEffect(()=>{
        //makeAllStudentsKey 가 달라서 다른 학생 data와 겹치지 않음
        const key =cpPayFn.bill.makeOneStudentKey({year:currentDate.year, month:currentDate.month,day:currentDate.day, student_id:student.id})
        if(billRedux[key]){
            setNowBill(billRedux[key]);return;
        }else{
            billMutation({year:currentDate.year, month:currentDate.month,day:currentDate.day,user_id:student.id} )
        }
    },[]) //currentDate.year, currentDate.month

const [debounceFn]=useDebounceFunction()
const updateBills=(newYear:number, newMonth:number, newDay:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
    if(loading || isLoading){return} 
    const key =cpPayFn.bill.makeOneStudentKey({year:newYear, month:newMonth,day:newDay,student_id:student.id})
    if(billRedux[key]){
        setNowBill(billRedux[key]);return;
    }else{
        setIsLoading(true) 
        debounceFn(()=>billMutation({year:newYear,month:newMonth, day:newDay,user_id:student.id}), 800)
    }
}
    return( //checkbox생략 뒤로가기로 찾아가기
        <BaseMax400>
        <div className="w-full mt-3 px-3">

            <section style={{height:'5rem'}} className="w-full flex justify-center items-center border-b-2 border-t-2 border-blue-400 bg-white">
                <div className="px-2 cursor-pointer" onClick={()=>navigate(-1)}><IoIosArrowBack /></div>
                <div style={{fontSize:'1.3rem'}}>{student.name},</div>
                <div className="ml-2 " style={{fontSize:'1.3rem'}}>{addCommaMan(student.money||0,numberOfDigits)}{moneyUnit}</div>
                <div className="px-2"></div>
            </section>
            <section className="w-full px-1 bg-white">
                <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} isLoading={isLoading} 
                    updateBills={updateBills} loading={loading} />
                {!isLoading && nowBill.map((bill, index) => <TradeHistoryDetail key={'bill'+index}bill={bill} student_id={student.id} />)}
            </section>
        </div>
        </BaseMax400>
    )
}