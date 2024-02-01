import * as Types from '../../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type individual_sendMoneyMutationMutationVariables = Types.Exact<{
  cp_sendMoneyIndivisualInput: Types.CP_SendMoneyIndivisualInput;
}>;


export type individual_sendMoneyMutationMutation = { __typename?: 'Mutation', individual_sendMoney: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_insti_sendMoney_oneToManyMutationMutationVariables = Types.Exact<{
  cp_instiBankServeralSendMoneyOneToManyInput: Types.CP_InstiBankServeralSendMoneyOneToManyInput;
}>;


export type cp_insti_sendMoney_oneToManyMutationMutation = { __typename?: 'Mutation', cp_insti_sendMoney_oneToMany: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const individual_sendMoneyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"individual_sendMoneyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_sendMoneyIndivisualInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_SendMoneyIndivisualInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"individual_sendMoney"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_sendMoneyIndivisualInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<individual_sendMoneyMutationMutation, individual_sendMoneyMutationMutationVariables>;
export const cp_insti_sendMoney_oneToManyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_insti_sendMoney_oneToManyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiBankServeralSendMoneyOneToManyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_InstiBankServeralSendMoneyOneToManyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_insti_sendMoney_oneToMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_instiBankServeralSendMoneyOneToManyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_insti_sendMoney_oneToManyMutationMutation, cp_insti_sendMoney_oneToManyMutationMutationVariables>;