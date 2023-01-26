



import { gql, useQuery } from "@apollo/client";
import { CP_PAY_FRAGMENT,CP_PAY_MONEY_FRAGMENT } from "../../fragments";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
import { cp_PayInfoAppQueryQuery } from "./useCpPayInfoApp.generated";
// import { useNavigate } from "react-router";


//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_PAY_INFOAPP_QUERY = gql`
  query cp_PayInfoAppQuery($id:Int!) {
    cp_PayInfoApp(id:$id) {
        ok
        error
        result{
          cppay{
            ...CPPayParts
          }
          paymoney{
            ...CPPayMoneyParts
          }
          
        }

      }

  }
  ${CP_PAY_FRAGMENT}${CP_PAY_MONEY_FRAGMENT}
`;
//

export const useCpPayAppInfo = ({id}:{id:number|undefined}) => {
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_PayInfoAppQueryQuery>(CP_PAY_INFOAPP_QUERY, {
    variables: { id:id===0?null:id }, //id===0?null:id
    skip: !id, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
  });
  return aa
  }catch(e){
    ConsoleHelper(e, 'useCpPayAppInfo')
    return {error:'useCpPayAppInfo error', data:undefined, loading:false}
  }

};

