import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPUserBasicPartsFragmentDoc } from '../../../fragments.generated';
export type cp_PayUserListsQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type cp_PayUserListsQueryQuery = { __typename?: 'Query', cp_PayUserLists: Array<{ __typename?: 'CP_User', id: number, mainId: string, number: number, name: string, position: Types.POSITION, money: number }> };


export const cp_PayUserListsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_PayUserListsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_PayUserLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPUserBasicParts"}}]}}]}},...CPUserBasicPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_PayUserListsQueryQuery, cp_PayUserListsQueryQueryVariables>;