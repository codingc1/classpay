import { gql } from "@apollo/client";

export const CP_USER_BASIC_FRAGMENT = gql`
fragment CPUserBasicParts on CP_User {
    id
    number
    name
    position
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
}
`;

export const CP_PAY_MONEY_FRAGMENT = gql`
fragment CPPayMoneyParts on CP_PayMoney {
    id
    user_id
    pay_id
    money
}
`;

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
    consumer_id
    name
    qty
    price
    sumPrice
}
`;
