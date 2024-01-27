import { useMutation, useReactiveVar } from "@apollo/client";
import { cpPayFn } from "../../../../stores/sub-store-fn/cp-pay-fn";
import { IBill, cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables } from "../../../../hooks/cp-pay/trade/cp-bill.generated";
import { CP_MYBILLS_MONTH_MUTATION } from "../../../../hooks/cp-pay/trade/cp-bill";
import { useEffect, useState } from "react";
import { useDebounceFunction } from "../../../../func/basic/useDebounce";
import { monthCal } from "../../../../utils/date/month-cal";




//월별로 bill 보여줌
export const TradeHistoryMonth = ({currentDate, setCurrentDate,setNowBill,isLoading,setIsLoading}:{
    //{ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  }
    currentDate: { year: number, month: number,  },
    setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>
    setNowBill: React.Dispatch<React.SetStateAction<IBill[]>>,
    isLoading:boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
        const billRedux = useReactiveVar(cpPayVar).bills;
        // const [isLoading, setIsLoading] = useState(false); 
    const [handleError] = useErrorShow()
    const [cp_MyBillsMonthMutation, { loading,  }] = useMutation<cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables>(CP_MYBILLS_MONTH_MUTATION, {async onCompleted (data){
        const resultData = data.cp_MyBillsMonth
        editCpPayVar.bill.add({year:currentDate.year, month:currentDate.month, data:resultData}) //전체 데이터에 year, month 데이터 추가
        // console.log(resultData, 'TradeHistoryMonth data.cp_MyBillsMonth')
        // const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
        setNowBill(resultData); //이번 달 state에 저장
        setIsLoading(false)
        return;

        }, onError: (err) => {
        handleError(err, '판매에 실패하였습니다.')
        setIsLoading(false)
        } });
    useEffect(()=>{
        //redux에 [].length === 0 이면 mutation => {year+month: data}로 redux에 저장
        //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
        if(billRedux[key]){ //redux에 year+month 데이터가 있으면
            setNowBill(billRedux[key]);return;
        }else{
            // console.log(currentDate.year, currentDate.month, 'th-month :useEffect start')
            cp_MyBillsMonthMutation({
                variables: {
                    yearMonthInput: { year:currentDate.year, month:currentDate.month }, //cppay_id:Number(payid),
                },
                });
        }
    },[])
    const billMutation=(year:number, month:number)=>{
        // console.log('th-month :billMutation start')
        cp_MyBillsMonthMutation({
            variables: { //year:newYear, month:newMonth
                yearMonthInput: { year, month }, //cppay_id:Number(payid),
            },
            });
    }
    const [debounceFn]=useDebounceFunction()
    const updateBills=(newYear:number, newMonth:number)=>{ //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
        const key =cpPayFn.bill.makeKey({year:newYear, month:newMonth})
        if(billRedux[key]){
            setNowBill(billRedux[key]);return;
        }else{
            setIsLoading(true)
            debounceFn(()=>billMutation(newYear,newMonth), 800)
        }
    }
    const handlePlusButtonClick = () => {

        // let newYear = currentDate.year
        // let newMonth = currentDate.month + 1
        // if (newMonth > 12) {
        //     newMonth = 1;  newYear += 1;
        //   }
        // setCurrentDate({ year: newYear, month: newMonth });
        // updateBills(newYear, newMonth)
        const {year, month} = monthCal.calMonths({year:currentDate.year, month:currentDate.month,}, 1 )
        setCurrentDate({ year, month });
        updateBills(year, month)
      };
    const handleMinusButtonClick = () => {
        // let newMonth = currentDate.month - 1; let newYear = currentDate.year;
        // if (newMonth < 1) {
        //     newMonth = 12; newYear -= 1;
        // }
        // setCurrentDate({ year: newYear, month: newMonth });
        // updateBills(newYear, newMonth)

        const {year, month} = monthCal.calMonths({year:currentDate.year, month:currentDate.month,}, -1 )
        setCurrentDate({ year, month });
        updateBills(year, month)
    };
    // const handleMinusButtonClick = () => {
    //     setCurrentDate(prevDate => {
    //     let newMonth = prevDate.month - 1; let newYear = prevDate.year;
    //     if (newMonth < 1) {
    //         newMonth = 12; newYear -= 1;
    //     }
    //     return { year: newYear, month: newMonth };
    //     });
    // };

    return(
        <div className="flex justify-between items-center  " style={{height:'3.5rem',borderTop:'1px solid #C0C0C0', borderBottom:'1px solid #C0C0C0'}}>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className="cursor-pointer text-center" style={{width:'3rem'}} onClick={handleMinusButtonClick}>&#9001;</div>}
            <div className="text-lg">{currentDate.year}.{currentDate.month}</div>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className=" text-center cursor-pointer" style={{width:'3rem'}} onClick={handlePlusButtonClick}>&#9002;</div>}
        </div>
    )
}