import { dateStrToDate } from "./createdAt-to-date"


//createdAt을 오늘 날짜만 필터링
export const filterCreatedAtToday = (monthData:{createdAt:string, }[], date:{year:number, month:number, day:number})=>{
    return monthData.filter((data)=>{ //오늘 날짜만
        const transDate = dateStrToDate(data.createdAt)
        return transDate.getFullYear() === date.year && transDate.getMonth()+1 === date.month && transDate.getDate() === date.day
    })
}
