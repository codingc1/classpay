import useErrorShow from "../../../../func/sys/err/useErrShow";
import { useRef } from "react";


export const useBankBookRessetdata = ({setData,setIsLoading, }:{ setData?:any,setIsLoading?:any,}) => {
    const date = useRef({year:0,month:0,day:0, student_id:0});

    const setDate=(year:number, month:number,day:number, student_id?:number)=>{
        date.current.year = year; date.current.month = month; date.current.day = day;
        if(student_id !== undefined)date.current.student_id = student_id
    }
    const resultSetData =(resultData:any)=>{
        if(setData)setData(resultData); //이번 달 state에 저장
        if(setIsLoading)setIsLoading(false)
    }
    const [handleError] = useErrorShow()
    const errFn = (err:any)=>{
        if(setIsLoading)setIsLoading(false)
        handleError(err, '조회에 실패하였습니다.')
    
    }
return {resultSetData, date, setDate, errFn}

}
