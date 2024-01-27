import { CP_PRODUCT_COLUMN } from "../../routers/contains-len"



export const chkCpInstitutuion ={ 
    // name:function(str:string) {
    //     const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/
    //     //두글자 이상
    //     function isLength(strInput:string) {
    //       return(strInput.length > 0 && strInput.length < 14) 
    //     } 
    //     if(!isLength(str))return{ok:false, error:'이름을 입력해 주세요'}
    //   if(!regExp.test(str))return{ok:false, error:'이름 구성에 문제가 있습니다'}
    //     return{ok:true}
    // },
    money:function(money:number) {
        if(isNaN(Number(money)) ||money <= 0 || money >CP_PRODUCT_COLUMN.maxPrice  ){
            return{ok:false, error:'금액이 알맞지 않습니다.'}
        }
        return{ok:true}
   },
//    qty:function(qty:number) {
//     if(isNaN(Number(qty)) ||qty < 0 || qty >CP_PRODUCT_COLUMN.maxPrice  ){
//         return{ok:false, error:'보유 개수를 입력해 주세요'}
//     }
//     return{ok:true}
//    }

}