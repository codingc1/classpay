import * as Types from './__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type CPUserBasicPartsFragment = { __typename?: 'CP_User', id: number, number: number, name: string, position: Types.POSITION };

export type CPPayPartsFragment = { __typename?: 'CP_Pay', id: number, user_id: number, className: string, schoolName: string, classTh: number, classNum: number, code: string, imgurl: string };

export type CPPayMoneyPartsFragment = { __typename?: 'CP_PayMoney', id: number, user_id: number, pay_id: number, money: number };

export type CPProductPartsFragment = { __typename?: 'CP_Product', id: number, cppay_id: number, seller_id: number, name: string, desciption: string, qty: number, price: number, imgurl: string, createdAt: any };

export type CPTmpTradePartsFragment = { __typename?: 'CP_TradeTmpCode', id: number, product_id: number, cppay_id: number, seller_id: number, consumer_id: number, name: string, qty: number, price: number, sumPrice: number, code: string };

export const CPUserBasicPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CPUserBasicParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CP_User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]} as unknown as DocumentNode<CPUserBasicPartsFragment, unknown>;
export const CPPayPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CPPayParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CP_Pay"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"schoolName"}},{"kind":"Field","name":{"kind":"Name","value":"classTh"}},{"kind":"Field","name":{"kind":"Name","value":"classNum"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"imgurl"}}]}}]} as unknown as DocumentNode<CPPayPartsFragment, unknown>;
export const CPPayMoneyPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CPPayMoneyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CP_PayMoney"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"pay_id"}},{"kind":"Field","name":{"kind":"Name","value":"money"}}]}}]} as unknown as DocumentNode<CPPayMoneyPartsFragment, unknown>;
export const CPProductPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CPProductParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CP_Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cppay_id"}},{"kind":"Field","name":{"kind":"Name","value":"seller_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"desciption"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imgurl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CPProductPartsFragment, unknown>;
export const CPTmpTradePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CPTmpTradeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CP_TradeTmpCode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"cppay_id"}},{"kind":"Field","name":{"kind":"Name","value":"seller_id"}},{"kind":"Field","name":{"kind":"Name","value":"consumer_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sumPrice"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]} as unknown as DocumentNode<CPTmpTradePartsFragment, unknown>;