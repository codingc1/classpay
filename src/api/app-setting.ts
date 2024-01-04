

export const REFESH_TOKEN__DAY = 6; //컴포넌트 헤더- 토큰리프레쉬
export const EXPIRE_TOKEN_DAY = 1; //14//토큰 유효기간
export const REFESH_TOKEN_TIMER = 1000*60*3; //리프레쉬 시간


// export const BaseHangUrlName = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')?'http://localhost:3000':'https://hangbal.net' 

export const isProduction =() => {
    console.log(process.env.TEST_ENV, 'env.TEST_ENV??')
    console.log(process.env.NODE_ENV, 'env.NODE_ENV??')
    return true; //production
    
    if ( process.env.NODE_ENV === 'development') { //
        return false
    } else {
        return true
    }
}
export const serverAddress =()=>{
    // return 'https://ec2.hangbal.net'
    // return 'http://3.37.198.102:2021';
    if (isProduction()===false) {
        return "http://localhost:2021";
    } else {
        return 'https://ec2.hangbal.net'
    }

}
// export const basicAddress =()=>{
//     if ( process.env.NODE_ENV === 'development') {
//         return "http://localhost:2021";
//     } else {
//         return '3.37.198.102:443'
//     }
// }
export const webSoketAddress =()=>{
    // return 'wss://ec2.hangbal.net/graphql'
    // return 'ws://3.37.198.102:2021/graphql';
    // return 'wss://3.37.198.102:2021/graphql'
    if (isProduction()===false) {
        return "ws://localhost:2021";
    } else {
        return 'wss://ec2.hangbal.net'
    }
    // if ( process.env.NODE_ENV === 'development') {
    //     return  'ws://localhost:2021/graphql'//subscriptions
    //     //'ws://localhost:2021/graphql'
    // } else {
    //     // return 'wss://3.37.198.102:2021/graphql'
    //     return 'wss://ec2.hangbal.net/graphql' //이전까지 잘 사용 subscriptions
    // }
}

