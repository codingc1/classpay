import { useReactiveVar } from "@apollo/client";
import { Link } from "react-router-dom";





export default function HomeProfileHeader() {
    // const isLoggedIn = useReactiveVar(isLoggedIn);

    return(
        <header className="py-4">
            <div className="w-full max-w-sm  flex justify-center items-center">
                <div  className="w-full grid grid-cols-2">
                    <Link to="/">
                        <div className="w-36 font-medium">Home</div>
                    </Link>
                    <div className="w-full flex justify-end">
                        {/* {isLoggedIn && <div className={`${fontStyel} cursor-pointer`} onClick={logOutButton}>
                        로그아웃
                        </div>}
                        {!isLoggedIn && <div className={`${fontStyel} cursor-pointer`} onClick={()=>navigate(LOGIN_ROUTE_NAME)}>
                        로그인
                        </div>}
                        {isLoggedIn && spaceDiv}
                        {isLoggedIn && <Link to={USER_PROFILE_ROUTE_NAME}>
                        <div className={`${fontStyel}`}>내정보</div>
                        </Link>} */}
                    </div>
                </div>
            </div>
        </header>
    )
}