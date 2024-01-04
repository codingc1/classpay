import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPTmpTradePartsFragmentDoc } from '../../../fragments.generated';
export type cp_getBuyTmpTradeMutationMutationVariables = Types.Exact<{
  cp_getTradeTmpCodeInput: Types.CP_GetTradeTmpCodeInput;
}>;


export type cp_getBuyTmpTradeMutationMutation = { __typename?: 'Mutation', cp_getBuyTmpTrade: { __typename?: 'CP_TradeTmpCodeOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_TradeTmpCode', id: number, product_id: number, cppay_id: number, seller_id: number, seller_name: string, name: string, qty: number, price: number, sumPrice: number, code: string } | null } };

export type cp_buyingTradeMutationMutationVariables = Types.Exact<{
  cp_getTradeTmpCodeInput: Types.CP_GetTradeTmpCodeInput;
}>;


export type cp_buyingTradeMutationMutation = { __typename?: 'Mutation', cp_buyingTrade: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const cp_getBuyTmpTradeMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_getBuyTmpTradeMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_getTradeTmpCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_GetTradeTmpCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_getBuyTmpTrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_getTradeTmpCodeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPTmpTradeParts"}}]}}]}}]}},...CPTmpTradePartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_getBuyTmpTradeMutationMutation, cp_getBuyTmpTradeMutationMutationVariables>;
export const cp_buyingTradeMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_buyingTradeMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_getTradeTmpCodeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_GetTradeTmpCodeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_buyingTrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_getTradeTmpCodeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_buyingTradeMutationMutation, cp_buyingTradeMutationMutationVariables>;