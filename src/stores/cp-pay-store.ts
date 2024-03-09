import { makeVar } from '@apollo/client';
import { BILL_KIND_TYPE, CP_Product } from '../__generated__/gql-types';
import { cpPayFn } from './sub-store-fn/cp-pay-fn';
import { IBankBook } from './type/cppay-type';

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
interface IBillObj{ [key: string]: IBill[];}
interface IBankBookObj{ [key: string]: IBankBook[];}
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
        add:function({year,month,data}:{year:number,month:number,data:IBill[]}){
            // const strMonth = month.toString().length===1? '0'+month.toString():month.toString();
            // const key = year.toString()+strMonth;
            const key = cpPayFn.bill.makeKey({year,month})
            const existData = cpPayVar().bills //.find((item)=>item[key]===data[key])
            existData[key] = data // '202401':data [] //빈 데이터라도 저장
            cpPayVar({...cpPayVar(), bills:existData})
        },
        teacherOneStudentAdd:function({year,month,data,student_id}:{year:number,month:number,student_id:number,data:IBill[]}){
            const key = cpPayFn.bill.makeOneStudentKey({year,month,student_id})
            const existData = cpPayVar().bills 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bills:existData})
        },
        //add와 같은 곳에 저장하지만 key가 다름
        teacherAllStudentsAdd:function({year,month,data}:{year:number,month:number,data:IBill[]}){
            const key = cpPayFn.bill.makeAllStudentsKey({year,month})
            const existData = cpPayVar().bills 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bills:existData})

        }
        
    },
    bankBook:{
        add:function({year,month,data}:{year:number,month:number,data:IBankBook[]}){
            const key = cpPayFn.bill.makeKey({year,month})
            const existData = cpPayVar().bankBooks //.find((item)=>item[key]===data[key])
            existData[key] = data // '202401':data [] //빈 데이터라도 저장
            cpPayVar({...cpPayVar(), bankBooks:existData})
        },
        //insti 공정거래위원회 학생별 조회
        teacherOneStudentAdd:function({year,month,data,student_id}:{year:number,month:number,student_id:number,data:IBankBook[]}){
            const key = cpPayFn.bill.makeOneStudentKey({year,month,student_id})
            const existData = cpPayVar().bankBooks 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bankBooks:existData})
        },
        //add와 같은 곳에 저장하지만 key가 다름
        teacherAllStudentsAdd:function({year,month,data}:{year:number,month:number,data:IBankBook[]}){
            const key = cpPayFn.bill.makeAllStudentsKey({year,month})
            const existData = cpPayVar().bankBooks 
            existData[key] = data 
            cpPayVar({...cpPayVar(), bankBooks:existData})

        }
    },
    reset:function(){
        cpPayVar(aa)
    }
}