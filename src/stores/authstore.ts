import { makeVar } from "@apollo/client";
import TokenRepository from "../api/token/tokenRepo";


export interface IAuthBasic{
    isLogin : boolean,
    // token: string | null,
}
const aa:IAuthBasic = { //false로 시작
    // isLogin : !!(TokenRepository.getToken() && TokenRepository.getAuto()),
    // token: TokenRepository.getToken(),
    isLogin : false,
}
export const authVar = makeVar(aa);

export const editAuth ={
    // setToken: function(token: string) { authVar({...authVar(),token});},
    setLogin: function(boo: boolean) { authVar({...authVar(),isLogin:boo});},
}