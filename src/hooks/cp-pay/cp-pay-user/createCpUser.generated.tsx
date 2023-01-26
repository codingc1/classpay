import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_CreateStudentsMutationMutationVariables = Types.Exact<{
  createCpStudentsInput: Types.CreateCpStudentsInput;
}>;


export type cp_CreateStudentsMutationMutation = { __typename?: 'Mutation', cp_CreateStudents: { __typename?: 'CP_CheckPossibleIsdOutput', ok: boolean, error: string | null, mainIds: Array<string> } };

export type cp_withdrawUserPayMutationMutationVariables = Types.Exact<{
  cpWithdrawUserPayInput: Types.CpWithdrawUserPayInput;
}>;


export type cp_withdrawUserPayMutationMutation = { __typename?: 'Mutation', cp_withdrawUserPay: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_CreateStudentsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_CreateStudentsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCpStudentsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCpStudentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_CreateStudents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCpStudentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"mainIds"}}]}}]}}]} as unknown as DocumentNode<cp_CreateStudentsMutationMutation, cp_CreateStudentsMutationMutationVariables>;
export const cp_withdrawUserPayMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_withdrawUserPayMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cpWithdrawUserPayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CpWithdrawUserPayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_withdrawUserPay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cpWithdrawUserPayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_withdrawUserPayMutationMutation, cp_withdrawUserPayMutationMutationVariables>;