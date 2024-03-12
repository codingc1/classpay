import { useEffect } from "react";
import { IBill, IBillObj } from "../../../../../stores/cp-pay-store";
import { useDebounceFunction } from "../../../../../func/basic/useDebounce";



export const useMarketBookMonth = ({currentDate, setBill,isLoading,setIsLoading,billRedux, keyFn,billMutation,loading}:{
    currentDate: { year: number, month: number,  },
    setBill: React.Dispatch<React.SetStateAction<IBill[]>>,
    isLoading:boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    billRedux:IBillObj,
    keyFn:Function, //</React.SetStateAction>(date:{year:number, month:number})=>string,
    billMutation:Function,
    loading:boolean,
}) => {

    useEffect(()=>{
        //makeAllStudentsKey 가 달라서 다른 학생 data와 겹치지 않음
        const key =keyFn({year:currentDate.year, month:currentDate.month})
        if(billRedux[key]){
            setBill(billRedux[key]);return;
        }else{
            billMutation(currentDate.year, currentDate.month)
        }
    },[]) //currentDate.year, currentDate.month

    const [debounceFn]=useDebounceFunction()
    const updateBills=(newYear:number, newMonth:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        if(loading || isLoading){return}
        const key =keyFn({year:newYear, month:newMonth})
        if(billRedux[key]){
            setBill(billRedux[key]);return;
        }else{
            setIsLoading(true) 
            // setTimeout(runMutaiotn, 800, newYear,newMonth) //매계변수를 직접 넣으면안됨 https://sisiblog.tistory.com/229 
            debounceFn(()=>billMutation(newYear,newMonth), 800)
            // debounceFn(()=>runMutaiotn(newYear,newMonth), 800)
        }
    }

return {updateBills}
}