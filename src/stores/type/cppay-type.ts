import { BILL_KIND_TYPE, RECORD_TYPE } from "../../__generated__/gql-types";

// export const IRECORD_TYPE  ={ //페이별 권한
//     Income : "Income", //수업 - 판매
//     Expend : "Expend",  //지출 - 구매
// } 
// export type I_RECORD_TYPE = typeof IRECORD_TYPE[keyof typeof IRECORD_TYPE];

export interface IBankBook{
    id:number;
    cppay_id:number;   
    user_id:number;
    recordtype:RECORD_TYPE;
    kind:BILL_KIND_TYPE;
    desciption:string;
    beforeMoney:number;
    price: number; 
    resultMoney: number;
    insti_id: number;
    broker_id: number;
    createdAt:string;
    sender_name:string;
    receiver_name:string;
}
