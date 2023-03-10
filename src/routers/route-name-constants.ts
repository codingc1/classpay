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
export const CP_PAY_APP_ROUTE_NAME = '/classpay/app'//payid//학급 만들기
export const cp_pay_app_route_fn =(num:number):string=>CP_PAY_APP_ROUTE_NAME+'/'+num;
// export const CP_PAY_SETTING_ROUTE_NAME = CP_PAY_APP_ROUTE_NAME+'/:payid'+'/setting';
export const cp_pay_member_route_fn =(num:number|string):string=>CP_PAY_APP_ROUTE_NAME+'/'+num +'/member' 
export const cp_pay_products_route_fn =(num:number|string):string=>CP_PAY_APP_ROUTE_NAME+'/'+num +'/products' //판매상품
export const cp_pay_setting_route_fn =(num:number):string=>CP_PAY_APP_ROUTE_NAME+'/'+num +'/setting'


export const CP_PAY_QRSCAN_ROUTE_NAME = '/classpay/scan'//학급 만들기
// export const CP_PAY_SETTING_ROUTE_NAME = '/classpay/app'+'/:payid' +'setting'//학급 만들기


// export const QR_SCANB_ROUTE_NAME="/qr-scan"; CPMemberHome

