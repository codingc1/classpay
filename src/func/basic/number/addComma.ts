


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


//   export const addCommaMan=(num:number, numberOfDigits:number)=>{
//     // const aa = 1000000
//     const regex = new RegExp(`\\B(?=(\\d{${numberOfDigits}})+(?!\\d))`, 'g');
//     return num.toString().replace(regex, ",");
//     // return num.toString().replace(/\B(?=(\d{numberOfDigits})+(?!\d))/g, ",");
//     // return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ',');
// }
//https://codechacha.com/ko/javascript-number-format-comma/
export const addCommaMan=(num:number, numberOfDigits:number)=> {
  const s1 = num.toString();
  const pointIndex = s1.indexOf('.');
  let s2 = pointIndex === -1 ? s1 : s1.slice(0, pointIndex);
  // insert commas every 3 digits from the right
  for (let i = s2.length - numberOfDigits; i > 0; i -= numberOfDigits){
    s2 = s2.slice(0, i) + ',' + s2.slice(i);
  }
    
  // append fractional part
  if (pointIndex !== -1){
    s2 += s1.slice(pointIndex);
  }
  return s2;
}