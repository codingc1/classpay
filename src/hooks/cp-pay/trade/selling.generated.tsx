import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPTmpTradePartsFragmentDoc } from '../../../fragments.generated';
export type cp_sellingStartMutationMutationVariables = Types.Exact<{
  cp_buyProductIdInput: Types.CP_BuyProductIdInput;
}>;


export type cp_sellingStartMutationMutation = { __typename?: 'Mutation', cp_sellingStart: { __typename?: 'CP_TradeTmpCodeOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_TradeTmpCode', id: number, product_id: number, cppay_id: number, seller_id: number, consumer_id: number, name: string, qty: number, price: number, sumPrice: number, code: string } | null } };

export type pendingSellingSubscriptionSubscriptionVariables = Types.Exact<{
  tradetmpcode_id: Types.Scalars['Int'];
}>;


export type pendingSellingSubscriptionSubscription = { __typename?: 'Subscription', pendingSelling: { __typename?: 'CP_BillOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_Bill', id: number, name: string, qty: number, price: number, sumPrice: number, imgurl: string } | null } };


export const cp_sellingStartMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_sellingStartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_buyProductIdInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_BuyProductIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_sellingStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_buyProductIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPTmpTradeParts"}}]}}]}}]}},...CPTmpTradePartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_sellingStartMutationMutation, cp_sellingStartMutationMutationVariables>;
export const pendingSellingSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"pendingSellingSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tradetmpcode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pendingSelling"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tradetmpcode_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tradetmpcode_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sumPrice"}},{"kind":"Field","name":{"kind":"Name","value":"imgurl"}}]}}]}}]}}]} as unknown as DocumentNode<pendingSellingSubscriptionSubscription, pendingSellingSubscriptionSubscriptionVariables>;