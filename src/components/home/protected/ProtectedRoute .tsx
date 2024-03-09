import { useReactiveVar } from "@apollo/client";
import { Navigate, useLocation } from "react-router-dom";

import { LOGIN_ROUTE_NAME, PAY_HOME } from "../../../routers/route-name-constants";
import { authVar } from "../../../stores/authstore";

//https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4
export const ProtectedRoute = ({ children }:{ children:JSX.Element }) => {
  const isLoggedIn = useReactiveVar(authVar).isLogin;
    const location = useLocation();
    // HOME과 classPayApp인지 체크
    const isHome = location.pathname === '/';
    const isClassPayApp = location.pathname === PAY_HOME;

    if(!isHome && !isClassPayApp){
      if(!isLoggedIn){ //LOGIN_ROUTE_NAME
          return <Navigate to={LOGIN_ROUTE_NAME} state={{from: location}} replace={true} />;
      }else{
        return children;
      }
    }else{
      return children;
    }

  
};