import { useMutation, useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { cpPayVar, editCpPayVar } from "../../../../../stores/cp-pay-store";
import useErrorShow from "../../../../../func/sys/err/useErrShow";
import { cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables } from "../../../../../hooks/cp-pay/trade/cp-bill.generated";
import { CP_BANKBOOKS_MONTH_MUTATION } from "../../../../../hooks/cp-pay/trade/cp-bill";
import { useDebounceFunction } from "../../../../../func/basic/useDebounce";
import { cpPayFn } from "../../../../../stores/sub-store-fn/cp-pay-fn";
import { monthCal } from "../../../../../utils/date/month-cal";
import { useBankBookMu } from "../../../../../hooks/cp-pay/institution/bankbook/useBankBookMu";
import { BankBookHistoryMonth } from "./book-th-month";



//월별로 bankbook 보여줌
export const BankBookHistoryMonthContainer = ({currentDate, setCurrentDate,setNowBook,isLoading,setIsLoading}:{
    //{ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  }
    currentDate: { year: number, month: number,  },
    setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>
    setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>,
    isLoading:boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
        const bookRedux = useReactiveVar(cpPayVar).bankBooks;


        const { billMutation,loading } = useBankBookMu({setData:setNowBook,setIsLoading:setIsLoading})
        useEffect(()=>{
            //redux에 [].length === 0 이면 mutation => {year+month: data}로 redux에 저장
            //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
            const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
            if(bookRedux[key]){
                setNowBook(bookRedux[key]);return;
            }else{
                billMutation(currentDate.year, currentDate.month)
            }
        },[]) //currentDate.year, currentDate.month
        

    const [debounceFn]=useDebounceFunction()
    const updateBills=(newYear:number, newMonth:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        if(loading || isLoading){return}
        const key =cpPayFn.bill.makeKey({year:newYear, month:newMonth})
        if(bookRedux[key]){
            setNowBook(bookRedux[key]);return;
        }else{
            setIsLoading(true) 
            // setTimeout(runMutaiotn, 800, newYear,newMonth) //매계변수를 직접 넣으면안됨 https://sisiblog.tistory.com/229 
            debounceFn(()=>billMutation(newYear,newMonth), 800)
            // debounceFn(()=>runMutaiotn(newYear,newMonth), 800)
        }
    }




    return(
        <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} isLoading={isLoading}  
        updateBills={updateBills} loading={loading} />
    )
}