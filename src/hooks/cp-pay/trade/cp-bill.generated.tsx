import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CP_BankBookPartsFragmentDoc } from '../../../fragments.generated';
import { CP_BillPartsFragmentDoc } from '../../../fragments.generated';
export type cp_MyBankBooksMonthMutationMutationVariables = Types.Exact<{
  yearMonthInput: Types.YearMonthInput;
}>;


export type cp_MyBankBooksMonthMutationMutation = { __typename?: 'Mutation', cp_MyBankBooksMonth: Array<{ __typename?: 'CP_BankBook', id: number, cppay_id: number, user_id: number, recordtype: Types.RECORD_TYPE, kind: Types.BILL_KIND_TYPE, desciption: string, beforeMoney: number, price: number, resultMoney: number, insti_id: number, broker_id: number, createdAt: any, sender_name: string, receiver_name: string }> };

export type cp_teacherGetStudentBankBookMutationMutationVariables = Types.Exact<{
  teacherGetMonth: Types.TeacherGetMonth;
}>;


export type cp_teacherGetStudentBankBookMutationMutation = { __typename?: 'Mutation', cp_teacherGetStudentBankBook: Array<{ __typename?: 'CP_BankBook', id: number, cppay_id: number, user_id: number, recordtype: Types.RECORD_TYPE, kind: Types.BILL_KIND_TYPE, desciption: string, beforeMoney: number, price: number, resultMoney: number, insti_id: number, broker_id: number, createdAt: any, sender_name: string, receiver_name: string }> };

export type cp_teacherGetBankBookAllMutationMutationVariables = Types.Exact<{
  yearMonthInput: Types.YearMonthInput;
}>;


export type cp_teacherGetBankBookAllMutationMutation = { __typename?: 'Mutation', cp_teacherGetBankBookAll: Array<{ __typename?: 'CP_BankBook', id: number, cppay_id: number, user_id: number, recordtype: Types.RECORD_TYPE, kind: Types.BILL_KIND_TYPE, desciption: string, beforeMoney: number, price: number, resultMoney: number, insti_id: number, broker_id: number, createdAt: any, sender_name: string, receiver_name: string }> };

export type cp_MyBillsMonthMutationMutationVariables = Types.Exact<{
  yearMonthInput: Types.YearMonthInput;
}>;


export type cp_MyBillsMonthMutationMutation = { __typename?: 'Mutation', cp_MyBillsMonth: Array<{ __typename?: 'CP_Bill', id: number, cppay_id: number, seller_id: number, seller_name: string, consumer_id: number, consumer_name: string, kind: Types.BILL_KIND_TYPE, name: string, desciption: string, qty: number, price: number, sumPrice: number, createdAt: any }> };

export type cp_teacherGetMarketTradeAllMutationMutationVariables = Types.Exact<{
  yearMonthInput: Types.YearMonthInput;
}>;


export type cp_teacherGetMarketTradeAllMutationMutation = { __typename?: 'Mutation', cp_teacherGetMarketTradeAll: Array<{ __typename?: 'CP_Bill', id: number, cppay_id: number, seller_id: number, seller_name: string, consumer_id: number, consumer_name: string, kind: Types.BILL_KIND_TYPE, name: string, desciption: string, qty: number, price: number, sumPrice: number, createdAt: any }> };


export const cp_MyBankBooksMonthMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_MyBankBooksMonthMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"YearMonthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_MyBankBooksMonth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BankBookParts"}}]}}]}},...CP_BankBookPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables>;
export const cp_teacherGetStudentBankBookMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_teacherGetStudentBankBookMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teacherGetMonth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeacherGetMonth"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_teacherGetStudentBankBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teacherGetMonth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BankBookParts"}}]}}]}},...CP_BankBookPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_teacherGetStudentBankBookMutationMutation, cp_teacherGetStudentBankBookMutationMutationVariables>;
export const cp_teacherGetBankBookAllMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_teacherGetBankBookAllMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"YearMonthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_teacherGetBankBookAll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BankBookParts"}}]}}]}},...CP_BankBookPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_teacherGetBankBookAllMutationMutation, cp_teacherGetBankBookAllMutationMutationVariables>;
export const cp_MyBillsMonthMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_MyBillsMonthMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"YearMonthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_MyBillsMonth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BillParts"}}]}}]}},...CP_BillPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables>;
export const cp_teacherGetMarketTradeAllMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cp_teacherGetMarketTradeAllMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"YearMonthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cp_teacherGetMarketTradeAll"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonthInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CP_BillParts"}}]}}]}},...CP_BillPartsFragmentDoc.definitions]} as unknown as DocumentNode<cp_teacherGetMarketTradeAllMutationMutation, cp_teacherGetMarketTradeAllMutationMutationVariables>;