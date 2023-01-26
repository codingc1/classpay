import { ApolloError } from "@apollo/client";
import { LOGIN_ROUTE_NAME } from "../../../routers/route-name-constants";

import { useNavigate } from 'react-router-dom';
import { ConsoleHelper } from "../consoleHelper";

export const ERROR_MESSAGE={
    EXPIRED_TOKEN: 'EXPIRED_TOKEN'
} 

const useErrorShow=()=>{
    const navigate = useNavigate();
    // let navigate = useNavigate()

    const handleError=(err: ApolloError, aa?:string)=>{
        // console.log(err,'err')
        try{
            if(err.hasOwnProperty('message')){
                if(err.message === ERROR_MESSAGE.EXPIRED_TOKEN){
                    // alert(`로그인이 되지 않았습니다..다시 로그인 해 주십시오` );
                    // navigate(LOGIN_ROUTE_NAME)
                    navigate(LOGIN_ROUTE_NAME)
                    return;
                  }
                  if(err.message === 'Unauthorized'){
                        ConsoleHelper('location : ', aa)
                      ConsoleHelper(err.message)
                      alert(`문제가 발생하였습니다` );
                  }else if(err.message&& err.message[0]==='@'){
                    alert(err.message.substring(1))
                  
                    }else{
                      
                      ConsoleHelper('location : ', aa)
                      ConsoleHelper(err.message)
                      alert(`비정상적인 문제가 발생하였습니다..` );
                      // alert(err.message );
                    }
            }else{
              ConsoleHelper('location : ', aa)
              ConsoleHelper(err, 'err msg elses')
            }
        }catch(e){
            ConsoleHelper('location : ', aa)
            ConsoleHelper(e, 'e catch')
        }


      }
       
 return [handleError]
}

export default useErrorShow