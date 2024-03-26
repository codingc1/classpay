import { useEffect } from "react";
import { cpPayFn } from "../../../../../stores/sub-store-fn/cp-pay-fn";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { IBankBookObj } from "../../../../../stores/cp-pay-store";
import { useDebounceFunction } from "../../../../../func/basic/useDebounce";



export const useBankBookMonth = ({currentDate, setNowBook,isLoading,setIsLoading,bookRedux, keyFn,billMutation,loading, }:{
    currentDate: { year: number, month: number, day:number},
    setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>,
    isLoading:boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    bookRedux:IBankBookObj,
    keyFn:Function, //</React.SetStateAction>(date:{year:number, month:number})=>string,
    billMutation:(year:number, month:number, day:number)=>void,
    loading:boolean,
}) => {

    useEffect(()=>{
        //makeAllStudentsKey 가 달라서 다른 학생 data와 겹치지 않음
        const key =keyFn({year:currentDate.year, month:currentDate.month, day:currentDate.day})
        if(bookRedux[key]){
            setNowBook(bookRedux[key]);return;
        }else{
            billMutation(currentDate.year, currentDate.month, currentDate.day)
        }
    },[]) //currentDate.year, currentDate.month

    const [debounceFn]=useDebounceFunction()
    const updateBills=(newYear:number, newMonth:number,newDay:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        if(loading || isLoading){return}
        const key =keyFn({year:newYear, month:newMonth, day:newDay}) //기관-전체학생 여기만 쓰는거 아닌가?? 굳이 복잡하게 위에서 얻어올 필요가??
        if(bookRedux[key]){
            setNowBook(bookRedux[key]);return;
        }else{
            setIsLoading(true) 
            // setTimeout(runMutaiotn, 800, newYear,newMonth) //매계변수를 직접 넣으면안됨 https://sisiblog.tistory.com/229 
            debounceFn(()=>billMutation(newYear,newMonth, newDay), 800)
            // debounceFn(()=>runMutaiotn(newYear,newMonth), 800)
        }
    }

return {updateBills}
}