import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPProductPartsFragmentDoc } from '../../../fragments.generated';
export type cp_myProductsQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type cp_myProductsQueryQuery = { __typename?: 'Query', cp_myProducts: Array<{ __typename?: 'CP_Product', id: number, cppay_id: number, seller_id: number, name: string, desciption: string, qty: number, price: number, imgurl: string, createdAt: any }> };


export const cp_myProductsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_myProductsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_myProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPProductParts"}}]}}]}},...CPProductPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_myProductsQueryQuery, cp_myProductsQueryQueryVariables>;