import { gql, } from "@apollo/client";


export const CP_INSTI_ISSUEMONEY_MUTATION = gql`
mutation cp_insti_issueMoneytMutation($cp_instiAcitveTeacherIssueMoneyInput: CP_InstiAcitveTeacherIssueMoneyInput!) {
    cp_insti_issueMoney(input: $cp_instiAcitveTeacherIssueMoneyInput) {
    ok
    error
  }
}
`;

export const CP_INSTI_DELETEMONEY_MUTATION = gql`
mutation cp_insti_deleteMoneytMutation($cp_instiAcitveTeacherIssueMoneyInput: CP_InstiAcitveTeacherIssueMoneyInput!) {
    cp_insti_deleteMoney(input: $cp_instiAcitveTeacherIssueMoneyInput) {
    ok
    error
  }
}
`;

export const CP_GET_MONEY_SUPPLY_MUTATION = gql`
mutation cp_cp_getMoneySupplytMutation {
  cp_cp_getMoneySupply {
    ok
    error
    money
  }
}
`;

