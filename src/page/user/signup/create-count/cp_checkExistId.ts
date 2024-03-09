import gql from "graphql-tag";




export const CP_CHECK_EXISTID_MUTATION = gql`
  mutation cp_checkExistIdMutation($checkPossibleIdInput: CheckPossibleIdInput!) {
    cp_checkExistId(input: $checkPossibleIdInput) {
      ok
      error
    }
  }
`;

export const CP_CREATE_TEACHER_MUTATION = gql`
  mutation cp_CreateTeacherMutation($createCpTeacherInput: CreateCpTeacherInput!) {
    cp_CreateTeacher(input: $createCpTeacherInput) {
      ok
      error
    }
  }
`;