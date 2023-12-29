import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { NotFound } from "../components/home/404";
import { ProtectedRoute } from "../components/home/protected/ProtectedRoute ";

import LayoutLeft from "../components/layout/Layout-left";
import { HomeNew } from "../page/Home/Home-new";
import { CP_PAY_HOME_ROUTE_NAME,   } from "./route-name-constants";
import { QrScanner } from "../page/class-pay/qr-scan/qr-scanning";
import { CpSettingHome } from "../page/class-pay/setting/cp-setting-home";
import { classpayRouters, userRouters } from "./logged-in-router";
import { basicRouters } from "./logged-out-router";


interface IRoute {
  path: string;
  element: JSX.Element;
}
const makeRouteArr=(route:IRoute[])=>{
  const aa =route.map((route) => ( <Route key={route.path} path={route.path} element={route.element} /> ))
  return aa
}
function flatArr<T>(arr:T[][]){
  const arr2 = arr.reduce(function (acc, cur) {
    return [...acc, ...cur];
  })
  return arr2
}
const ProtectRoutes=(...args:IRoute[][])=>{
  const bbb= args.map(route=>route.map((route) => ( <Route key={route.path} path={route.path} element={<ProtectedRoute>{route.element}</ProtectedRoute>} /> )))
  return flatArr(bbb)
}
const logOutRoutes=(...args:IRoute[][])=>{
  const bbb= args.map(el=>makeRouteArr(el))
  return flatArr(bbb)
}
 //기본 형태 https://velog.io/@velopert/react-router-v6-tutorial
  export default function AppRoutes(){
    return(
      <Router>
        <Routes>
          <Route element={<LayoutLeft />}>
            <Route path="/" element={ <HomeNew />} />
            {logOutRoutes(basicRouters)}
            
            {/* <Route path={QR_SCANB_ROUTE_NAME} element={ <QrScan />} /> */}
            {ProtectRoutes(classpayRouters, userRouters)} 

            <Route path={CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/setting'} element={ <CpSettingHome />} />

            <Route path={CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/scan'} element={ <QrScanner />} />

            
            
          </Route>
          <Route path="*" element={<NotFound />} />  
        </Routes>
      </Router>
    )
  }

  //params 가져오기 https://velog.io/@tjdgus0528/React-Router-v6-%EC%A0%95%EB%A6%AC

  // <Route path={LOGIN_ROUTE_NAME} element={ <Login />} />
 //<Route path={TERMS_CONDITIONS} element={<TermsConditions />} /> 

//<Route path={CP_PAY_CREATE_ROUTE_NAME} element={ <CreateCpPay />} />

            // <Route path={CP_PAY_HOME_ROUTE_NAME+'/:payid'} element={ <ClassPayApp />} />
            // <Route path={CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/member'} element={ <CPMemberHome />} />
            // <Route path={CP_PAY_HOME_ROUTE_NAME+'/:payid'+'/products'} element={ <CProductsHome />} /> 