import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useState } from "react";
import { useMe } from "../../../../hooks/user/useMe";
import { logoutFunc } from "../../../../func/sys/auth/logout-func";
import { cpuserExitMutation, cpuserExitMutationVariables } from "./user-exit.generated";
import { ConsoleHelper } from "../../../../func/sys/consoleHelper";



const CP_USER_EXIT_MUTATION = gql`
  mutation cpuserExit($userExitInput: UserExitInput!){
    cp_userExit(input: $userExitInput) {
      ok
      error
    }
  }
`;

export const UserExit =()=>{
    const { data:useMeData, loading } = useMe(); 
    const [isMode, setIsMode] = useState(false)
    const [password, setPassword] = useState('')
    const client = useApolloClient();

    const passChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
      if(e.target){setPassword(e.target.value)}
    }
    const logOut =async()=>{
      await client.cache.reset()
      logoutFunc()
    }
    const [userExit, ] = useMutation<cpuserExitMutation,cpuserExitMutationVariables>(CP_USER_EXIT_MUTATION
      , {onCompleted(data){
      //결과 값이 0일때는 나타나지 않음
      if(data.cp_userExit.ok  ){
        alert('탈퇴하였습니다.')
        logOut()
      }else if(data.cp_userExit.error){
        // console.log(data.allFullsentences.error)
        alert(`탈퇴에 실패하였습니다..\n${data.cp_userExit.error}` );
      }
    }, onError: (err) => {
      ConsoleHelper(err)
      alert(`문제가 발생하였습니다..` );
      // logoutFunc()
    } });
    const submitexit =()=>{
//        useMeData?.me.id
      if(loading || !useMeData?.cp_me.id)return;
        const isExitConfirm = window.confirm('탈퇴하시겠습니까 복구가 불가능합니다.')
        if(!isExitConfirm)return;
        userExit({
          variables: {
            userExitInput: {password:password}, //id:useMeData.cp_me.id, 
          },
        });
    }
    return(
      <div>
        <div className="cursor-pointer" onClick={()=>setIsMode(!isMode)}>탈퇴하기</div>
          {isMode && <div className="w-full flex">
          <input type="password" placeholder="비밀번호"
              className="input-lime w-80" onChange={passChange}
          />
          <button className="btn py-3 text-base font-normal w-10" onClick={submitexit}>확인</button>
          </div>}
      </div>
    )
}