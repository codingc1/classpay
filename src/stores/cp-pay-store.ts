import { makeVar } from '@apollo/client';
import { BILL_KIND_TYPE, CP_Product } from '../__generated__/gql-types';
import { cpPayFn } from './sub-store-fn/cp-pay-fn';
import { IBankBook } from './type/cppay-type';
import { dateStrToDate } from '../utils/date/createdAt-to-date';

interface ICpPay{
    id:number;
    className:string;
    schoolName:string;
    classTh:number;
    classNum:number;
    code:string;
    imgurl:string;
    moneyUnit:string;
    numberOfDigits:number;
    isTrade:boolean;
}
interface ITradeTmpProduct{
    id:number;
    product_id:number;
    cppay_id:number;
    seller_id:number;
    // consumer_id:number;
    //seller_name:string;
    name:string;
    qty:number;
    price:number;
    sumPrice:number;
    code:string;
}
export type IProduct = Pick<CP_Product, "id"|"name"|"qty"|"desciption"|"seller_id"|"price"|"imgurl" >

export interface IBill{
    id:number;
    cppay_id:number;   
    seller_id:number;
    seller_name:string;
    consumer_id:number;  
    consumer_name:string;
    kind:BILL_KIND_TYPE; //
    name:string; //product name
    qty:number;
    price:number;
    sumPrice:number;
    desciption:string;
    createdAt:string;
}
export interface IBillObj{ [key: string]: IBill[];}
export interface IBankBookObj{ [key: string]: IBankBook[];}
interface IRoute { 
    payid: number;
    cppay: ICpPay;
    trade:{
        product:IProduct;
        qty: number;
        // tradeTmpCode_id:number;
        tradeTmpProduct:ITradeTmpProduct;
    }
    //{'year+month':IBill}
    bills:IBillObj;
    bankBooks:IBankBookObj;
    // routeName: string;
    // header: {
    //   isVisible :boolean;
    // }
    // footer:{
    //   isVisible:boolean;
    // }
  
    // isLoading: boolean;
    
  }

const aa:IRoute = {payid:0, cppay:cpPayFn.store.cpay, trade:{product: cpPayFn.store.product, qty:0, tradeTmpProduct:cpPayFn.store.tradeTmpCode},
    bills:{}, bankBooks:{} }// routeName: 'Home',}
export const cpPayVar = makeVar(aa);

export const editCpPayVar={
    setPayID:function(num: number) { //route name
        cpPayVar({...cpPayVar(), payid:num});
    },

    cppay:{
        set:function(obj:ICpPay){cpPayVar({...cpPayVar(), cppay:obj})}
    },
    product:{
        setProduct:function(obj:IProduct){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, product:obj}})},
        setQty:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, qty:num}})},
        resetProduct:function(){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, product:cpPayFn.store.product}})},
    },
    trade:{
        
        setTmpcode:function(obj:ITradeTmpProduct){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpProduct:obj}})},
        // setTmpcode:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode_id:num}})},
    },
    bill:{//같은 year+month가 없으면 push, 있으면 update
        monthAdd:function({year,month,data}:{year:number,month:number,data:IBill[]}){
            const obj = cpPayFn.bill.monthToDay({year,month,data}) //월전체 데이터를 일별로 나눔
            const existData = cpPayVar().bills
            cpPayVar({...cpPayVar(), bills:{...existData, ...obj}})
        },
        add:function({year,month,day,data}:{year:number,month:number,day:number,data:IBill[]}){
            // const strMonth = month.toString().length===1? '0'+month.toString():month.toString();
            // const key = year.toString()+strMonth;
            const key = cpPayFn.bill.makeKey({year,month, day})
            const existData = cpPayVar().bills //.find((item)=>item[key]===data[key])
            existData[key] = data // '202401':data [] //빈 데이터라도 저장
            cpPayVar({...cpPayVar(), bills:existData})
        },
        teacherOneStudentAdd:function({year,month,day,data,student_id}:{year:number,month:number,day:number,student_id:number,data:IBill[]}){
            // const key = cpPayFn.bill.makeOneStudentKey({year,month, day,student_id})
            // const existData = cpPayVar().bills 
            // existData[key] = data 
            // cpPayVar({...cpPayVar(), bills:existData}) 
            const obj = cpPayFn.bill.monthToDay({year,month,data,student_id}) //월전체 데이터를 일별로 나눔
            const existData = cpPayVar().bills 
            cpPayVar({...cpPayVar(), bills:{...existData, ...obj}})
        },
        //add와 같은 곳에 저장하지만 key가 다름
        teacherAllStudentsAdd:function({year,month, day,data}:{year:number,month:number,day:number,data:IBill[]}){
            const key = cpPayFn.bill.makeAllStudentsKey({year,month, day}) 
            const existData = cpPayVar().bills 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bills:existData})

        }
        
    },
    bankBook:{
        //month데이터를 일별로 나눠서 저장
        monthAdd:function({year,month,data}:{year:number,month:number,data:IBankBook[]}){
            // const obj:IBankBookObj = {}
            // for(let i=0; i<data.length; i++){
            //     const date = dateStrToDate(data[i].createdAt)
            //     const key = cpPayFn.bill.makeKey({year,month, day:date.getDate()})
            //     if(!obj[key]){
            //         obj[key] = [data[i]]
            //     }else{
            //         obj[key] = [...obj[key], data[i]]
            //     }
            // }
            // //없는 날짜는 빈[]로 저장
            // for(let i=1; i<32; i++){
            //     const key = cpPayFn.bill.makeKey({year,month, day:i})
            //     if(!obj[key]){
            //         obj[key] = []
            //     }
            // }
            const obj = cpPayFn.bill.monthToDay({year,month,data})//월전체 데이터를 일별로 나눔
            const existData = cpPayVar().bankBooks
            cpPayVar({...cpPayVar(), bankBooks:{...existData, ...obj}})
        },
        add:function({year,month,day,data}:{year:number,month:number,day:number,data:IBankBook[]}){
            const key = cpPayFn.bill.makeKey({year,month, day})
            const existData = cpPayVar().bankBooks //.find((item)=>item[key]===data[key])
            existData[key] = data // '202401':data [] //빈 데이터라도 저장
            cpPayVar({...cpPayVar(), bankBooks:existData})
        },
        //insti 공정거래위원회 학생별 조회
        teacherOneStudentAdd:function({year,month, data,student_id}:{year:number,month:number,student_id:number,data:IBankBook[]}){
            // const key = cpPayFn.bill.makeOneStudentKey({year,month,student_id})
            // const obj = cpPayFn.bill.teacherOneStudentMonthToDay({year,month,student_id,data})
            const obj = cpPayFn.bill.monthToDay({year,month,data,student_id}) //월전체 데이터를 일별로 나눔
            const existData = cpPayVar().bankBooks 
            cpPayVar({...cpPayVar(), bankBooks:{...existData, ...obj}})
            // console.log({...cpPayVar(), bankBooks:{...existData, ...obj}}, 'cpPayVar()')
            // existData[key] = data 
            // cpPayVar({...cpPayVar(), bankBooks:existData})
        },
        //add와 같은 곳에 저장하지만 key가 다름
        teacherAllStudentsAdd:function({year,month, day,data}:{year:number,month:number, day:number,data:IBankBook[]}){
            const key = cpPayFn.bill.makeAllStudentsKey({year,month, day})
            const existData = cpPayVar().bankBooks 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bankBooks:existData})

        }
    },
    reset:function(){
        cpPayVar(aa)
    }
}