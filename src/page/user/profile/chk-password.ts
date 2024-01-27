



//패스워드로 적절한지 확인
export const chkPassword=(str:string)=>{
    const mainIdRegex =  /^(?=.*[a-zA-z])(?=.*[0-9]).{6,16}$/

    if (!mainIdRegex.test(str)) {  //("6자 이상, 영어 숫자가 포함되어야 합니다")
        return "6자 이상, 영어 숫자가 포함되어야 합니다"
    } 
    return ''
}