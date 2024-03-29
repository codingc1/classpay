import { editStudentsVar } from "../../../stores/cp-students-store"
import { gql,  useMutation } from "@apollo/client"
import { CP_USER_BASIC_FRAGMENT } from "../../../fragments";
import { cp_PayUserListsMutationMutation, cp_PayUserListsMutationMutationVariables } from "./useStudentsList.generated";
import useErrorShow from "../../../func/sys/err/useErrShow";


export const CP_PAY_USERLIST_MUTATION = gql`
  mutation cp_PayUserListsMutation {
    cp_PayUserListsMu {
          ...CPUserBasicParts
      }

  }
  ${CP_USER_BASIC_FRAGMENT} 
`;
 
//const {studentList} = useStudentsList() 
// const {studentListRefetch} = useStudentsListMu()
//const studentList = useReactiveVar(cpStudentsVar).students 
export const useStudentsListMu = () => { 
    // const [get_person, { loading, error, data }] = useLazyQuery(CP_PAY_USERLIST_QUERY);
    // const [studentList, setStudentList] = useState<ICpStudent[]>([])
    const [handleError] = useErrorShow()
    const [cp_MyBanksMonthMutation, { loading,  }] = useMutation<cp_PayUserListsMutationMutation, cp_PayUserListsMutationMutationVariables>(CP_PAY_USERLIST_MUTATION, {async onCompleted (data){
        const resultData = data.cp_PayUserListsMu
        editStudentsVar.setStudents(resultData) 
        }, onError: (err) => {
            handleError(err, '조회에 실패하였습니다.')
        } });
    const studentListMutation=()=>{
        if(loading){return}
        cp_MyBanksMonthMutation();
    }
  
    // useEffect(()=>{
    //     if(loading)return
    //     console.log('studentListMutation useEffect')
    //     studentListMutation() //get_person()을 호출하면 data가 채워짐
    // },[])


    return {studentListRefetch:studentListMutation}
}