import { gql, useQuery } from "@apollo/client";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
// import { useNavigate } from "react-router";
import { cpMeQueryQuery } from "./useMe.generated";
import { CP_PAY_FRAGMENT, CP_USER_BASIC_FRAGMENT } from "../../fragments";

//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_ME_QUERY = gql`
  query cpMeQuery {
    cp_me {
      id
      mainId
      name
      number
      position
      money
      joinclasspay{
        id
        user_id
        className
        schoolName
        classTh
        className
        imgurl
        moneyUnit
      }
    }
  }
  
`;
//${CP_USER_BASIC_FRAGMENT}${CP_PAY_FRAGMENT}

export const useMe = () => {
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cpMeQueryQuery>(CP_ME_QUERY);
  return aa
  }catch(e){
    ConsoleHelper(e, 'cpUseMe')
    return {error:'useMe error', data:undefined, loading:false}
  }
  // const history = useNavigate();
  // const { error, data } =useQuery<meQuery>(ME_QUERY); //loading, 
  // if(error){
  //   localStorage.removeItem(LOCALSTORAGE_TOKEN);
  //   isLoggedInVar(false)
  //   navigate("/")
  // }
  // console.log('useMe 발동')
  // return data
};

