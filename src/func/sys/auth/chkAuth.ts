import { cpMeQueryQuery } from "../../../hooks/user/useMe.generated"




export const chkAuth={
    // onlyDeveloper: function
    isAdmin :function(user:cpMeQueryQuery | undefined){
        if(user ){
            if(user.cp_me.id === 1 ){
                return true
            }
        }
        return false
    },
    //어드민 말고 학생이나 일반 선생님 상태에서 테스트용아이디로도 가능
    isTest :function(meData:cpMeQueryQuery | undefined){
        if(!meData)return false
        if(process.env.NODE_ENV === "development" ||
        meData.cp_me.id === 1 )return true //test11 112 113
        return false
      }
}