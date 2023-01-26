import { gql, } from "@apollo/client";





export const CP_CREATE_PRODUCT_MUTATION = gql`
mutation cp_createProductMutation($cp_createProductIdInput: CP_CreateProductIdInput!) {
    cp_createProduct(input: $cp_createProductIdInput) {
    ok
    error
  }
}
`;

export const CP_DELETE_PRODUCT_MUTATION = gql`
mutation cp_cp_deleteProductMutation($cp_payIdAndIDInput: CP_PayIdAndIDInput!) {
    cp_deleteProduct(input: $cp_payIdAndIDInput) {
    ok
    error
  }
}
`;