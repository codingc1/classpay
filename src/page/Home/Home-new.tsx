import { useReactiveVar } from "@apollo/client";
import { useEffect,  } from "react";
import {Helmet} from "react-helmet-async";
import { useNavigate,  } from "react-router-dom";
import TokenRepository from "../../api/token/tokenRepo";
import { CP_PAY_CREATE_ROUTE_NAME, LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";
import { authVar } from "../../stores/authstore";
import { editRouteVar } from "../../stores/route-info-store";
import HomeClassListComponent from "./home-class-list";




export const HomeNew = () => {

    let navigate = useNavigate();
  
    // const location = useLocation();
    const isLoggedIn = useReactiveVar(authVar).isLogin;
  
    // const alertTest=()=>{
    //   setErrMsg('test')
    // }
    useEffect(()=>{
      editRouteVar.header.setVisible(false) //학급에 들어가야 시작됨
    },[])
    useEffect(()=>{ //로그인하지 않앗다면 로그인으로 보내기  
        if(!isLoggedIn){//처름 들어왔을때는 isLoggedIn=false이므로 자돌로그인 아니면 로그인 화면으로 이동
            const token = TokenRepository.getToken()
            const isAuto = TokenRepository.getAuto()
            if(!token || !isAuto){
            navigate(LOGIN_ROUTE_NAME)
            }
            // alertTest()
        }
    },[ ]) 


    return(
        <div className="w-full min-h-screen  mt-3 flex flex-col items-center">
            <div className="w-full max-w-sm  flex justify-center ">
                <Helmet><title >학급페이 홈</title></Helmet>
                <div className="w-full max-w-sm flex flex-col  px-5 ">
                    <div className="w-full ">
                        <div className="text-left text-sm">학급페이 홈</div>
                        <HomeClassListComponent />
                        <button
                            type="button"
                            className="mt-3 w-full max-w-sm items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={()=>navigate(CP_PAY_CREATE_ROUTE_NAME)}
                        >
                            학급페이 만들기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}