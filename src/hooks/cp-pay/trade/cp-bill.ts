import { gql,} from "@apollo/client";
import { CP_BANKBOOK_FRAGMENT, CP_BILL_FRAGMENT } from "../../../fragments";


//학생 한명 월별 통장 조회
export const CP_BANKBOOKS_MONTH_MUTATION = gql`
mutation cp_MyBankBooksMonthMutation($yearMonthInput:YearMonthInput!) {
  cp_MyBankBooksMonth(input: $yearMonthInput) {
        ...CP_BankBookParts
  }
}
${CP_BANKBOOK_FRAGMENT}
`;


//교사의 학생 한명 통장 조회 - 아직 안쓰임
export const CP_TEACHER_GETSTUDENTS_BANKBOOKS_MONTH_MUTATION = gql`
mutation cp_teacherGetStudentBankBookMutation($teacherGetMonth:TeacherGetMonth!) {
  cp_teacherGetStudentBankBook(input: $teacherGetMonth) {
        ...CP_BankBookParts
  }
}
${CP_BANKBOOK_FRAGMENT}
`;

//교사 학생 전체 통장 조회 
export const CP_TEACHER_GETSTUDENTS_ALL_BANKBOOKS_MONTH_MUTATION = gql`
mutation cp_teacherGetBankBookAllMutation($yearMonthInput:YearMonthInput!) {
  cp_teacherGetBankBookAll(input: $yearMonthInput) {
        ...CP_BankBookParts
  }
}
${CP_BANKBOOK_FRAGMENT}
`;


export const CP_MYBILLS_MONTH_MUTATION = gql`
mutation cp_MyBillsMonthMutation($yearMonthInput:YearMonthInput!) {
    cp_MyBillsMonth(input: $yearMonthInput) {
        ...CP_BillParts
  }
}
${CP_BILL_FRAGMENT}
`;

export const CP_TEACHER_GETSTUDENTS_ALL_BILLS_MONTH_MUTATION = gql`
mutation cp_teacherGetMarketTradeAllMutation($yearMonthInput:YearMonthInput!) {
  cp_teacherGetMarketTradeAll(input: $yearMonthInput) {
        ...CP_BillParts
  }
}
${CP_BILL_FRAGMENT}
`;