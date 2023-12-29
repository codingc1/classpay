import { useReactiveVar } from "@apollo/client";
import { ICpStudent, cpStudentsVar } from "../../../../stores/cp-students-store";
import { useState } from "react";
import { chkCpUser } from "../../../../utils/check-create/cp-id-password-check";
import { client } from "../../../../apollo";
import { cp_modifyStudentMutationDocument } from "../../../../hooks/cp-pay/cp-pay-user/createCpUser.generated";
import { CP_PAY_USERLIST_QUERY } from "../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { CP_PAY_MEMBER_ROUTE_NAME } from "../../../../routers/route-name-constants";
import { useNavigate } from "react-router-dom";
import useError from "../../../../func/sys/err/useErr";
import { HomeIconTitle } from "../../../../components/home/icon/home-icon-title";


//cp_modifyStudent - mutation


export default function ModifyStudent() {
    let navigate = useNavigate()
    const student = useReactiveVar(cpStudentsVar).student;
    const [tempstudent, setTempstudent] = useState<ICpStudent>(student)
    const [nameErrMsg, setNameErrMsg] = useState('') //
    const [numberErrMessage, setNumberErrMessage] = useState('')
    

    const onChang=(e: React.ChangeEvent<HTMLInputElement>,)=>{ //input의 name에 따라 알아서? 변경 
        const { value, name, type } = e.target; 
        const updateStuent ={...tempstudent, [name]: value}
        //name check
        setNameErrMsg(chkCpUser.nameErrMsg(value))
        setTempstudent(updateStuent)
    }
    const onChangNum=(e: React.ChangeEvent<HTMLInputElement>,)=>{ //
        const { value, name, type } = e.target; 
        const num = Number(value)
        if(isNaN(num)){ return;  }
        const updateStuent ={...tempstudent, [name]: num}
        setNumberErrMessage(chkCpUser.numberErrMsg(num))
        setTempstudent(updateStuent)
    }
    
    const [handleError] = useError()
    const submit=()=>{ 
        if(nameErrMsg.length>0){ alert(nameErrMsg); return;  }
        if(numberErrMessage.length>0){ alert(numberErrMessage); return; }
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_modifyStudentMutationDocument,
            variables:{
                modifyCpStudentsInput:{id:student.id, name:tempstudent.name, number:tempstudent.number}
            }
          })
          .then(async({data})=>{
            if(data &&data.cp_modifyStudent.ok ){
              await client.refetchQueries({
                include: [CP_PAY_USERLIST_QUERY],
              });
            alert('수정하였습니다.')
            //팝업? 닫기
            navigate(CP_PAY_MEMBER_ROUTE_NAME)
            }else if(data?.cp_modifyStudent.error){
              alert(data.cp_modifyStudent.error)
            }
          })
          .catch(e => handleError(e, 'cp_modifyStudentMutationDocument'))
    }
    return(
        <div className="w-full mx-auto flex justify-center ">
        <div className="w-full max-w-sm pb-16">
            <div className="py-5 flex text-lg items-center"><HomeIconTitle />학생 계정 변경</div>
            <div className=" py-5">
                <div className="text-lg">id : {student.mainId}</div>
                <div className="flex py-2">
                    <div className="mr-2">번호 :</div>
                    <input  className="w-12 bg-green-200 px-1 text-center" placeholder="번호" name={'number'} type={'number'}  value={tempstudent.number} onChange={(e)=>onChangNum(e,)}/>
                    <div>번</div>
                </div>
                <div className="flex py-2">
                    <div className="mr-2">이름 :</div>
                    <input  className=" bg-green-200 px-1 text-center" placeholder="이름" name={'name'}  value={tempstudent.name} onChange={(e)=>onChang(e,)}
                        style={{width:'6rem'}}/>
                </div>
            </div>
            <div className="text-red-500 text-xs">{nameErrMsg}</div>
            <div className="text-red-500 text-xs">{numberErrMessage}</div>

            <button className="mt-3 block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 " onClick={submit}>저장</button>
        </div>
        
        </div>
    )


}