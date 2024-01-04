import { ClassPayApp } from "../page/class-pay/ClassPayApp";
import { CreateCpPay } from "../page/class-pay/basic/create-cppay";
import { CPCreateStudents } from "../page/class-pay/member/cp-create-students";
import { CPMemberHome } from "../page/class-pay/member/cp-member-home";
import ModifyStudent from "../page/class-pay/member/member-home/modify-student";
import { CProductsHome } from "../page/trades/product/product-home";
import TradeHistoryHome from "../page/trades/trade-history/trade-history-home";
import { PAY_HOME, CP_PAY_CREATE_MEMBER_ROUTE_NAME, CP_PAY_CREATE_ROUTE_NAME, CP_PAY_MEMBER_ROUTE_NAME, CP_PAY_MODIFY_MEMBER_ROUTE_NAME, CP_PAY_TRADE_HISTORY_ROUTE_NAME } from "./route-name-constants";



export const classpayRouters =[ //TermsConditions
{ path: CP_PAY_CREATE_ROUTE_NAME,element: <CreateCpPay />, },

{ path: PAY_HOME,element: <ClassPayApp />, },
{ path: CP_PAY_MEMBER_ROUTE_NAME,element: <CPMemberHome />, },
{ path: CP_PAY_CREATE_MEMBER_ROUTE_NAME,element: <CPCreateStudents />,},

{ path: CP_PAY_TRADE_HISTORY_ROUTE_NAME,element: <TradeHistoryHome />, },

//   { path: PAY_HOME+'/:payid',element: <ClassPayApp />, },
//   { path: PAY_HOME+'/:payid'+'/member',element: <CPMemberHome />, },
//     { path: PAY_HOME+'/:payid'+'/member/create',element: <CPCreateStudents />,},

  { path: PAY_HOME+'/:payid'+'/products',element: <CProductsHome />, },
]
export const userRouters =[
  { path: CP_PAY_MODIFY_MEMBER_ROUTE_NAME,element: <ModifyStudent />, },
]
