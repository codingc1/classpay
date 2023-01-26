
import { gql, useMutation, useSubscription, } from "@apollo/client";
import { client } from "../../../apollo";
import { CP_TMPTRADE_FRAGMENT } from "../../../fragments";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import { cp_sellingStopMutationDocument, cp_sellingStopMutationMutation, pendingSellingSubscriptionSubscription,pendingSellingSubscriptionSubscriptionVariables} from "./selling.generated";

//product-sell
export const CP_SELLING_START_MUTATION = gql`
mutation cp_sellingStartMutation($cp_buyProductIdInput: CP_BuyProductIdInput!) {
  cp_sellingStart(input: $cp_buyProductIdInput) {
    ok
    error
    result{
      ...CPTmpTradeParts
    }
  }
}
${CP_TMPTRADE_FRAGMENT}
`;
//학생 아디 추가
//CPCreateStudents
export const CP_SELLING_PENDING_SUBSCRIPTION = gql`
subscription pendingSellingSubscription($tradetmpcode_id:Int!){
    pendingSelling(tradetmpcode_id:$tradetmpcode_id){
        ok
        error
        result{
          id
          name
          qty
          price
          sumPrice
          imgurl
        }
    }
}
`

export const useSellingSubscribe = ({id}:{id:number}) => {
    
    try{
    const aa = useSubscription<pendingSellingSubscriptionSubscription,pendingSellingSubscriptionSubscriptionVariables>(CP_SELLING_PENDING_SUBSCRIPTION, {
        variables: { tradetmpcode_id:Number(id) }, //id===0?null:id
        skip: !id||id ===0, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
      });
    return aa
    }catch(e){
      ConsoleHelper(e, 'useSubscription')
      return {error:'useSubscription error', data:undefined, loading:false}
    }
  
  };

export const CP_SELLING_STOP_MUTATION = gql`
mutation cp_sellingStopMutation($idOnlyInput: IdOnlyInput!) {
  cp_sellingStop(input: $idOnlyInput) {
    ok
    error
  }
}
`;  
export const cpStopSelleing=({id}:{id:number}) => {
  client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
    mutation:cp_sellingStopMutationDocument,
    variables:{
      idOnlyInput:{id}
    }
  })
  .catch((e)=>ConsoleHelper(e, 'cpStopSelleing'))
//   const [cp_sellingStopMutation, { loading,  }] = useMutation<cp_sellingStopMutationMutation, cp_createProductMutationMutationVariables>(CP_SELLING_STOP_MUTATION, {
//      onError: (err) => {
    
//  } });


}