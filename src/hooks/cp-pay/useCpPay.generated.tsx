import * as Types from '../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPPayPartsFragmentDoc, CPPayMoneyPartsFragmentDoc } from '../../fragments.generated';
export type cp_paysQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type cp_paysQueryQuery = { __typename?: 'Query', cp_pays: Array<{ __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string }> };


export const cp_paysQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_paysQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_pays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayParts"}}]}}]}},...CPPayPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_paysQueryQuery, cp_paysQueryQueryVariables>;