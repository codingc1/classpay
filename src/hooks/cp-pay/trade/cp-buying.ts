import { gql,} from "@apollo/client";
import { CP_TMPTRADE_FRAGMENT } from "../../../fragments";
// import { client } from "../../../apollo";
// import { ConsoleHelper } from "../../../func/sys/consoleHelper";

export const CP_GETBUY_TMPTRADE_MUTATION = gql`
mutation cp_getBuyTmpTradeMutation($cp_payIdAndIDInput: CP_PayIdAndIDInput!) {
    cp_getBuyTmpTrade(input: $cp_payIdAndIDInput) {
    ok
    error
    result{
      ...CPTmpTradeParts
    }
  }
}
${CP_TMPTRADE_FRAGMENT}
`;

