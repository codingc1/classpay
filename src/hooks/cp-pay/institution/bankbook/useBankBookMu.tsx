import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";

import { CP_BANKBOOKS_MONTH_MUTATION } from "../../trade/cp-bill";
import { editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";
import { cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables } from "../../trade/cp-bill.generated";
import { dateStrToDate } from "../../../../utils/date/createdAt-to-date";



 

export const useBankBookMu = ({setData,setIsLoading}:{setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0,day:0 });

    const [handleError] = useErrorShow()
    const [cp_MyBankBooksMonthMutation, { loading,  }] = useMutation<cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables>(CP_BANKBOOKS_MONTH_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_MyBankBooksMonth
        // console.log(resultData, 'resultData')
        //seoul time으로 변경
        // const toSeoulTime = resultData.map((data)=>{ 
        //     const createdAt = data.createdAt
        //     const offset = createdAt.getTimezoneOffset()
        //     const newDate = new Date(createdAt.getTime() - (offset * 60 * 1000) + (9 * 60 * 60 * 1000))
        //     return {...data, createdAt:newDate}
        // })

        //month데이터를 일별로 나눠서 저장
        // editCpPayVar.bankBook.add({year:date.current.year, month:date.current.month,day:date.current.day, data:resultData})
        editCpPayVar.bankBook.monthAdd({year:date.current.year, month:date.current.month, data:resultData})
        //resultData중에서 날짜에 맞는 것만
        const todayDate = resultData.filter((data)=>{ //오늘 날짜만
            const transDate = dateStrToDate(data.createdAt)
            return transDate.getFullYear() === date.current.year && transDate.getMonth() === date.current.month && transDate.getDate() === date.current.day
        })
        if(setData)setData(todayDate); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            // setIsLoading(false)
            if(setIsLoading)setIsLoading(false)
            handleError(err, '조회에 실패하였습니다.')
        } });
    const billMutation=(year:number, month:number,day:number )=>{ //day 일단 살림 15일마다로 나뉠수 있음..
        // const now = new Date()
        // console.log(now, 'billMutationnow')
        // console.log('now', now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
        if(loading){return}
        date.current.year = year
        date.current.month = month
        date.current.day = day
        // console.log(year, month, 'year, month')
        cp_MyBankBooksMonthMutation({
            variables: { //year:newYear, month:newMonth
                yearMonthInput: { year, month }, //cppay_id:Number(payid),
            },
            });
    }

    return {billMutation, loading}
}

//bankbokk 리패치 - 반복되어서 만듬
export const useBankBookMuRefetch = () => {

    const { billMutation } = useBankBookMu({})
    const refetchBankBook = () => { //오늘 날짜로 데이터 리페치
        const now = new Date()
        billMutation(now.getFullYear(), now.getMonth() + 1, now.getDate()) //이번달 거래내역 refetch
    }
    return {refetchBankBook}
}