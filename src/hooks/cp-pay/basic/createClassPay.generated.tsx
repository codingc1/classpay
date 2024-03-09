import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPPayPartsFragmentDoc } from '../../../fragments.generated';
export type cp_createClassPayMutationMutationVariables = Types.Exact<{
  cp_createClassPayInput: Types.CP_CreateClassPayInput;
}>;


export type cp_createClassPayMutationMutation = { __typename?: 'Mutation', cp_CreateClassPay: { __typename?: 'CP_PayOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string, moneyUnit: string, numberOfDigits: number, isTrade: boolean } | null } };

export type cp_deleteClassPayMutationMutationVariables = Types.Exact<{
  idOnlyInput: Types.IdOnlyInput;
}>;


export type cp_deleteClassPayMutationMutation = { __typename?: 'Mutation', cp_DeleteClassPay: { __typename?: 'CoreOutput', ok: boolean, error: string | null } };

export type cp_payUpdateInfoMutationMutationVariables = Types.Exact<{
  cp_payInfoEditInput: Types.CP_PayInfoEditInput;
}>;


export type cp_payUpdateInfoMutationMutation = { __typename?: 'Mutation', cp_payUpdateInfo: { __typename?: 'CP_PayOutput', ok: boolean, error: string | null, result: { __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string, moneyUnit: string, numberOfDigits: number, isTrade: boolean } | null } };


export const cp_createClassPayMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_createClassPayMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_createClassPayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_CreateClassPayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_CreateClassPay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_createClassPayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayParts"}}]}}]}}]}},...CPPayPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_createClassPayMutationMutation, cp_createClassPayMutationMutationVariables>;
export const cp_deleteClassPayMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_deleteClassPayMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idOnlyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdOnlyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_DeleteClassPay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idOnlyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<cp_deleteClassPayMutationMutation, cp_deleteClassPayMutationMutationVariables>;
export const cp_payUpdateInfoMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_payUpdateInfoMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cp_payInfoEditInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CP_PayInfoEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_payUpdateInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cp_payInfoEditInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPPayParts"}}]}}]}}]}},...CPPayPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_payUpdateInfoMutationMutation, cp_payUpdateInfoMutationMutationVariables>;