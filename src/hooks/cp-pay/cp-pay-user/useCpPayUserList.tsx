



import { gql, useQuery } from "@apollo/client";
import { CP_USER_BASIC_FRAGMENT } from "../../../fragments";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import { cp_PayUserListsQueryQuery } from "./useCpPayUserList.generated";
// import { useNavigate } from "react-router";


//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_PAY_USERLIST_QUERY = gql`
  query cp_PayUserListsQuery {
    cp_PayUserLists {
          ...CPUserBasicParts
      }

  }
  ${CP_USER_BASIC_FRAGMENT}
`;
//($id:Int!)
//(id:$id)
export const useCpPayUserList = () => { //{id}:{id:number|string|undefined}
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_PayUserListsQueryQuery>(CP_PAY_USERLIST_QUERY, {
    // variables: { id:Number(id) }, //id===0?null:id
    // skip: !id, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
  });
  return aa
  }catch(e){
    ConsoleHelper(e, 'useCpPayUserList')
    return {error:'useCpPayUserList error', data:undefined, loading:false}
  }

};

