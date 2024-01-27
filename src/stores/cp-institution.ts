import { makeVar } from '@apollo/client';
import { CP_Product } from '../__generated__/gql-types';
import { cpPayFn } from './sub-store-fn/cp-pay-fn';
import { IInstitution } from './type/institution-type';
import { cpInstitutionFn } from './sub-store-fn/cp-institution-fn';

interface ICpPay{
    id:number;
    className:string;
    schoolName:string;
    classTh:number;
    classNum:number;
    code:string;
    imgurl:string;
    moneyUnit:string;
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
// export type IProduct = Pick<CP_Product, "id"|"name"|"qty"|"desciption"|"seller_id"|"price"|"imgurl" >

export interface IBill{
    id:number;
    cppay_id:number;   
    seller_id:number;
    seller_name:string;
    consumer_id:number;  
    consumer_name:string;
    name:string; //product name
    qty:number;
    price:number;
    sumPrice:number;
    createdAt:string;
}
// interface IBillObj{ [key: string]: IBill[];}
interface IRoute { 
    institution:IInstitution; //selectd institution
    selPermissionNum:number; //기관마다 권한이 있는데 기관클릭하면 0으로 초기화시켜줘야함
    // trade:{
    //     product:IProduct;
    //     qty: number;
    //     // tradeTmpCode_id:number;
    //     tradeTmpProduct:ITradeTmpProduct;
    // }
    //{'year+month':IBill}
    // bills:IBillObj;

    
  }

const initInstitution:IRoute = {institution:cpInstitutionFn.store.institution, selPermissionNum:0}// routeName: 'Home',} //
export const cpInstitutionVar = makeVar(initInstitution);

export const editCpInstitutionVar={
    institution:{
        selectSet:function(obj:IInstitution){cpInstitutionVar({...cpInstitutionVar(), institution:obj})}, //
    },
    selPermissionNum:function(num:number){cpInstitutionVar({...cpInstitutionVar(), selPermissionNum:num})}, //
    

    // product:{
    //     setProduct:function(obj:IProduct){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, product:obj}})},
    //     setQty:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, qty:num}})},
    //     resetProduct:function(){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, product:cpPayFn.store.product}})},
    // },
    // trade:{
        
    //     setTmpcode:function(obj:ITradeTmpProduct){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpProduct:obj}})},
    //     setTmpcode:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode_id:num}})},
    // },
    // bill:{//같은 year+month가 없으면 push, 있으면 update
    //     add:function({year,month,data}:{year:number,month:number,data:IBill[]}){
    //         // const strMonth = month.toString().length===1? '0'+month.toString():month.toString();
    //         // const key = year.toString()+strMonth;
    //         const key = cpPayFn.bill.makeKey({year,month})
    //         const existData = cpPayVar().bills //.find((item)=>item[key]===data[key])
    //         existData[key] = data // '202401':data [] //빈 데이터라도 저장
    //         cpPayVar({...cpPayVar(), bills:existData})
    //     },
        
    // },

    reset:function(){
        cpInstitutionVar(initInstitution)
    }
}