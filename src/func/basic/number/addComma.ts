


//https://hianna.tistory.com/441
//만자리마다 콤마 찍어주기
export const addCommaMan=(num:number)=>{
    // const aa = 1000000
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, ",");
}