import { gql } from "@apollo/client";

export const CP_USER_BASIC_FRAGMENT = gql`
fragment CPUserBasicParts on CP_User {
    id
    mainId
    number
    name
    position
    money
}
`;

export const CP_PAY_FRAGMENT = gql`
fragment CPPayParts on CP_Pay {
    id
    user_id
    className
    schoolName
    classTh
    classNum
    code
    imgurl
    moneyUnit
}
`;

// export const CP_PAY_MONEY_FRAGMENT = gql`
// fragment CPPayMoneyParts on CP_PayMoney {
//     id
//     user_id
//     pay_id
//     money
// }
// `;

export const CP_PRODUCT_FRAGMENT = gql`
fragment CPProductParts on CP_Product {
    id
    cppay_id
    seller_id
    name
    desciption
    qty
    price
    imgurl
    createdAt

}
`;

export const CP_TMPTRADE_FRAGMENT = gql`
fragment CPTmpTradeParts on CP_TradeTmpCode {
    id
    product_id
    cppay_id
    seller_id
    seller_name
    name
    qty
    price
    sumPrice
    code
}
`;

export const CP_BILL_FRAGMENT = gql`
fragment CP_BillParts on CP_Bill {
    id
    cppay_id
    seller_id
    seller_name
    consumer_id
    consumer_name
    kind
    name
    desciption
    qty
    price
    sumPrice
    createdAt
}
`;


export const CP_BANKBOOK_FRAGMENT = gql`
fragment CP_BankBookParts on CP_BankBook {
    id
    cppay_id
    user_id
    recordtype
    kind
    desciption
    beforeMoney
    price
    resultMoney
    insti_id
    broker_id
    createdAt
    sender_name
    receiver_name
}
`;


