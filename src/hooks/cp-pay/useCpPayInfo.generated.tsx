import * as Types from '../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPPayPartsFragmentDoc } from '../../fragments.generated';
export type cp_PayInfoQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type cp_PayInfoQueryQuery = { __typename?: 'Query', cp_PayInfo: { __typename?: 'CP_PayOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string, moneyUnit: string } | null } };


export const cp_PayInfoQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cp_PayInfoQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_PayInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayParts"}}]}}]}}]}},...CPPayPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_PayInfoQueryQuery, cp_PayInfoQueryQueryVariables>;