import { dateStrToDate } from "../../utils/date/createdAt-to-date";
import {  IBill,  } from "../cp-pay-store";
import { IBankBook } from "../type/cppay-type";




export const cpPayFn={
    store:{
        cpay:{ id:0,className:"",schoolName:"",classTh:0,classNum:0,code:"",imgurl:"",moneyUnit:"",numberOfDigits:4, isTrade:false,},
        product:{id:0, name:'', qty:0, desciption:'', seller_id:0,price:0,imgurl:''},
        tradeTmpCode:{id:0,product_id:0, cppay_id:0, seller_id:0,consumer_id:0,name:'',qty:0, price:0, sumPrice:0,code:''},
        bill:{id:0,cppay_id:0,seller_id:0,consumer_id:0,name:'',qty:0,price:0,sumPrice:0},
    },
    bill:{//같은 year+month가 없으면 push, 있으면 update
        makeKey:function({year,month,day}:{year:number,month:number,day:number}){
            const strMonth = month.toString().length===1? '0'+month.toString():month.toString(); //01, 11, 12
            const dayStr = day.toString().length===1? '0'+day.toString():day.toString(); //01, 11, 12
            const key = year.toString()+strMonth+dayStr; //202101, 202111, 202112
            return key;
        },
        makeOneStudentKey:function({year,month,day,student_id}:{year:number,month:number,day:number,student_id:number}){ //학생별 거래 조회
            return 'one'+student_id.toString()+':'+cpPayFn.bill.makeKey({year,month,day})
        },
        //학급 최선 거래 조회
        makeAllStudentsKey:function({year,month,day}:{year:number,month:number,day:number}){ //학급 전체 거래 조회
            return 'all'+cpPayFn.bill.makeKey({year,month,day})
        },
        monthToDay:function({year,month,data,student_id}:{year:number,month:number,data:IBill[]|IBankBook[],student_id?:number}){ //타잎호환성 https://toss.tech/article/typescript-type-compatibility
            const makeKey =({year, month,day}:{year:number, month:number, day:number})=>{ //함수로 빼면 에러남
                if(student_id!==undefined){
                    return cpPayFn.bill.makeOneStudentKey({year,month,day,student_id})
                }
                return cpPayFn.bill.makeKey({year,month,day})
            }
            const obj:{ [key: string]: any[];} = {} //IBankBookObj | IBillObj
            for(let i=0; i<data.length; i++){
                const date = dateStrToDate(data[i].createdAt)
                // const key = cpPayFn.bill.makeKey({year,month, day:date.getDate()})
                const key = makeKey({year,month, day:date.getDate()})
                if(!obj[key]){
                    obj[key] = [data[i]]
                }else{
                    obj[key] = [...obj[key], data[i]]
                }
            }
            //없는 날짜는 빈[]로 저장
            for(let i=1; i<32; i++){
                // const key = cpPayFn.bill.makeKey({year,month, day:i})
                const key = makeKey({year,month, day:i})
                if(!obj[key]){
                    obj[key] = []
                }
            }
            return obj;
            // const existData = cpPayVar().bankBooks //여기서부터는 호출함수에서 처리
            // cpPayVar({...cpPayVar(), bankBooks:{...existData, ...obj}})
        },
        // teacherOneStudentMonthToDay:function({year,month,student_id,data}:{year:number,month:number,student_id:number,data:IBankBook[]}){ //타잎호환성 https://toss.tech/article/typescript-type-compatibility
        //     const obj:{ [key: string]: any[];} = {} //IBankBookObj | IBillObj
        //     for(let i=0; i<data.length; i++){
        //         const date = dateStrToDate(data[i].createdAt)
        //         const key = cpPayFn.bill.makeOneStudentKey({year,month,day:date.getDate(),student_id})
        //         // const key = cpPayFn.bill.makeKey({year,month, day:date.getDate()})
        //         if(!obj[key]){
        //             obj[key] = [data[i]]
        //         }else{
        //             obj[key] = [...obj[key], data[i]]
        //         }
        //     }
        //     //없는 날짜는 빈[]로 저장
        //     for(let m=1; m<32; m++){
        //         const key = cpPayFn.bill.makeOneStudentKey({year,month, day:m,student_id})
        //         if(!obj[key]){
        //             obj[key] = []
        //         }
        //     }
        //     return obj;
        // },
    },

}