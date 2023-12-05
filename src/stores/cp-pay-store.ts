import { makeVar } from '@apollo/client';
import { CP_Product } from '../__generated__/gql-types';
import { cpPayFn } from './sub-store-fn/cp-pay-fn';

interface ICpPay{
    id:number;
    className:string;
    schoolName:string;
    classTh:number;
    classNum:number;
    code:string;
    imgurl:string;
}
interface ITradeTmpcode{
    id:number;
    product_id:number;
    cppay_id:number;
    seller_id:number;
    consumer_id:number;
    name:string;
    qty:number;
    price:number;
    sumPrice:number;
    code:string;
}
export type IProduct = Pick<CP_Product, "id"|"name"|"qty"|"desciption"|"seller_id"|"price" >

interface IRoute { 
    payid: number;
    cppay: ICpPay;
    trade:{
        product:IProduct;
        qty: number;
        // tradeTmpCode_id:number;
        tradeTmpCode:ITradeTmpcode;
    }
    
    // routeName: string;
    // header: {
    //   isVisible :boolean;
    // }
    // footer:{
    //   isVisible:boolean;
    // }
  
    // isLoading: boolean;
    
  }

const aa:IRoute = {payid:0, cppay:cpPayFn.store.cpay, trade:{product: cpPayFn.store.product, qty:0, tradeTmpCode:cpPayFn.store.tradeTmpCode}}
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
    },
    trade:{
        setTmpcode:function(obj:ITradeTmpcode){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode:obj}})},
        // setTmpcode:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode_id:num}})},
    },

    reset:function(){
        cpPayVar(aa)
    }
}