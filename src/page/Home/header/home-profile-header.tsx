import { useReactiveVar } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { authVar } from "../../../stores/authstore";
import { client } from "../../../apollo";
import { logoutFunc } from "../../../func/sys/auth/logout-func";
import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants";
import { resetAllStore } from "../../../stores/resetAllStore";



const fontStyel = 'text-center text-gray-400 text-sm hover:text-blue-400 hover:underline'
const spaceDiv = <div className={`${fontStyel}`}>&nbsp;|&nbsp;</div>

export default function HomeProfileHeader() {
    let navigate = useNavigate();
    const isLoggedIn = useReactiveVar(authVar);

    const logOutButton =async()=>{
        resetAllStore()
        await client.cache.reset()
        logoutFunc()
        navigate(LOGIN_ROUTE_NAME)//LOGIN_ROUTE_NAME
      }
    return(//USER_PROFILE_ROUTE_NAME
        <header className="w-full py-4">
            <div className="w-full max-w-sm  flex justify-center items-center">
                <div  className="w-full grid grid-cols-2">
                    <Link to="/">
                        <div className="w-36 font-medium">Home</div>
                    </Link>
                    <div className="w-full flex justify-end">
                        {isLoggedIn && <div className={`${fontStyel} cursor-pointer`} onClick={logOutButton}>
                        로그아웃
                        </div>}
                        {!isLoggedIn && <div className={`${fontStyel} cursor-pointer`} onClick={()=>navigate(LOGIN_ROUTE_NAME)}>
                        로그인
                        </div>}
                        {isLoggedIn && spaceDiv}
                        {isLoggedIn && <Link to={LOGIN_ROUTE_NAME}>
                        <div className={`${fontStyel}`}>내정보</div>
                        </Link>}
                    </div>
                </div>
            </div>
        </header>
    )
}