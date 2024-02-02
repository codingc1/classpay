



export const cpPayFn={
    store:{
        cpay:{ id:0,className:"",schoolName:"",classTh:0,classNum:0,code:"",imgurl:"",moneyUnit:"",numberOfDigits:4},
        product:{id:0, name:'', qty:0, desciption:'', seller_id:0,price:0,imgurl:''},
        tradeTmpCode:{id:0,product_id:0, cppay_id:0, seller_id:0,consumer_id:0,name:'',qty:0, price:0, sumPrice:0,code:''},
        bill:{id:0,cppay_id:0,seller_id:0,consumer_id:0,name:'',qty:0,price:0,sumPrice:0},
    },
    bill:{//같은 year+month가 없으면 push, 있으면 update
        makeKey:function({year,month}:{year:number,month:number,}){
            const strMonth = month.toString().length===1? '0'+month.toString():month.toString();
            const key = year.toString()+strMonth;
            return key;
        },
        
    },

}