import { gql,} from "@apollo/client";
import { CP_BANKBOOK_FRAGMENT, CP_BILL_FRAGMENT } from "../../../fragments";


export const CP_MYBILLS_MONTH_MUTATION = gql`
mutation cp_MyBillsMonthMutation($yearMonthInput:YearMonthInput!) {
    cp_MyBillsMonth(input: $yearMonthInput) {
        ...CP_BillParts
  }
}
${CP_BILL_FRAGMENT}
`;

export const CP_BANKBOOKS_MONTH_MUTATION = gql`
mutation cp_MyBankBooksMonthMutation($yearMonthInput:YearMonthInput!) {
  cp_MyBankBooksMonth(input: $yearMonthInput) {
        ...CP_BankBookParts
  }
}
${CP_BANKBOOK_FRAGMENT}
`;

