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

