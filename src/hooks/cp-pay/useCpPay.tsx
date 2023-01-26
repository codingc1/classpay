



import { gql, useQuery } from "@apollo/client";
import { CP_PAY_FRAGMENT } from "../../fragments";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
import { cp_paysQueryQuery } from "./useCpPay.generated";
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

export const useCpPays = () => {
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_paysQueryQuery>(CP_PAYS_QUERY);
  return aa
  }catch(e){
    ConsoleHelper(e, 'useCpPays')
    return {error:'useCpPays error', data:undefined, loading:false}
  }

};

