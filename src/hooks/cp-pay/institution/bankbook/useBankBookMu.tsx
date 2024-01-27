import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables } from "../../trade/cp-bill.generated";
import { CP_BANKBOOKS_MONTH_MUTATION } from "../../trade/cp-bill";
import { editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";





export const useBankBookMu = ({setData,setIsLoading}:{setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0});

    const [handleError] = useErrorShow()
    const [cp_MyBanksMonthMutation, { loading,  }] = useMutation<cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables>(CP_BANKBOOKS_MONTH_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_MyBankBooksMonth
        editCpPayVar.bankBook.add({year:date.current.year, month:date.current.month, data:resultData})
        if(setData)setData(resultData); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            // setIsLoading(false)
            if(setIsLoading)setIsLoading(false)
            handleError(err, '판매에 실패하였습니다.')
        } });
    const billMutation=(year:number, month:number)=>{
        if(loading){return}
        date.current.year = year
        date.current.month = month
        cp_MyBanksMonthMutation({
            variables: { //year:newYear, month:newMonth
                yearMonthInput: { year, month }, //cppay_id:Number(payid),
            },
            });
    }

    return {billMutation, loading}
}
