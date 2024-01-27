import { makeVar } from '@apollo/client';
import { POSITION } from '../__generated__/gql-types';
import { cpStudentFn } from './sub-store-fn/cp-student-fn';

export interface ICpStudent{
    id:number;
    name:string;
    number:number;
    mainId:string;
    money:number;
    position:POSITION;
}

// export type IProduct = Pick<CP_Product, "id"|"name"|"qty"|"desciption"|"seller_id"|"price" >

interface IInitStudents { 
    student:ICpStudent //member에서 선택한 학생


    
  }

const aa:IInitStudents = {student:cpStudentFn.store.student,}
export const cpStudentsVar = makeVar(aa);

export const editStudentsVar={
    setStudent:function(obj: ICpStudent) { //route name
        cpStudentsVar({...cpStudentsVar(), student:obj});
    },

    // cppay:{
    //     set:function(obj:ICpPay){cpPayVar({...cpPayVar(), cppay:obj})}
    // },
    // product:{
    //     setProduct:function(obj:IProduct){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, product:obj}})},
    //     setQty:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, qty:num}})},
    // },
    // trade:{
    //     setTmpcode:function(obj:ITradeTmpcode){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode:obj}})},
    //     // setTmpcode:function(num:number){cpPayVar({...cpPayVar(), trade:{...cpPayVar().trade, tradeTmpCode_id:num}})},
    // },

    reset:function(){
        cpStudentsVar(aa)
    }
}