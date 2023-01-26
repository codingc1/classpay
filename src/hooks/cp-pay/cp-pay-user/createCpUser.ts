
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

export const CP_WITHRAW_USER_MUTATION = gql`
mutation cp_withdrawUserPayMutation($cpWithdrawUserPayInput: CpWithdrawUserPayInput!) {
  cp_withdrawUserPay(input: $cpWithdrawUserPayInput) {
    ok
    error
  }
}
`;
