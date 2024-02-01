import { CP_PRODUCT_COLUMN } from "../../routers/contains-len";
import { ICpStudent } from "../../stores/cp-students-store";



//nestjs trade-money-res에서 가져옴 - sendMoney에서 사용
export const checkMoney ={
    maxMoney:(money:number)=>{
        if(money > CP_PRODUCT_COLUMN.maxPrice)return{ok:false,error:`금액이 너무 큽니다.${CP_PRODUCT_COLUMN.maxPriceHangul}까지 가능합니다.}`}
        return {ok:true,error:''}
    },
    money:(money:number)=>{
        if(money <= 0)return{ok:false,error:'금액은 0보다 커야합니다.'}
        if(checkMoney.maxMoney(money).error )return {...checkMoney.maxMoney(money), };
        // if(money > CP_PRODUCT_COLUMN.maxPrice)return{ok:false,error:`금액이 너무 큽니다.${CP_PRODUCT_COLUMN.maxPriceHangul}까지 가능합니다.}`}
        return {ok:true,error:''}
    },
    //아직 안쓰임
    sumMoney:(money:number, plusMoney:number)=>{//money이미 유저가 보유하고 있으므로 체크x
        // if(checkMoney.money(money).error )return {...checkMoney.money(money), };
        if(checkMoney.money(plusMoney).error )return {...checkMoney.money(plusMoney), };
        const sum_price = money + plusMoney
        if(sum_price > CP_PRODUCT_COLUMN.maxPrice)return{ok:false,error:'금액이 너무 큽니다.'}
        return {ok:true,error:''}
    },
    minusMoney:(money:number, minusMoney:number)=>{ //money이미 유저가 보유하고 있으므로 체크x //보유학 금액이 42억이 넘을수 없으므로 그것은 체크x
        if(checkMoney.money(minusMoney).error )return {...checkMoney.money(minusMoney), };
        const sum_price = money - minusMoney
        if(sum_price < 0 )return{ok:false,error:'잔액이 부족합니다.'}
        return {ok:true,error:'', senderResultPrice:sum_price}
    },
    cpCheckSendMoney:(sender:ICpStudent, receiver:ICpStudent, money:number)=>{ //cp_me
        const beforeMoney = sender.money
        const minusMoney = beforeMoney -money
        if(minusMoney <0)return{ok:false,error:'계좌 잔고에 돈이 부족합니다.', }

        if(checkMoney.money(money).error )return {...checkMoney.money(money), };
        if(sender.id === receiver.id)return{ok:false,error:'자기 자신에게 송금할 수 없습니다.', }
        
        return {ok:true,error:'', }
    }

}