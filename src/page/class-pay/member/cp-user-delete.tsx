import { client } from "../../../apollo";
import useError from "../../../func/sys/err/useErr";
import {  useNavigate,  } from "react-router-dom";
import { CP_User } from "../../../__generated__/gql-types";
import { CP_PAY_USERLIST_QUERY } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { gql,  } from "@apollo/client";
import { cp_deleteStudentMutationDocument } from "./cp-user-delete.generated";
import { CP_PAY_HOME_ROUTE_NAME,  } from "../../../routers/route-name-constants";


//추가 등록 되는가?
//삭제 api작성
export const CP_USER_DELETE_MUTATION = gql`
mutation cp_deleteStudentMutation($idOnlyInput: IdOnlyInput!) {
  cp_deleteStudent(input: $idOnlyInput) {
    ok
    error
  }
}
`;



//학생 삭제 버튼 - 회원탈퇴시키기
export const CP_UserDeleteBtn=({user}:{user: Pick<CP_User,"id"|"name">})=>{
  let navigate = useNavigate()

  const [handleError] = useError()
  const submit=()=>{
        //각각체크
        const isConfirm = window.confirm(user.name+' 계정을 삭제시키겠습니까? 복구가 불가능합니다.')
        if(!isConfirm)return

        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_deleteStudentMutationDocument,
            variables:{
              idOnlyInput:{id:user.id}
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_deleteStudent.ok ){
              alert('삭제하였습니다.')
              await client.refetchQueries({
                include: [CP_PAY_USERLIST_QUERY], //pay
              });
              navigate(CP_PAY_HOME_ROUTE_NAME) //pay home으로
            }else if(data?.cp_deleteStudent.error){
              alert(data.cp_deleteStudent.error)
            }
          })
          .catch(e => handleError(e, '회원탈퇴'))

    }
    
    return(
        <div className=" text-red-300 cursor-pointer" onClick={submit}>계정 삭제</div>
    )
}