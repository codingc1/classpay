import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_createClassPayMutationMutationVariables = Types.Exact<{
  cp_createClassPayInput: Types.CP_CreateClassPayInput;
}>;


export type cp_createClassPayMutationMutation = { __typename?: 'Mutation', cp_CreateClassPay: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_deleteClassPayMutationMutationVariables = Types.Exact<{
  idOnlyInput: Types.IdOnlyInput;
}>;


export type cp_deleteClassPayMutationMutation = { __typename?: 'Mutation', cp_DeleteClassPay: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_createClassPayMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_createClassPayMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_createClassPayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_CreateClassPayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_CreateClassPay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_createClassPayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_createClassPayMutationMutation, cp_createClassPayMutationMutationVariables>;
export const cp_deleteClassPayMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_deleteClassPayMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idOnlyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdOnlyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_DeleteClassPay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idOnlyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_deleteClassPayMutationMutation, cp_deleteClassPayMutationMutationVariables>;