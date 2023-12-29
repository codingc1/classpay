import { useNavigate } from "react-router-dom"
import { client } from "../../../../apollo"
import useError from "../../../../func/sys/err/useErr"
import { cp_CreateStudentsMutationDocument } from "../../../../hooks/cp-pay/cp-pay-user/createCpUser.generated"
import { CP_PAY_USERLIST_QUERY, useCpPayUserList } from "../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import { IFCreateTempStudent } from "../cp-create-students"
import { CP_PAY_MEMBER_ROUTE_NAME } from "../../../../routers/route-name-constants"




export const CreateStudentSubmit=({studentList,setErrMessage}:{
    studentList:IFCreateTempStudent[],
    setErrMessage:React.Dispatch<React.SetStateAction<string>>
})=>{
    let navigate = useNavigate()
    const{data} = useCpPayUserList()
    const [handleError] = useError()
    const submit=()=>{
        if(studentList.length ===0){
            alert('학생이 1명 이상 있어야 합니다.')
            return
        }
        if(data && data.cp_PayUserLists.length>1){ //2개이상일때면 1개일때는 교사이므로 2
          const existStudentNumer = data.cp_PayUserLists.length-1
          const studentNumber = studentList.length
          if(existStudentNumer+studentNumber>51){ //교사 포함 51명까지
            alert('기존의 학생 포함 50명까지 등록할 수 있습니다.')
            return
          }
        }
        
        const isConfirm = confirm('학생을 등록하시겠습니까?')
        if(!isConfirm){return}
        //각각체크
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_CreateStudentsMutationDocument,
            variables:{
                createCpStudentsInput:{students:studentList}
            }
          })
          .then(async({data})=>{
            if(data &&data.cp_CreateStudents.ok ){
              await client.refetchQueries({
                include: [CP_PAY_USERLIST_QUERY],
              });
            alert('학생을 등록하였습니다.')
            navigate(CP_PAY_MEMBER_ROUTE_NAME)
            }else if(data?.cp_CreateStudents.error){
                let sameId = data.cp_CreateStudents.mainIds.reduce((acc,cur)=>acc+cur,'')
                sameId = sameId.length>0 ?' :' +sameId:''
              alert(data.cp_CreateStudents.error+sameId)
            }
          })
          .catch(e => handleError(e, 'cp_LoginMutation'))

    }

    return(
        <button className="mt-3 block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs" onClick={submit}>학생 등록</button>
    )
}