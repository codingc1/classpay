



export const cpPayFn={
    store:{
        cpay:{ id:0,className:"",schoolName:"",classTh:0,classNum:0,code:"",imgurl:"",moneyUnit:"",numberOfDigits:4, isTrade:false,},
        product:{id:0, name:'', qty:0, desciption:'', seller_id:0,price:0,imgurl:''},
        tradeTmpCode:{id:0,product_id:0, cppay_id:0, seller_id:0,consumer_id:0,name:'',qty:0, price:0, sumPrice:0,code:''},
        bill:{id:0,cppay_id:0,seller_id:0,consumer_id:0,name:'',qty:0,price:0,sumPrice:0},
    },
    bill:{//같은 year+month가 없으면 push, 있으면 update
        makeKey:function({year,month}:{year:number,month:number,}){
            const strMonth = month.toString().length===1? '0'+month.toString():month.toString(); //01, 11, 12
            const key = year.toString()+strMonth; //202101, 202111, 202112
            return key;
        },
        makeOneStudentKey:function({year,month,student_id}:{year:number,month:number,student_id:number}){ //학생별 거래 조회
            return 'one'+student_id.toString()+':'+cpPayFn.bill.makeKey({year,month})
        },
        //학급 최선 거래 조회
        makeAllStudentsKey:function({year,month}:{year:number,month:number,}){
            return 'all'+cpPayFn.bill.makeKey({year,month})
        },
    },

}