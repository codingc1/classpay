
import { PrivacyPolicy } from "../page/Home/explanation/privacy-policy";
import { TermsConditions } from "../page/Home/explanation/termsConditions";
import { Login } from "../page/user/login/login";
import { SignUp } from "../page/user/signup/siginup";
import {  AGREE_PRIVACY_ROUTE_NAME, LOGIN_ROUTE_NAME, SIGNUP_ROUTE_NAME, TERMS_CONDITIONS } from "./route-name-constants";



export const basicRouters =[ //TermsConditions
  { path: LOGIN_ROUTE_NAME,element: <Login />, },
  { path: SIGNUP_ROUTE_NAME,element: <SignUp />, },
  { path: TERMS_CONDITIONS,element: <TermsConditions />, },
  { path:  AGREE_PRIVACY_ROUTE_NAME,  element: <PrivacyPolicy />,
  },
  // { path: CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/products',element: <CProductsHome />, },
]
