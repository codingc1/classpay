import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import {  cp_teacherGetMarketTradeAllMutationMutation, cp_teacherGetMarketTradeAllMutationMutationVariables, cp_teacherGetOneStudentBillMutationMutation, cp_teacherGetOneStudentBillMutationMutationVariables, } from "../../trade/cp-bill.generated";
import {  CP_TEACHER_GETSTUDENTS_ALL_BILLS_MONTH_MUTATION, CP_TEACHER_GET_ONESTUDENT_BILL_MUTATION, } from "../../trade/cp-bill";
import { editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";




//insti 공정거래위원회 한 학생 bill 조회
export const useBillTeacherOneStudentMu = ({setData,setIsLoading}:{ setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0, student_id:0});

    const [handleError] = useErrorShow()
    const [cp_BillTeacherOneStudentMonthMutation, { loading,  }] = useMutation<cp_teacherGetOneStudentBillMutationMutation, cp_teacherGetOneStudentBillMutationMutationVariables>(CP_TEACHER_GET_ONESTUDENT_BILL_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_teacherGetOneStudentBill
        //add => teacherOneStudentAdd 키가 다름
        editCpPayVar.bill.teacherOneStudentAdd({year:date.current.year, month:date.current.month, student_id:date.current.student_id, data:resultData})
        if(setData)setData(resultData); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            if(setIsLoading)setIsLoading(false)
            handleError(err, '조회에 실패하였습니다.')
        } });
        const billMutation=({year, month, user_id}:{year:number, month:number,user_id:number})=>{
        if(loading){return}
        date.current.year = year
        date.current.month = month
        cp_BillTeacherOneStudentMonthMutation({
            variables: {
                teacherGetMonth: {user_id, year, month },
            },
            });
    }

    return {billMutation, loading}
}
