import * as Types from '../../../__generated__/gql-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { CPInstitutionBasicPartsFragmentDoc } from '../../../utils/fragment/insti-fragments.generated';
export type my_cp_institutionshMutationMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type my_cp_institutionshMutationMutation = { __typename?: 'Mutation', my_cp_institutions: Array<{ __typename?: 'CP_Institution', id: number, cppay_id: number, insti_name: string, desciption: string, instiPermission: Array<{ __typename?: 'CP_InstiPermission', id: number, permissionName: Types.CP_INSTI_PERMISSION, desciption: string }> }> };


export const my_cp_institutionshMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"my_cp_institutionshMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"my_cp_institutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CPInstitutionBasicParts"}}]}}]}},...CPInstitutionBasicPartsFragmentDoc.definitions]} as unknown as DocumentNode<my_cp_institutionshMutationMutation, my_cp_institutionshMutationMutationVariables>;