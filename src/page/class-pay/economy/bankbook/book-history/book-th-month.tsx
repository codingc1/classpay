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
import { TypeBankbookhistorymonth } from "./type-bankbookhistorymonth";



//월별로 bankbook 보여줌
export const BankBookHistoryMonth = ({currentDate, setCurrentDate,isLoading,updateBills, loading}:TypeBankbookhistorymonth
    // {
    // //{ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  }
    // currentDate: { year: number, month: number,  },
    // setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>
    // setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>,
    // isLoading:boolean,
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    // }
    ) => {
        // const bookRedux = useReactiveVar(cpPayVar).bankBooks;
        // const [isLoading, setIsLoading] = useState(false); 

        // const [handleError] = useErrorShow()
        // const [cp_MyBanksMonthMutation, { loading,  }] = useMutation<cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables>(CP_BANKBOOKS_MONTH_MUTATION, {async onCompleted (data){
        //     // console.log(data.cp_MyBankBooksMonth, 'data.cp_MyBankBooksMonth')
        //     const resultData = data.cp_MyBankBooksMonth
        //     editCpPayVar.bankBook.add({year:currentDate.year, month:currentDate.month, data:resultData})
        //     // const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
        //     setNowBook(resultData); //이번 달 state에 저장
        //     setIsLoading(false)
        //     }, onError: (err) => {
        //         setIsLoading(false)
        //         handleError(err, '판매에 실패하였습니다.')
        //     } });
        // const billMutation=(year:number, month:number)=>{
        //     // console.log('th-month :billMutation start')
        //     cp_MyBanksMonthMutation({
        //         variables: { //year:newYear, month:newMonth
        //             yearMonthInput: { year, month }, //cppay_id:Number(payid),
        //         },
        //         });
        // } 

        // const { billMutation,loading } = useBankBookMu({setData:setNowBook,setIsLoading:setIsLoading})
        // useEffect(()=>{
        //     //redux에 [].length === 0 이면 mutation => {year+month: data}로 redux에 저장
        //     //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        //     const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
        //     if(bookRedux[key]){
        //         setNowBook(bookRedux[key]);return;
        //     }else{
        //         billMutation(currentDate.year, currentDate.month)
        //     }
        // },[]) //currentDate.year, currentDate.month
        

    // const [debounceFn]=useDebounceFunction()
    // const updateBills=(newYear:number, newMonth:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
    //     if(loading || isLoading){return}
    //     const key =cpPayFn.bill.makeKey({year:newYear, month:newMonth})
    //     if(bookRedux[key]){
    //         setNowBook(bookRedux[key]);return;
    //     }else{
    //         setIsLoading(true) 
    //         // setTimeout(runMutaiotn, 800, newYear,newMonth) //매계변수를 직접 넣으면안됨 https://sisiblog.tistory.com/229 
    //         debounceFn(()=>billMutation(newYear,newMonth), 800)
    //         // debounceFn(()=>runMutaiotn(newYear,newMonth), 800)
    //     }
    // }

    const calMonth =(num:number)=>{
        const {year, month} = monthCal.calMonths({year:currentDate.year, month:currentDate.month,}, num )
        setCurrentDate({ year, month });
        updateBills(year, month)
    }


    return(
        <div className="flex justify-between items-center  " style={{height:'3.5rem',borderTop:'1px solid #C0C0C0', borderBottom:'1px solid #C0C0C0'}}>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className="cursor-pointer text-center" style={{width:'3rem'}} onClick={()=>calMonth(-1)}>&#9001;</div>}
            <div className="text-lg">{currentDate.year}.{currentDate.month}</div>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className=" text-center cursor-pointer" style={{width:'3rem'}} onClick={()=>calMonth(1)}>&#9002;</div>}
        </div>
    )
}