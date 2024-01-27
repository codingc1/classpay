



export const monthCal ={
    plusOneMonth: ({year,month}:{year:number, month:number}) => {
        let newYear = year
        let newMonth = month + 1
        if (newMonth > 12) {
            newMonth = 1;  newYear += 1;
          }
        return {year:newYear, month:newMonth}
    },
    minusOneMonth: ({year,month}:{year:number, month:number}) => {
        let newYear = year
        let newMonth = month - 1
        if (newMonth < 1) {
            newMonth = 12;  newYear -= 1;
          }
        return {year:newYear, month:newMonth}
    },
    plusMonths: ({year,month}:{year:number, month:number}, months:number) => {
        let newYear = year
        let newMonth = month + months
        if (newMonth > 12) {
            newMonth = newMonth % 12;  
            newYear += 1;
          }
        return {year:newYear, month:newMonth}
    },
    minusMonths: ({year,month}:{year:number, month:number}, months:number) => {
        let newYear = year
        let newMonth = month - months
        if (newMonth < 1) {
            newMonth = 12 - newMonth;  
            newYear -= 1;
          }
        return {year:newYear, month:newMonth}
    },
    //months가 12보다 작아야함
    calMonths: ({year,month}:{year:number, month:number}, months:number) => {
        if(months > 0){
            return monthCal.plusMonths({year,month}, months)
        }else{
            return monthCal.minusMonths({year,month}, Math.abs(months))
        }
    },
}