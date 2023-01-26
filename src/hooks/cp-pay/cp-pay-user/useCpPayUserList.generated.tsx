import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPUserBasicPartsFragmentDoc } from '../../../fragments.generated';
export type cp_PayUserListsQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type cp_PayUserListsQueryQuery = { __typename?: 'Query', cp_PayUserLists: Array<{ __typename?: 'CP_User', id: number, number: number, name: string, position: Types.POSITION }> };


export const cp_PayUserListsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_PayUserListsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_PayUserLists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPUserBasicParts"}}]}}]}},...CPUserBasicPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_PayUserListsQueryQuery, cp_PayUserListsQueryQueryVariables>;