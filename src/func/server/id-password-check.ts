


 export const checkCPUserMainIdOk=(str:string):boolean=> {
   const reg1 =  /^[a-z0-9]{4,14}$/; //영어 숫자로만
   return (reg1.test(str) && isNaN( +str[0]) ); //&& !reg2.test(str)
};

export const checkCPPassOk=(str:string):boolean=> {
    const reg2 = /^[~`!@#$%^&*()_+=[\]\{}\/<>?a-zA-Z0-9-]+$/; //영어 숫자 특수문자만 허용 https://www.python2.net/questions-655160.htm 
    return( reg2.test(str))
 };
 

export const checkCPNickname=(str:string):boolean=> {
    //특수만자 있거나 글자수가 안맞으면 true
    //한글 영어 숫자 가능
    // console.log(str,)
    const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/
    //세글자 이상
    function isLength(strInput:string) {
      return(strInput.length > 2 && strInput.length < 14) 
    } 
    return (regExp.test(str) && isLength(str)) //하나라도 해당되면 true로 발송
 };

