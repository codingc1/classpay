



import { gql, useQuery } from "@apollo/client";
import { CP_PAY_FRAGMENT } from "../../fragments";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
import { cp_paysQueryQuery } from "./useCpPay.generated";
import { cp_PayInfoQueryQuery } from "./useCpPayInfo.generated";
// import { useNavigate } from "react-router";


//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_PAY_INFO_QUERY = gql`
  query cp_PayInfoQuery($id:Int!) {
    cp_PayInfo(id:$id) {
        ok
        error
        result{
          ...CPPayParts
        }

      }

  }
  ${CP_PAY_FRAGMENT}
`;
//

export const useCpPayInfo = ({id}:{id:number}) => {
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_PayInfoQueryQuery>(CP_PAY_INFO_QUERY, {
    variables: { id:id===0?null:id }, //id===0?null:id
  });
  return aa
  }catch(e){
    ConsoleHelper(e, 'useCpPayInfo')
    return {error:'useCpPayInfo error', data:undefined, loading:false}
  }

};

