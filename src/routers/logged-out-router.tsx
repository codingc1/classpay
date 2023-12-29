
import { TermsConditions } from "../page/Home/explanation/termsConditions";
import { Login } from "../page/user/login/login";
import {  LOGIN_ROUTE_NAME, TERMS_CONDITIONS } from "./route-name-constants";



export const basicRouters =[ //TermsConditions
  { path: LOGIN_ROUTE_NAME,element: <Login />, },
  { path: TERMS_CONDITIONS,element: <TermsConditions />, },
  // { path: CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/products',element: <CProductsHome />, },
]
