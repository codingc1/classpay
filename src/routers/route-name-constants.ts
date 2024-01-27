export const HOME ="/"
export const LOGIN_ROUTE_NAME ="/login"
export const USER_PDFAUTH_ROUTE_NAME = "/user/pdfauth"
export const USER_PROFILE_ROUTE_NAME = "/user/profile"


export const TERMS_CONDITIONS = "/explanation/terms-conditions";
export const PRIVACY_POLICY_ROUTE_NAME= "/explanation/privacy-policy";
export const AGREE_PRIVACY_ROUTE_NAME="/explanation/agree-privacy";
export const EXPLANATION_HEADER_MENU_ROUTE_NAME="/explanation/howtouse"; //헤더 메뉴 사용방법

export const FIND_USER_ROUTE_NAME="/user/find-user";
export const FIND_USER_ID_ROUTE_NAME="/user/find-user/find-id";
export const FIND_USER_PASSWORD_ROUTE_NAME="/user/find-user/find-password";
export const PASSWORD_CONFIRM_ROUTE_NAME="/confirm";

export const ADMIN_HOME_ROUTE_NAME="/adminpage";
export const ADMIN_POPUP_HOME_ROUTE_NAME ='/adminpage/popup'


export const CLASS_HELPER_HOME_ROUTE_NAME="/class-doumi";
export const CLASS_PAY_SIGNUP_ROUTE_NAME="/classpay/signup";//ClassPaySignUp

export const CP_PAY_CREATE_ROUTE_NAME = '/classpay/create'//학급 만들기
// const CP_PAY_ID = '/:payid'
export const PAY_HOME = '/classpay/app'//payid//학급 만들기
export const CP_PAY_MEMBER_ROUTE_NAME = '/classpay/member'//학급 만들기
export const CP_PAY_CREATE_MEMBER_ROUTE_NAME = '/classpay/member/create'//학생추가
export const CP_PAY_MODIFY_MEMBER_ROUTE_NAME = '/classpay/member/edit'//학생추가

export const CP_PAY_PRODUCTS_HOME_ROUTE_NAME = '/classpay/products'//판매상품
export const CP_PAY_TRADE_HISTORY_ROUTE_NAME = '/classpay/tradehistory'//거래내역
// export const CP_PAY_BILL_HOME_ROUTE_NAME = '/classpay/bill'//거래내역

export const CP_INSTITUTION_HOME_ROUTE_NAME = '/classpay/institution'//거래내역
export const CP_PAY_ROLE_BANK_ROUTE_NAME = '/classpay/role/bank'//은행 -depressed??

//!--Deprecated--!
export const cp_pay_app_route_fn =(num:number):string=>PAY_HOME+'/'+num;
// export const CP_PAY_SETTING_ROUTE_NAME = PAY_HOME+'/:payid'+'/setting';
export const cp_pay_member_route_fn =(num:number|string):string=>PAY_HOME+'/'+num +'/member' 
export const cp_pay_products_route_fn =(num:number|string):string=>PAY_HOME+'/'+num +'/products' //판매상품
export const cp_pay_setting_route_fn =(num:number):string=>PAY_HOME+'/'+num +'/setting'


export const CP_PAY_QRSCAN_ROUTE_NAME = '/classpay/scan'//학급 만들기
// export const CP_PAY_SETTING_ROUTE_NAME = '/classpay/app'+'/:payid' +'setting'//학급 만들기


// export const QR_SCANB_ROUTE_NAME="/qr-scan"; CPMemberHome

