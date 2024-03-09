import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { cp_teacherGetStudentBankBookMutationMutation, cp_teacherGetStudentBankBookMutationMutationVariables } from "../../trade/cp-bill.generated";
import { CP_BANKBOOKS_MONTH_MUTATION, CP_TEACHER_GETSTUDENTS_BANKBOOKS_MONTH_MUTATION } from "../../trade/cp-bill";
import { editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";




//insti 공정거래위원회 학생별 조회
export const useBankBookTeacherMu = ({setData,setIsLoading}:{ setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0, student_id:0});

    const [handleError] = useErrorShow()
    const [cp_MyBanksMonthMutation, { loading,  }] = useMutation<cp_teacherGetStudentBankBookMutationMutation, cp_teacherGetStudentBankBookMutationMutationVariables>(CP_TEACHER_GETSTUDENTS_BANKBOOKS_MONTH_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_teacherGetStudentBankBook
        //add => 
        editCpPayVar.bankBook.teacherOneStudentAdd({year:date.current.year, month:date.current.month,student_id:date.current.student_id, data:resultData})
        if(setData)setData(resultData); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            // setIsLoading(false)
            if(setIsLoading)setIsLoading(false)
            handleError(err, '조회에 실패하였습니다.')
        } });
    const billMutation=({year, month, user_id}:{year:number, month:number,user_id:number})=>{
        if(loading){return}
        date.current.year = year
        date.current.month = month
        date.current.student_id = user_id
        // console.log(year, month, 'year, month')
        cp_MyBanksMonthMutation({
            variables: { //year:newYear, month:newMonth
                teacherGetMonth: {user_id, year, month }, //cppay_id:Number(payid),
            },
            });
    }

    return {billMutation, loading}
}
