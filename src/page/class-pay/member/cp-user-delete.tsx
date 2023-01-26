import { client } from "../../../apollo";
import useError from "../../../func/sys/err/useErr";
import {  useParams } from "react-router-dom";
import { cp_withdrawUserPayMutationDocument } from "../../../hooks/cp-pay/cp-pay-user/createCpUser.generated";
import { CP_User } from "../../../__generated__/gql-types";
import { CP_PAY_USERLIST_QUERY } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";




//학생 삭제 버튼 - 회원탈퇴시키기
export const CP_UserDeleteBtn=({user}:{user: Pick<CP_User,"id"|"name">})=>{
    const {payid} = useParams();

    const [handleError] = useError()
    const submit=()=>{
        //각각체크
        const isConfirm = window.confirm(user.name+' 를 탈퇴시키겠습니까? ')
        if(!isConfirm)return

        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_withdrawUserPayMutationDocument,
            variables:{
                cpWithdrawUserPayInput:{payid:Number(payid), studentids:[user.id]}
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_withdrawUserPay.ok ){
              alert('탈퇴되었습니다.')
              await client.refetchQueries({
                include: [CP_PAY_USERLIST_QUERY],
              });
            }else if(data?.cp_withdrawUserPay.error){
              alert(data.cp_withdrawUserPay.error)
            }
          })
          .catch(e => handleError(e, '회원탈퇴'))

    }
    
    return(
        <div className="text-xs text-red-300 text-center cursor-pointer" onClick={submit}>탈퇴</div>
    )
}