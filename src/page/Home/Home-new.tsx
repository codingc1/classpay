import { useReactiveVar } from "@apollo/client";
import { useEffect,  } from "react";
import {Helmet} from "react-helmet-async";
import { useNavigate,  } from "react-router-dom";
import TokenRepository from "../../api/token/tokenRepo";
import { PAY_HOME, CP_PAY_CREATE_ROUTE_NAME, LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";
import { authVar, editAuth } from "../../stores/authstore";
import { editRouteVar, routeVar } from "../../stores/route-info-store";
import HomeClassListComponent from "./home-class-list";
import HomeProfileHeader from "./header/home-profile-header";
// import { useCpPays } from "../../hooks/cp-pay/useCpPay";
import { cpPayVar } from "../../stores/cp-pay-store";



//사용하는중 new가 왜붙엇는지는 모름
export const HomeNew = () => {
    let navigate = useNavigate();
    const cppay = useReactiveVar(cpPayVar).cppay;
    // const routeRedux = useReactiveVar(routeVar)
    // const location = useLocation();
    // const {data} = useCpPays()
    const isLoggedIn = useReactiveVar(authVar).isLogin;

    useEffect(()=>{
      editRouteVar.header.setVisible(false) //학급에 들어가야 시작됨
    },[])
    //홈과 classPayApp에서만 토큰을 사용하여 자동 로그인 유지
    useEffect(()=>{ //로그인하지 않앗다면 로그인으로 보내기  
        if(!isLoggedIn){//처름 들어왔을때는 isLoggedIn=false이므로 자돌로그인 아니면 로그인 화면으로 이동
            const token = TokenRepository.getToken()
            const isAuto = TokenRepository.getAuto()
            if(!token || !isAuto){
                navigate(LOGIN_ROUTE_NAME)
            }else{
                editAuth.setLogin(true) //login처리   
                navigate(PAY_HOME) 
            }
        }else if(cppay.id !== 0){
            navigate(PAY_HOME)
        }
    },[cppay ]) 



    return(
        <div className="w-full min-h-screen  mt-3 flex flex-col items-center">
            {/* <div className="w-full max-w-sm  flex justify-center ">
                <Helmet><title >물고기 교실경제 홈</title></Helmet>
                <div className="w-full max-w-sm flex flex-col  px-5 ">
                    <div className="w-full ">
                        <HomeProfileHeader />
                        <HomeClassListComponent />
                        {(cppay.id === 0) && <button
                            type="button"
                            className="mt-3 w-full max-w-sm items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=>navigate(CP_PAY_CREATE_ROUTE_NAME)}
                        >
                            학급 만들기
                        </button>}
                    </div>
                </div>
            </div> */}
        </div>
    )
}