import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type testSubsubSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type testSubsubSubscription = { __typename?: 'Subscription', testSub: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type testSubPushMutationMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type testSubPushMutationMutation = { __typename?: 'Mutation', testSubPush: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };


export const testSubsubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"testSubsub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testSub"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<testSubsubSubscription, testSubsubSubscriptionVariables>;
export const testSubPushMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"testSubPushMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testSubPush"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<testSubPushMutationMutation, testSubPushMutationMutationVariables>;