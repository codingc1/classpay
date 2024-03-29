import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_createProductMutationMutationVariables = Types.Exact<{
  cp_createProductIdInput: Types.CP_CreateProductIdInput;
}>;


export type cp_createProductMutationMutation = { __typename?: 'Mutation', cp_createProduct: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_cp_deleteProductMutationMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type cp_cp_deleteProductMutationMutation = { __typename?: 'Mutation', cp_deleteProduct: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_updateProductMutationMutationVariables = Types.Exact<{
  cp_updateProductIdInput: Types.CP_UpdateProductIdInput;
}>;


export type cp_updateProductMutationMutation = { __typename?: 'Mutation', cp_updateProduct: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_createProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_createProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_createProductIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_CreateProductIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_createProductIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_createProductMutationMutation, cp_createProductMutationMutationVariables>;
export const cp_cp_deleteProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_cp_deleteProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_cp_deleteProductMutationMutation, cp_cp_deleteProductMutationMutationVariables>;
export const cp_updateProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_updateProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_updateProductIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_UpdateProductIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_updateProductIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_updateProductMutationMutation, cp_updateProductMutationMutationVariables>;