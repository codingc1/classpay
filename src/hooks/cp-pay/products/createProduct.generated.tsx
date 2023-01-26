import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_createProductMutationMutationVariables = Types.Exact<{
  cp_createProductIdInput: Types.CP_CreateProductIdInput;
}>;


export type cp_createProductMutationMutation = { __typename?: 'Mutation', cp_createProduct: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_cp_deleteProductMutationMutationVariables = Types.Exact<{
  cp_payIdAndIDInput: Types.CP_PayIdAndIDInput;
}>;


export type cp_cp_deleteProductMutationMutation = { __typename?: 'Mutation', cp_deleteProduct: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_createProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_createProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_createProductIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_CreateProductIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_createProductIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_createProductMutationMutation, cp_createProductMutationMutationVariables>;
export const cp_cp_deleteProductMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_cp_deleteProductMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_payIdAndIDInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_PayIdAndIDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_payIdAndIDInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_cp_deleteProductMutationMutation, cp_cp_deleteProductMutationMutationVariables>;