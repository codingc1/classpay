


//https://hianna.tistory.com/441
//만자리마다 콤마 찍어주기
// export const addCommaMan=(num:number)=>{
//     // const aa = 1000000
//     return num.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, ",");
// }

//사파리에서 정규표현식 안되는 문제 https://dantechblog.gatsbyjs.io/posts/til-regex/
// function formatNumber(number) {
//     const parts = number.toString().split('.');
//     parts[0] = parts[0].replace(/\B(?=(\d{4})+(?!\d))/g, ',');
//     return parts.join('.');
//   }


  export const addCommaMan=(num:number, numberOfDigits:number)=>{
    // const aa = 1000000
    return num.toString().replace(/\B(?=(\d{numberOfDigits})+(?!\d))/g, ",");
    // return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ',');
}