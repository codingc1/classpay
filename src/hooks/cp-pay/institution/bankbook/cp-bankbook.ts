import { gql,} from "@apollo/client";
import { CP_BANKBOOK_FRAGMENT,  } from "../../../../fragments";


export const CP_INDIVIDUAL_SENDMONEY_MUTATION = gql`
mutation individual_sendMoneyMutation($cp_sendMoneyIndivisualInput:CP_SendMoneyIndivisualInput!) {
  individual_sendMoney(input: $cp_sendMoneyIndivisualInput) {
    ok
    error
  }
}
`;
export const CP_INSTI_SENDMONEY_ONE_MUTATION = gql`
mutation cp_insti_sendMoneyMutation($cp_instiAcitveSendMoneyInput:CP_InstiAcitveSendMoneyInput!) {
  cp_insti_sendMoney(input: $cp_instiAcitveSendMoneyInput) {
    ok
    error
  }
}
`;


export const CP_INSTI_SENDMONEY_ONETOMANY_MUTATION = gql`
mutation cp_insti_sendMoney_oneToManyMutation($cp_instiBankServeralSendMoneyOneToManyInput:CP_InstiBankServeralSendMoneyOneToManyInput!) {
  cp_insti_sendMoney_oneToMany(input: $cp_instiBankServeralSendMoneyOneToManyInput) {
    ok
    error
  }
}
`;


