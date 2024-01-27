import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_insti_issueMoneytMutationMutationVariables = Types.Exact<{
  cp_instiAcitveTeacherIssueMoneyInput: Types.CP_InstiAcitveTeacherIssueMoneyInput;
}>;


export type cp_insti_issueMoneytMutationMutation = { __typename?: 'Mutation', cp_insti_issueMoney: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_insti_deleteMoneytMutationMutationVariables = Types.Exact<{
  cp_instiAcitveTeacherIssueMoneyInput: Types.CP_InstiAcitveTeacherIssueMoneyInput;
}>;


export type cp_insti_deleteMoneytMutationMutation = { __typename?: 'Mutation', cp_insti_deleteMoney: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_cp_getMoneySupplytMutationMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type cp_cp_getMoneySupplytMutationMutation = { __typename?: 'Mutation', cp_cp_getMoneySupply: { __typename?: 'CP_MoneyOutput', ok: boolean, error: string | null, money: number } };


export const cp_insti_issueMoneytMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_insti_issueMoneytMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiAcitveTeacherIssueMoneyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_InstiAcitveTeacherIssueMoneyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_insti_issueMoney"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiAcitveTeacherIssueMoneyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_insti_issueMoneytMutationMutation, cp_insti_issueMoneytMutationMutationVariables>;
export const cp_insti_deleteMoneytMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_insti_deleteMoneytMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiAcitveTeacherIssueMoneyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_InstiAcitveTeacherIssueMoneyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_insti_deleteMoney"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiAcitveTeacherIssueMoneyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_insti_deleteMoneytMutationMutation, cp_insti_deleteMoneytMutationMutationVariables>;
export const cp_cp_getMoneySupplytMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_cp_getMoneySupplytMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_cp_getMoneySupply"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"money"}}]}}]}}]} as unknown as DocumentNode<cp_cp_getMoneySupplytMutationMutation, cp_cp_getMoneySupplytMutationMutationVariables>;