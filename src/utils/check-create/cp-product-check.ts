import { CP_PRODUCT_COLUMN } from "../../routers/contains-len"



export const chkCpProduct ={ 
    name:function(str:string) {
        // const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/
        const regExp = /^[ㄱ-ㅎ가-힣a-zA-Z0-9 ]+$/;
        //두글자 이상
        function isLength(strInput:string) {
          return(strInput.length > 0 && strInput.length < 14) 
        } 
        if(!isLength(str))return{ok:false, error:'이름을 입력해 주세요'}
      if(!regExp.test(str) || str[0] === ' ')return{ok:false, error:'특수문자는 사용할 수 없습니다'}
        return{ok:true}
    },
    price:function(price:number) {
        if(isNaN(Number(price)) ||price < 0 || price >CP_PRODUCT_COLUMN.maxPrice  ){
            return{ok:false, error:'가격을 입력해 주세요'}
        }
        return{ok:true}
   },
   qty:function(qty:number) {
    if(isNaN(Number(qty)) ||qty < 0 || qty >CP_PRODUCT_COLUMN.maxPrice  ){
        return{ok:false, error:'보유 개수를 입력해 주세요'}
    }
    return{ok:true}
   }

}