
import { gql, useMutation, } from "@apollo/client";
import useError from "../../../func/sys/err/useErr";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import { cp_studentsPossibleIdsMutationMutation, cp_studentsPossibleIdsMutationMutationVariables } from "./usePossibleIds.generated";


export const CP_CHECK_USER_MAINID_MUTATION = gql`
mutation cp_studentsPossibleIdsMutation($checkPossibleIdsInput: CheckPossibleIdsInput!) {
  cp_studentsPossibleIds(input: $checkPossibleIdsInput) {
    ok
    error
    mainIds
  }
}
`;


//React.Dispatch<React.SetStateAction<IOnlyHang>>
//중복 아이디 체크하고 msg 띄우기
export const usePossibleIds = ({mainIds,setErrMessage}:{mainIds:string[],setErrMessage:React.Dispatch<React.SetStateAction<string>>})=>{
    const [handleError] = useError()
      const [cp_studentsPossibleIdsMutation, { loading,  }] = useMutation<cp_studentsPossibleIdsMutationMutation, cp_studentsPossibleIdsMutationMutationVariables>(CP_CHECK_USER_MAINID_MUTATION, {onCompleted(data){
          if(data.cp_studentsPossibleIds.ok  ){ //
            setErrMessage('')
        //    console.log(data.cp_studentsPossibleIds.result, 'data.cp_studentsPossibleIds.results usecheck')
        //    setHangData(data.cp_studentsPossibleIds.result)
         }else if(data.cp_studentsPossibleIds.mainIds.length > 0){
            const idArr = data.cp_studentsPossibleIds.mainIds
            let addedIds = ''
            if(idArr.length > 1){
                addedIds = ' 외 ' + (idArr.length -1) + '개'
            }
           // console.log(data.cp_studentsPossibleIds.error)
           const msg ='이미 존재하는 아이디 입니다'+ idArr[0] +addedIds
            setErrMessage(msg)
        //    alert(`불러오는데 실패하였습니다..\n${data.cp_studentsPossibleIds.error}` );
          //  return ''
         }
       }, onError: (err) => {
        handleError(err,'cp_studentsPossibleIds')
       } });
  
      const studentPossibelMutationFunc =async()=>{ //:Promise<FetchResult<hangsMutation, Record<string, any>, Record<string, any>> | undefined>
        if(loading)return
          try{
            cp_studentsPossibleIdsMutation({
                variables: {
                    checkPossibleIdsInput: { mainIds},
                    },
                });
          
          }catch(e){
              ConsoleHelper(e, 'useHangMutation')
              alert(`문제가 발생하였습니다..` );
              return;
          }
       
      }
  
      return [studentPossibelMutationFunc]
  }