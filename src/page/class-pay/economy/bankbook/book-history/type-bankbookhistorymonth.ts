import { IBankBook } from "../../../../../stores/type/cppay-type";




export type TypeBankbookhistorymonth = { 
    currentDate: { year: number, month: number,  }, 
    setCurrentDate: React.Dispatch<React.SetStateAction<{ year: number; month: number; }>>, 
    // setNowBook: React.Dispatch<React.SetStateAction<IBankBook[]>>, 
    isLoading:boolean, 
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    updateBills:(newYear:number, newMonth:number)=>void, 
    loading:boolean
}