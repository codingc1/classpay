import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPUserBasicPartsFragmentDoc } from '../../../fragments.generated';
export type cp_PayUserListsMutationMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type cp_PayUserListsMutationMutation = { __typename?: 'Mutation', cp_PayUserListsMu: Array<{ __typename?: 'CP_User', id: number, mainId: string, number: number, name: string, position: Types.POSITION, money: number }> };


export const cp_PayUserListsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_PayUserListsMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_PayUserListsMu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPUserBasicParts"}}]}}]}},...CPUserBasicPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_PayUserListsMutationMutation, cp_PayUserListsMutationMutationVariables>;