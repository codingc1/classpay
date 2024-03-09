import * as Types from '../../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_checkExistIdMutationMutationVariables = Types.Exact<{
  checkPossibleIdInput: Types.CheckPossibleIdInput;
}>;


export type cp_checkExistIdMutationMutation = { __typename?: 'Mutation', cp_checkExistId: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_CreateTeacherMutationMutationVariables = Types.Exact<{
  createCpTeacherInput: Types.CreateCpTeacherInput;
}>;


export type cp_CreateTeacherMutationMutation = { __typename?: 'Mutation', cp_CreateTeacher: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_checkExistIdMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_checkExistIdMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkPossibleIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckPossibleIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_checkExistId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkPossibleIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_checkExistIdMutationMutation, cp_checkExistIdMutationMutationVariables>;
export const cp_CreateTeacherMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_CreateTeacherMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCpTeacherInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCpTeacherInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_CreateTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCpTeacherInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_CreateTeacherMutationMutation, cp_CreateTeacherMutationMutationVariables>;