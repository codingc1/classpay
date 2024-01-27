import { ClassPayApp } from "../page/class-pay/ClassPayApp";
import { CreateCpPay } from "../page/class-pay/basic/create-cppay";
import BankBookHistoryHome from "../page/class-pay/economy/bankbook/book-history-home";
import BankBookSendMoney from "../page/class-pay/economy/bankbook/send-money";
import { CPCreateStudents } from "../page/class-pay/member/cp-create-students";
import { CPMemberHome } from "../page/class-pay/member/cp-member-home";
import ModifyStudent from "../page/class-pay/member/member-home/modify-student";
import { InstitutionBank } from "../page/institution/bank/insti-bank";
import { InstitutionHome } from "../page/institution/institution-home";
import { CProductsHome } from "../page/trades/product/product-home";
import TradeHistoryHome from "../page/trades/trade-history/trade-history-home";
import { ProfileHome } from "../page/user/profile/profile-home";
import { CP_BANKBOOK_HISTORY_ROUTE_NAME, CP_BANKBOOK_SNEDMONEY_ROUTE_NAME } from "./contains/ecomomy";
import { PAY_HOME, CP_PAY_CREATE_MEMBER_ROUTE_NAME, CP_PAY_CREATE_ROUTE_NAME, CP_PAY_MEMBER_ROUTE_NAME, CP_PAY_MODIFY_MEMBER_ROUTE_NAME, CP_PAY_TRADE_HISTORY_ROUTE_NAME, CP_PAY_ROLE_BANK_ROUTE_NAME, CP_INSTITUTION_HOME_ROUTE_NAME, CP_PAY_PRODUCTS_HOME_ROUTE_NAME, USER_PROFILE_ROUTE_NAME } from "./route-name-constants";



export const classpayRouters =[ //TermsConditions
{ path: CP_PAY_CREATE_ROUTE_NAME,element: <CreateCpPay />, },

{ path: PAY_HOME,element: <ClassPayApp />, },
{ path: CP_PAY_MEMBER_ROUTE_NAME,element: <CPMemberHome />, },
{ path: CP_PAY_CREATE_MEMBER_ROUTE_NAME,element: <CPCreateStudents />,},

{ path: CP_PAY_TRADE_HISTORY_ROUTE_NAME,element: <TradeHistoryHome />, },

//   { path: PAY_HOME+'/:payid',element: <ClassPayApp />, },
//   { path: PAY_HOME+'/:payid'+'/member',element: <CPMemberHome />, },
//     { path: PAY_HOME+'/:payid'+'/member/create',element: <CPCreateStudents />,},
  { path: CP_PAY_PRODUCTS_HOME_ROUTE_NAME,element: <CProductsHome />, },
  // { path: PAY_HOME+'/:payid'+'/products',element: <CProductsHome />, }, //
]
export const userRouters =[
  { path: CP_PAY_MODIFY_MEMBER_ROUTE_NAME,element: <ModifyStudent />, },
  { path: USER_PROFILE_ROUTE_NAME,element: <ProfileHome />, },
  
]

export const institutionRouters =[ //은행
  { path: CP_INSTITUTION_HOME_ROUTE_NAME,element: <InstitutionHome />, },

]
export const bankbookRouters =[ //통장
  { path: CP_BANKBOOK_HISTORY_ROUTE_NAME,element: <BankBookHistoryHome />,},
  { path: CP_BANKBOOK_SNEDMONEY_ROUTE_NAME,element: <BankBookSendMoney />, },

]

export const roleRouters =[ //기본적으로 주어지는 권한(역할) -은행 - 삭제??
  // { path: CP_PAY_ROLE_BANK_ROUTE_NAME,element: <InstitutionBank />, },
]
