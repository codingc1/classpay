



export const createdAtToDate = (createdAt:string) => {
    const date = new Date(createdAt)
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hour = date.getHours()
    //const dayOfWeek = date.getDay()
    const strHour = hour < 10 ? `0${hour}` : hour;
    const minute = date.getMinutes()
    const strMinute = minute < 10 ? `0${minute}` : minute;
    const madeDate = `${year}/${month}/${day} ${strHour}:${strMinute}` 

    return {year, month, day, hour, minute, madeDate, newDate:date}
}