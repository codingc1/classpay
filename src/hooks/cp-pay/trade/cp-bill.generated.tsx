import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CP_BillPartsFragmentDoc } from '../../../fragments.generated';
export type cp_MyBillsMonthMutationMutationVariables = Types.Exact<{
  yearMonthInput: Types.YearMonthInput;
}>;


export type cp_MyBillsMonthMutationMutation = { __typename?: 'Mutation', cp_MyBillsMonth: Array<{ __typename?: 'CP_Bill', id: number, cppay_id: number, seller_id: number, seller_name: string, consumer_id: number, consumer_name: string, name: string, desciption: string, qty: number, price: number, sumPrice: number, createdAt: any }> };


export const cp_MyBillsMonthMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_MyBillsMonthMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"YearMonthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_MyBillsMonth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BillParts"}}]}}]}},...CP_BillPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables>;