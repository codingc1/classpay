



import { gql, useQuery } from "@apollo/client";
import { CP_PRODUCT_FRAGMENT,  } from "../../../fragments";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import { cp_myProductsQueryQuery } from "./useCpProducts.generated";

// import { useNavigate } from "react-router";

//($id:Int!)
//(id:$id)
//15.18 캐쉬에서 가져오므로 여러곳에도 불러도 한번만 서버에서 가져옴 없을때만 서버로감
export const CP_MY_PRODUCTS_QUERY = gql`
  query cp_myProductsQuery {
    cp_myProducts {
          ...CPProductParts
      }

  }
  ${CP_PRODUCT_FRAGMENT}
`;
//

export const useMyProducts = () => { //{id}:{id:number|string|undefined}
  // const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  // return useQuery<meQuery>(ME_QUERY);
  try{
  const aa = useQuery<cp_myProductsQueryQuery>(CP_MY_PRODUCTS_QUERY, {
    // variables: { id:Number(id) }, //id===0?null:id
    // skip: !id, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
  });
  return aa
  }catch(e){
    ConsoleHelper(e, 'cp_myProducts')
    return {error:'cp_myProducts error', data:undefined, loading:false}
  }

};

