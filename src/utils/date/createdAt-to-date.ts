// function convertToUTC(korDate:Date) { //korTime => UTC
//     // 한국 시간대 (KST)에서 UTC로 변환하기 위해 getTimezoneOffset() 메서드를 사용합니다.
//     const offset = -9 * 60; // 한국은 UTC+9입니다. getTimezoneOffset()은 분 단위의 오프셋을 반환하므로 음수로 변환합니다.
//     const utcMilliseconds = korDate.getTime() + (offset * 60 * 1000); // 밀리초 단위로 변환하여 오프셋을 적용합니다.
//     const utcDate = new Date(utcMilliseconds);
//     return utcDate;
// }

function applyLocalOffset(date:Date) { //UTC => localTime
    const utcDate = new Date(date);
    const localOffset = utcDate.getTimezoneOffset(); // 분 단위로 오프셋을 얻습니다.
    const offsetMilliseconds = localOffset * 60 * 1000; // 밀리초 단위로 변환합니다.
    
    const localTime = new Date(utcDate.getTime() - offsetMilliseconds);
    return localTime;
}

function serverTimeToUTC(serverTime:string) { //존재하지 않는 함수 서버와의 시간차로 강제로 만듬..
    const date = new Date(serverTime);
    const utcDate = new Date(date.getTime() - (9 * 60 * 60 * 1000)*2) 
    return utcDate;
}
 
export const dateStrToDate = (dateStr:string) => { //createdAtToDate
    const utcDate = serverTimeToUTC(dateStr)
    const date = applyLocalOffset(utcDate)
    return date
}
export const createdAtToDate = (createdAt:string) => {
    let date = new Date(createdAt)

    // console.log(date.getMonth()+1,date.getDate(), date.getHours(), 'basic?()') //생으로 바꿈 - 문제발생
    // const backUTC = new Date(date.getTime() - (9 * 60 * 60 * 1000)*2) 
    // console.log(backUTC.getMonth()+1,backUTC.getDate(), backUTC.getHours(), 'backUTC.getHours()')

    // const offset = date.getTimezoneOffset() //test - 오프셋 알아보기
    // const applyOffset = new Date(date.getTime() - (offset * 60 * 1000)) //ofset = -540//test
    
    // const korDate = new Date(date.getTime() - (9 * 60 * 60 * 1000)) //+가 되는 것을 오히려 -함 //생을 한국으로강제 변경
    // const utcDate = convertToUTC(korDate);

    const utcDate = serverTimeToUTC(createdAt)
    // console.log(utcDate.getMonth()+1,utcDate.getDate(), utcDate.getHours(), 'utcDate.getHours()')

    date = applyLocalOffset(utcDate)
    // console.log(test.getMonth()+1,test.getDate(), test.getHours(),  'test성공 ?')

    // date = new Date(date.getTime() - (9 * 60 * 60 * 1000)) //이전

    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hour = date.getHours()
    // console.log(month,day,hour, 'hour, month, day')
    //const dayOfWeek = date.getDay()
    const strHour = hour < 10 ? `0${hour}` : hour;
    const minute = date.getMinutes()
    const strMinute = minute < 10 ? `0${minute}` : minute;
    const madeDate = `${year}/${month}/${day} ${strHour}:${strMinute}` 

    return {year, month, day, hour, minute, madeDate, newDate:date}
}