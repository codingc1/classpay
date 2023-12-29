import { ClassPayApp } from "../page/class-pay/ClassPayApp";
import { CreateCpPay } from "../page/class-pay/basic/create-cppay";
import { CPCreateStudents } from "../page/class-pay/member/cp-create-students";
import { CPMemberHome } from "../page/class-pay/member/cp-member-home";
import ModifyStudent from "../page/class-pay/member/member-home/modify-student";
import { CProductsHome } from "../page/trades/product/product-home";
import TradeHistoryHome from "../page/trades/t-history/trade-history-home";
import { CP_PAY_HOME_ROUTE_NAME, CP_PAY_CREATE_MEMBER_ROUTE_NAME, CP_PAY_CREATE_ROUTE_NAME, CP_PAY_MEMBER_ROUTE_NAME, CP_PAY_MODIFY_MEMBER_ROUTE_NAME, CP_PAY_TRADE_HISTORY_ROUTE_NAME } from "./route-name-constants";



export const classpayRouters =[ //TermsConditions
{ path: CP_PAY_CREATE_ROUTE_NAME,element: <CreateCpPay />, },

{ path: CP_PAY_HOME_ROUTE_NAME,element: <ClassPayApp />, },
{ path: CP_PAY_MEMBER_ROUTE_NAME,element: <CPMemberHome />, },
{ path: CP_PAY_CREATE_MEMBER_ROUTE_NAME,element: <CPCreateStudents />,},

{ path: CP_PAY_TRADE_HISTORY_ROUTE_NAME,element: <TradeHistoryHome />, },

//   { path: CP_PAY_HOME_ROUTE_NAME+'/:payid',element: <ClassPayApp />, },
//   { path: CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/member',element: <CPMemberHome />, },
//     { path: CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/member/create',element: <CPCreateStudents />,},

  { path: CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/products',element: <CProductsHome />, },
]
export const userRouters =[
  { path: CP_PAY_MODIFY_MEMBER_ROUTE_NAME,element: <ModifyStudent />, },
]
