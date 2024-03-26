import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import {  cp_teacherGetOneStudentBillMutationMutation, cp_teacherGetOneStudentBillMutationMutationVariables, } from "../../trade/cp-bill.generated";
import {  CP_TEACHER_GET_ONESTUDENT_BILL_MUTATION, } from "../../trade/cp-bill";
import {  editCpPayVar } from "../../../../stores/cp-pay-store";
import { useRef } from "react";
import { filterCreatedAtToday } from "../../../../utils/date/filterCreatedAt";



//insti 공정거래위원회 한 학생 bill 조회 
export const useBillTeacherOneStudentMu = ({setData,setIsLoading}:{ setData?:any,setIsLoading?:any}) => {
    const date = useRef({year:0,month:0,day:0, student_id:0});

    const [handleError] = useErrorShow()
    const [cp_BillTeacherOneStudentMonthMutation, { loading,  }] = useMutation<cp_teacherGetOneStudentBillMutationMutation, cp_teacherGetOneStudentBillMutationMutationVariables>(CP_TEACHER_GET_ONESTUDENT_BILL_MUTATION, {async onCompleted (data){
        
        const resultData = data.cp_teacherGetOneStudentBill
        //add => teacherOneStudentAdd 키가 다름
        editCpPayVar.bill.teacherOneStudentAdd({year:date.current.year, month:date.current.month,day:date.current.day, student_id:date.current.student_id, data:resultData})
        // const todayDate = resultData.filter((data)=>{ //오늘 날짜만
        //     const transDate = dateStrToDate(data.createdAt)
        //     return transDate.getFullYear() === date.current.year && transDate.getMonth() === date.current.month && transDate.getDate() === date.current.day
        // })
        const todayDate= filterCreatedAtToday(resultData, date.current) 
        if(setData)setData(todayDate); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
        }, onError: (err) => {
            if(setIsLoading)setIsLoading(false)
            handleError(err, '조회에 실패하였습니다.')
        } });
        const billMutation=({year, month,day, user_id}:{year:number, month:number,day:number,user_id:number})=>{
        if(loading){return}
        date.current.year = year
        date.current.month = month
        date.current.day = day
        date.current.student_id = user_id
        cp_BillTeacherOneStudentMonthMutation({
            variables: {
                teacherGetMonth: {user_id, year, month, },
            },
            });
    }

    return {billMutation, loading}
}
