import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type cp_studentsPossibleIdsMutationMutationVariables = Types.Exact<{
  checkPossibleIdsInput: Types.CheckPossibleIdsInput;
}>;


export type cp_studentsPossibleIdsMutationMutation = { __typename?: 'Mutation', cp_studentsPossibleIds: { __typename?: 'CP_CheckPossibleIsdOutput', ok: boolean, error: string | null, mainIds: Array<string> } };


export const cp_studentsPossibleIdsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_studentsPossibleIdsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkPossibleIdsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckPossibleIdsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_studentsPossibleIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkPossibleIdsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"mainIds"}}]}}]}}]} as unknown as DocumentNode<cp_studentsPossibleIdsMutationMutation, cp_studentsPossibleIdsMutationMutationVariables>;