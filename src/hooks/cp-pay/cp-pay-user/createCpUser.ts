
import { gql, } from "@apollo/client";

//학생 아디 추가
//CPCreateStudents
export const CP_CREATE_USER_MUTATION = gql`
mutation cp_CreateStudentsMutation($createCpStudentsInput: CreateCpStudentsInput!) {
    cp_CreateStudents(input: $createCpStudentsInput) {
    ok
    error
    mainIds
  }
}
`;

export const CP_MODIFY_USER_MUTATION = gql`
mutation cp_modifyStudentMutation($modifyCpStudentsInput: ModifyCpStudentsInput!) {
  cp_modifyStudent(input: $modifyCpStudentsInput) {
    ok
    error
  }
}
`;

