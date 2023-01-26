import { useReactiveVar } from "@apollo/client";
import { Navigate, useLocation } from "react-router-dom";

import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants";
import { authVar } from "../../../stores/authstore";

//https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4
export const ProtectedRoute = ({ children }:{ children:JSX.Element }) => {
  const isLoggedIn = useReactiveVar(authVar).isLogin;
    const location = useLocation();

    if(!isLoggedIn){
        return <Navigate to={LOGIN_ROUTE_NAME} state={{from: location}} replace={true} />;
    }else{
      return children;
    }

  
};