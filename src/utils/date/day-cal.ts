



export const calDay ={ //하루 더하기
    // plusOneDay: ({year,month,day}:{year:number, month:number,day:number}) => {
    //     const clone = new Date(year, month-1, day)
    //     clone.setDate(clone.getDate() + 1)
    //     return {year:clone.getFullYear(), month:clone.getMonth()+1, day:clone.getDate()}
    // },
    // minusOneDay: ({year,month,day}:{year:number, month:number,day:number}) => {
    //     const clone = new Date(year, month-1, day)
    //     clone.setDate(clone.getDate() - 1)
    //     return {year:clone.getFullYear(), month:clone.getMonth()+1, day:clone.getDate()}
    // },
    plusDays: ({year,month,day}:{year:number, month:number,day:number}, days:number) => {
        const clone = new Date(year, month-1, day)
        clone.setDate(clone.getDate() + days)
        return {year:clone.getFullYear(), month:clone.getMonth()+1, day:clone.getDate()}
    },
    minusDays: ({year,month,day}:{year:number, month:number,day:number}, days:number) => {
        const clone = new Date(year, month-1, day)
        clone.setDate(clone.getDate() - days)
        return {year:clone.getFullYear(), month:clone.getMonth()+1, day:clone.getDate()}
    },
    //months가 12보다 작아야함
    calDays: ({year,month,day}:{year:number, month:number,day:number}, days:number) => {
        if(days > 0){
            return calDay.plusDays({year,month,day}, days)
        }else{
            return calDay.minusDays({year,month,day}, Math.abs(days))
        }
    },
}