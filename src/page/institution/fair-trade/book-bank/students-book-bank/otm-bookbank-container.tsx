import {  useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { cpPayFn } from "../../../../../stores/sub-store-fn/cp-pay-fn";
import { useDebounceFunction } from "../../../../../func/basic/useDebounce";
import { BankBookHistoryMonth } from "../../../../class-pay/economy/bankbook/book-history/book-th-month";
import { useBankBookTeacherAllMu } from "../../../../../hooks/cp-pay/institution/bankbook/useBankBookInstiTeacherAllMu";
import { useBankBookTeacherMu } from "../../../../../hooks/cp-pay/institution/bankbook/useBankBookInstiTeacherMu";
import { ICpStudent } from "../../../../../stores/cp-students-store";




//한명 학생 bankbook 보여줌
export const OTMBookBankContainer = ({student, currentDate, setCurrentDate,setNowBook,isLoading,setIsLoading, }:{
    //{ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  }
    student:ICpStudent,
    currentDate: { year: number, month: number,  },
    setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>
    setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>,
    isLoading:boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
        const bookRedux = useReactiveVar(cpPayVar).bankBooks;



        const { billMutation,loading } = useBankBookTeacherMu({setData:setNowBook,setIsLoading:setIsLoading, })
        useEffect(()=>{
            //makeAllStudentsKey 가 달라서 다른 학생 data와 겹치지 않음
            const key =cpPayFn.bill.makeOneStudentKey({year:currentDate.year, month:currentDate.month,student_id:student.id})
            if(bookRedux[key]){
                setNowBook(bookRedux[key]);return;
            }else{
                billMutation({year:currentDate.year, month:currentDate.month,user_id:student.id} )
            }
        },[]) //currentDate.year, currentDate.month
        

    const [debounceFn]=useDebounceFunction()
    const updateBills=(newYear:number, newMonth:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        if(loading || isLoading){return}
        const key =cpPayFn.bill.makeOneStudentKey({year:newYear, month:newMonth,student_id:student.id})
        if(bookRedux[key]){
            setNowBook(bookRedux[key]);return;
        }else{
            setIsLoading(true) 
            // setTimeout(runMutaiotn, 800, newYear,newMonth) //매계변수를 직접 넣으면안됨 https://sisiblog.tistory.com/229 
            debounceFn(()=>billMutation({year:newYear,month:newMonth, user_id:student.id}), 800)
            // debounceFn(()=>runMutaiotn(newYear,newMonth), 800)
        }
    }




    return(
        <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} isLoading={isLoading} 
        updateBills={updateBills} loading={loading} />
    )
}