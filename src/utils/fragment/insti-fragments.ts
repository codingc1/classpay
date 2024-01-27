import { gql } from "@apollo/client";

export const CP_INSTITUTION_FRAGMENT = gql`
fragment CPInstitutionBasicParts on CP_Institution {
    id
    cppay_id
    insti_name
    desciption
    th
    instiPermission{
        id
        permissionName
        desciption
        th
    }
}
`;

