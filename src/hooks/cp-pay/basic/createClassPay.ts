import { gql,   } from "@apollo/client";
import { CP_PAY_FRAGMENT } from "../../../fragments";
// import { CP_PAY_FRAGMENT } from "../../../fragments";
// ${CP_PAY_FRAGMENT}


export const CP_CREATE_CLASSPAY_MUTATION = gql`
mutation cp_createClassPayMutation($cp_createClassPayInput: CP_CreateClassPayInput!) {
    cp_CreateClassPay(input: $cp_createClassPayInput) {
    ok
    error
    result{
    ...CPPayParts
    }
  }
}
${CP_PAY_FRAGMENT}
`;


export const CP_DELETE_CLASSPAY_MUTATION = gql`
mutation cp_deleteClassPayMutation($idOnlyInput: IdOnlyInput!) {
  cp_DeleteClassPay(input: $idOnlyInput) {
    ok
    error
  }
}
`;

export const CP_PAYUPDATE_INFO_MUTATION = gql`
mutation cp_payUpdateInfoMutation($cp_payInfoEditInput: CP_PayInfoEditInput!) {
  cp_payUpdateInfo(input: $cp_payInfoEditInput) {
    ok
    error
    result{
      ...CPPayParts
    }
  }
}

`;