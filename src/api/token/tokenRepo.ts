import { AUTOLOGIN, LOCALSTORAGE_TOKEN, TOKEN_TIMER_LOCAL_STORAGE } from "../api-constants";


class TokenRepo {
    LOCALSTORAGE_TOKEN = LOCALSTORAGE_TOKEN;
    TOKEN_TIMER_LOCAL_STORAGE=TOKEN_TIMER_LOCAL_STORAGE;
    AUTO_LOGIN = AUTOLOGIN
  
    setTokenTimer(){
        const now = new Date()
        now.setMinutes( now.getMinutes()+2) //2분
        const exfired = now.toString()
        localStorage.setItem(TOKEN_TIMER_LOCAL_STORAGE, exfired); 
    }
    save(token:string) {
      localStorage.setItem(this.LOCALSTORAGE_TOKEN, token);
      this.setTokenTimer()
    }
  
    getToken() {
      return localStorage.getItem(this.LOCALSTORAGE_TOKEN);
    }
    getAuto(){
      return localStorage.getItem(this.AUTO_LOGIN);
    }

    setAuto(){
      localStorage.setItem(this.AUTO_LOGIN, 'true');
    }
    setNotAuto(){
      localStorage.removeItem(this.AUTO_LOGIN); //자동저장 취소
    }
  
    removeLoginBundle () {
      localStorage.removeItem(this.LOCALSTORAGE_TOKEN);
      localStorage.removeItem(this.TOKEN_TIMER_LOCAL_STORAGE);
      localStorage.getItem(this.AUTO_LOGIN);
    }


    isRefresh(){
        const tokenTimeString = localStorage.getItem(TOKEN_TIMER_LOCAL_STORAGE);
        if(tokenTimeString){
          const tokenTimeDate = new Date(tokenTimeString)
          //저장 시각과 지금 시각 차이가 2일 이상 난다면
        //   const dateDiffDay = Math.floor((new Date().getTime()-tokenTimeDate.getTime())/(1000*3600*24)); //floor버림 //.ceil 올림
          const dateDiffDay = Math.floor(( tokenTimeDate.getTime() - new Date().getTime() )/(1000)); //*24 //1분단위 차이
          // console.log(dateDiffDay, '초 계산 결과 분?')
          //30초 미만을 남았다면 //지나지 않았다면
          if(dateDiffDay<20*60 *24*14 && dateDiffDay>0){ //test 60초
            return true //리프레쉬해야햠
          }
          return false
    }
    return false
  }

}
  const TokenRepository = new TokenRepo()
  export default TokenRepository;