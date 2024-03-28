import { CP_INSTI_PERMISSION } from "../../__generated__/gql-types";


export interface IInstiPermission{
    id:number;
    permissionName:CP_INSTI_PERMISSION;
    desciption:string;
    th:number;
}
export interface IInstitution{
    id:number;
    cppay_id:number;
    insti_name:string;
    desciption:string;
    instiPermission:IInstiPermission[]
    th:number;
}



export class Class_Insti {
    // private permissionName;
 
    constructor() {
    //    this.permissionName = permissionName;
    }
    permition_toString(permissionName: CP_INSTI_PERMISSION) {
        switch (permissionName){
          case CP_INSTI_PERMISSION.BankIssueMoney:
            return '화폐발행'
          case CP_INSTI_PERMISSION.BankDeleteMoney:
            return '화폐축소'
          case CP_INSTI_PERMISSION.BankSendMoney:
            return '입출금'
          // case CP_INSTI_PERMISSION.BankPayIncome:
          //   return '소득지급'
          case CP_INSTI_PERMISSION.FairTradeBookBank:
            return '통장조회'
          case CP_INSTI_PERMISSION.FairTradeCheck:
            return '상품거래조회'
          default:
            return '알수없음'
        }
        
       //return `${CP_INSTI_PERMISSION[permissionName]}`; // 한글 매핑 시킨 객체 속성으로 enum 값을 줌
    }
 }
 
 //서버와 동일
 export const CL_CP_INSTI_NAME_HANGUL ={ //institution entity : insti_name
  HANGOOK_BANK: "한국은행", //화폐발행-은행
  BANK:"은행",//화폐폐기-은행
  FAIR_TRADE:"공정거래위원회", //거래내역조회-공정거래위원해 //모든학생 거래내역 조회
} as const;