// import { useApolloClient } from "@apollo/client";


import { useNavigate } from "react-router-dom";
import TokenRepository from "../../../api/token/tokenRepo";
import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants";
import { editAuth } from "../../../stores/authstore";

// import { AUTOLOGIN, LOCALSTORAGE_TOKEN } from "../../../constants";
// const client = useApolloClient();
// await client.cache.reset()
export const logoutFunc =()=>{
    TokenRepository.removeLoginBundle()
    // localStorage.removeItem(LOCALSTORAGE_TOKEN); //토큰만 없애면 quthTokenvar isLoggedInvar 모두 false됨
    editAuth.setLogin(false)
    
    
    //useMe 캐쉬 삭제
}
// export const logoutAndGoHomeFunc =()=>{
//     localStorage.removeItem(LOCALSTORAGE_TOKEN);
//     isLoggedInVar(false) //로그인 해제
//     // const history = useNavigate(); //로그아웃 되면 자동으로 홈으로 감
// }
//검색 https://stackoverflow.com/questions/54223118/clearing-cache-on-logout-with-apollo-client
//공식문서
//https://www.apollographql.com/docs/react/caching/advanced-topics/

