import * as Types from '../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPPayPartsFragmentDoc, CPPayMoneyPartsFragmentDoc } from '../../fragments.generated';
export type cp_PayInfoAppQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type cp_PayInfoAppQueryQuery = { __typename?: 'Query', cp_PayInfoApp: { __typename?: 'CP_PayAppOutput', ok: boolean, error: string | null, result: { __typename?: 'CPPayAppOutputObj', cppay: { __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string }, paymoney: { __typename?: 'CP_PayMoney', id: number, user_id: number, pay_id: number, money: number } } | null } };


export const cp_PayInfoAppQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_PayInfoAppQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_PayInfoApp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cppay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymoney"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayMoneyParts"}}]}}]}}]}}]}},...CPPayPartsFragmentDoc.definitions,...CPPayMoneyPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_PayInfoAppQueryQuery, cp_PayInfoAppQueryQueryVariables>;