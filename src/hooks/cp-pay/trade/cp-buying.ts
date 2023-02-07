import { gql,} from "@apollo/client";
import { CP_TMPTRADE_FRAGMENT } from "../../../fragments";
// import { client } from "../../../apollo";
// import { ConsoleHelper } from "../../../func/sys/consoleHelper";

export const CP_GETBUY_TMPTRADE_MUTATION = gql`
mutation cp_getBuyTmpTradeMutation($cp_getTradeTmpCodeInput: CP_GetTradeTmpCodeInput!) {
    cp_getBuyTmpTrade(input: $cp_getTradeTmpCodeInput) {
    ok
    error
    result{
      ...CPTmpTradeParts
    }
  }
}
${CP_TMPTRADE_FRAGMENT}
`;


export const CP_BUYING_TRADE_MUTATION = gql`
mutation cp_buyingTradeMutation($cp_getTradeTmpCodeInput: CP_GetTradeTmpCodeInput!) {
  cp_buyingTrade(input: $cp_getTradeTmpCodeInput) {
    ok
    error
  }
}
`;

