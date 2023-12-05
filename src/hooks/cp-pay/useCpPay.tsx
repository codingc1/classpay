



import { gql, useQuery } from "@apollo/client";
import { CP_PAY_FRAGMENT } from "../../fragments";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
import { cp_paysQueryQuery } from "./useCpPay.generated";
import { CP_User } from "../../__generated__/gql-types";
import { cpMeQueryQuery } from "../user/useMe.generated";
// import { useNavigate } from "react-router";


//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_PAYS_QUERY = gql`
  query cp_paysQuery {
    cp_pays {
        ...CPPayParts

    }

  }
  ${CP_PAY_FRAGMENT}
`;
//

export const useCpPays = (user:cpMeQueryQuery |undefined) => { //user가 있을때만 사용가능
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_paysQueryQuery>(CP_PAYS_QUERY, {
    skip: !user || !user.cp_me, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
  });
  return aa
  }catch(e){
    ConsoleHelper(e, 'useCpPays')
    return {error:'useCpPays error', data:undefined, loading:false}
  }

};

