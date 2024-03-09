import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { cp_teacherGetBankBookAllMutationMutation, cp_teacherGetBankBookAllMutationMutationVariables, } from "../../trade/cp-bill.generated";
import { CP_TEACHER_GETSTUDENTS_ALL_BANKBOOKS_MONTH_MUTATION, } from "../../trade/cp-bill";
import { editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";




//insti 공정거래위원회 학급 전체 bankbook 조회
export const useBankBookTeacherAllMu = ({setData,setIsLoading}:{ setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0});

    const [handleError] = useErrorShow()
    const [cp_MyBanksMonthMutation, { loading,  }] = useMutation<cp_teacherGetBankBookAllMutationMutation, cp_teacherGetBankBookAllMutationMutationVariables>(CP_TEACHER_GETSTUDENTS_ALL_BANKBOOKS_MONTH_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_teacherGetBankBookAll
        //add => teacherAllStudentsAdd 키가 다름
        editCpPayVar.bankBook.teacherAllStudentsAdd({year:date.current.year, month:date.current.month, data:resultData})

        if(setData)setData(resultData); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            if(setIsLoading)setIsLoading(false)
            handleError(err, '조회에 실패하였습니다.')
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
