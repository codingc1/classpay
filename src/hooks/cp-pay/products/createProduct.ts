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
mutation cp_cp_deleteProductMutation($id:Int!) {
    cp_deleteProduct(id:$id) {
    ok
    error
  }
}
`;

export const CP_UPDATE_PRODUCT_MUTATION = gql`
mutation cp_updateProductMutation($cp_updateProductIdInput: CP_UpdateProductIdInput!) {
  cp_updateProduct(input: $cp_updateProductIdInput) {
    ok
    error
  }
}
`;