import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPTmpTradePartsFragmentDoc } from '../../../fragments.generated';
export type cp_getBuyTmpTradeMutationMutationVariables = Types.Exact<{
  cp_payIdAndIDInput: Types.CP_PayIdAndIDInput;
}>;


export type cp_getBuyTmpTradeMutationMutation = { __typename?: 'Mutation', cp_getBuyTmpTrade: { __typename?: 'CP_TradeTmpCodeOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_TradeTmpCode', id: number, product_id: number, cppay_id: number, seller_id: number, consumer_id: number, name: string, qty: number, price: number, sumPrice: number } | null } };


export const cp_getBuyTmpTradeMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_getBuyTmpTradeMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_payIdAndIDInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_PayIdAndIDInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_getBuyTmpTrade"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_payIdAndIDInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPTmpTradeParts"}}]}}]}}]}},...CPTmpTradePartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_getBuyTmpTradeMutationMutation, cp_getBuyTmpTradeMutationMutationVariables>;