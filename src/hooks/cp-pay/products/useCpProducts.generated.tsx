import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPProductPartsFragmentDoc } from '../../../fragments.generated';
export type cp_myProductsQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type cp_myProductsQueryQuery = { __typename?: 'Query', cp_myProducts: Array<{ __typename?: 'CP_Product', id: number, cppay_id: number, seller_id: number, name: string, desciption: string, qty: number, price: number, imgurl: string, createdAt: any }> };


export const cp_myProductsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_myProductsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_myProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPProductParts"}}]}}]}},...CPProductPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_myProductsQueryQuery, cp_myProductsQueryQueryVariables>;