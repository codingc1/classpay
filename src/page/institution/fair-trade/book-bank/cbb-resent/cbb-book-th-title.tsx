import { useMutation, useReactiveVar } from "@apollo/client";
import { TypeBankbookhistorymonth } from "../../../../class-pay/economy/bankbook/book-history/type-bankbookhistorymonth";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { monthCal } from "../../../../../utils/date/month-cal";
import { calDay } from "../../../../../utils/date/day-cal";



//월별로 bankbook 보여줌
export const BankBookHistoryMonth = ({currentDate, setCurrentDate,isLoading, updateBills, loading}:TypeBankbookhistorymonth
    // {
    // //{ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  }
    // currentDate: { year: number, month: number,  },
    // setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>
    // setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>,
    // isLoading:boolean,
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    // }
    ) => {



    const calMonth =(num:number)=>{
        const {year, month, day} = calDay.calDays({year:currentDate.year, month:currentDate.month,day: currentDate.day}, num )
        setCurrentDate({ year, month, day });
        updateBills(year, month, day)
    }


    return(
        <div className="flex justify-between items-center  " style={{height:'3.5rem',borderTop:'1px solid #C0C0C0', borderBottom:'1px solid #C0C0C0'}}>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className="cursor-pointer text-center" style={{width:'3rem'}} onClick={()=>calMonth(-1)}>&#9001;</div>}
            <div className="text-lg">{currentDate.year}.{currentDate.month}.{currentDate.day}</div>
            {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
                <div className=" text-center cursor-pointer" style={{width:'3rem'}} onClick={()=>calMonth(1)}>&#9002;</div>}
        </div>
    )
}