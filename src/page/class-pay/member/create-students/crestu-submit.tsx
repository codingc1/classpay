import { useNavigate } from "react-router-dom"
import { client } from "../../../../apollo"
import useError from "../../../../func/sys/err/useErr"
import { cp_CreateStudentsMutationDocument,cp_CreateStudentsMutationMutation,cp_CreateStudentsMutationMutationVariables } from "../../../../hooks/cp-pay/cp-pay-user/createCpUser.generated"
import { IFCreateTempStudent } from "../cp-create-students"
import { CP_PAY_MEMBER_ROUTE_NAME } from "../../../../routers/route-name-constants"
import { useMutation, useReactiveVar } from "@apollo/client"
import { cpStudentsVar } from "../../../../stores/cp-students-store"
import { useStudentsListMu } from "../../../../hooks/cp-pay/cp-pay-user/useStudentsListMu"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_CREATE_USER_MUTATION } from "../../../../hooks/cp-pay/cp-pay-user/createCpUser"




export const CreateStudentSubmit=({studentList,setErrMessage}:{
    studentList:IFCreateTempStudent[],
    setErrMessage:React.Dispatch<React.SetStateAction<string>>
})=>{
    let navigate = useNavigate()
    const students = useReactiveVar(cpStudentsVar).students

    const {studentListRefetch} = useStudentsListMu()
    const [handleError] = useErrorShow()
    const [cp_CreateStudentsMutation, { loading,  }] = useMutation<cp_CreateStudentsMutationMutation, cp_CreateStudentsMutationMutationVariables>(CP_CREATE_USER_MUTATION, {async onCompleted (data){
        const resultData = data.cp_CreateStudents
        if(resultData.ok){
          studentListRefetch()
          alert('학생을 등록하였습니다.')
          navigate(CP_PAY_MEMBER_ROUTE_NAME)
        }else if(resultData.error){
          let sameId = data.cp_CreateStudents.mainIds.reduce((acc,cur)=>acc+cur,'')
          sameId = sameId.length>0 ?' :' +sameId:''
        alert(data.cp_CreateStudents.error+sameId)
      }
        
        }, onError: (err) => {
            handleError(err, '등록에 실패하였습니다.')
        } });


    // const [handleError] = useError()
    const submit=()=>{
        if(studentList.length ===0){
            alert('학생이 1명 이상 있어야 합니다.')
            return
        }
        if(students.length>1){ //2개이상일때면 1개일때는 교사이므로 2
          const existStudentNumer = students.length-1
          const studentNumber = studentList.length
          if(existStudentNumer+studentNumber>51){ //교사 포함 51명까지
            alert('기존의 학생 포함 50명까지 등록할 수 있습니다.')
            return
          }
        }
        const isConfirm = confirm('학생을 등록하시겠습니까?')
        if(!isConfirm){return}
        //각각체크
        if(loading){return}
        // console.log(year, month, 'year, month')
        cp_CreateStudentsMutation({
            variables: { 
              createCpStudentsInput:{students:studentList}
            },
            });

        // client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
        //     mutation:cp_CreateStudentsMutationDocument,
        //     variables:{
        //         createCpStudentsInput:{students:studentList}
        //     } 
        //   })
        //   .then(async({data})=>{
        //     if(data &&data.cp_CreateStudents.ok ){
        //       // await client.refetchQueries({
        //       //   include: [CP_PAY_USERLIST_QUERY],
        //       // });
        //       studentListRefetch()
        //     alert('학생을 등록하였습니다.')
        //     navigate(CP_PAY_MEMBER_ROUTE_NAME)
        //     }else if(data?.cp_CreateStudents.error){
        //         let sameId = data.cp_CreateStudents.mainIds.reduce((acc,cur)=>acc+cur,'')
        //         sameId = sameId.length>0 ?' :' +sameId:''
        //       alert(data.cp_CreateStudents.error+sameId)
        //     }
        //   })
        //   .catch(e => handleError(e, 'cp_LoginMutation'))

    }

    return(
        <button className="mt-3 block px-7 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-lg " onClick={submit}>학생 등록</button>
    )
}