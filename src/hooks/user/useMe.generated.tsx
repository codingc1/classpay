import * as Types from '../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cpMeQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type cpMeQueryQuery = { __typename?: 'Query', cp_me: { __typename?: 'CP_User', id: number, number: number, name: string, position: Types.POSITION } };


export const cpMeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cpMeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<cpMeQueryQuery, cpMeQueryQueryVariables>;