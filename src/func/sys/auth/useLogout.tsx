import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants";
import { logoutFunc } from "./logout-func";



export const useLogout =()=>{
    let navigate = useNavigate();

    const handleLogout =()=>{
        logoutFunc()
        // resetAllStore()
        navigate(LOGIN_ROUTE_NAME)
    }

    return [handleLogout]
}