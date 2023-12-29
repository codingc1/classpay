import { useState } from "react";
import PopupCenterHCustom from "../../../../components/popup/center-h-custom/popup-real-center";
import { chkCpUser } from "../../../../utils/check-create/cp-id-password-check";
import { useReactiveVar } from "@apollo/client";
import { cpStudentsVar } from "../../../../stores/cp-students-store";
import { client } from "../../../../apollo";
import { cp_modifyStudentMutationDocument } from "../../../../hooks/cp-pay/cp-pay-user/createCpUser.generated";
import useError from "../../../../func/sys/err/useErr";




export const ResetPassword=({onClose}:{onClose:()=>void})=>{
    
    const student = useReactiveVar(cpStudentsVar).student;
    const [password, setPassword] =useState('1111')
    const [errMessage, setErrMessage] = useState('') //[''
    const onChang=(e: React.ChangeEvent<HTMLInputElement>)=>{ //input의 name에 따라 알아서? 변경 
        const { value } = e.target;
        setPassword(value)
        //errmessage가 없을때 id체크
        const errMsg = chkCpUser.passwordErrMsg(value)
        setErrMessage(errMsg)
    }
    const closeFunc=()=>{
        setPassword('')
        onClose()
    }
    const [handleError] = useError()
    const submit=()=>{
        if(errMessage.length>0){ alert(errMessage); return;  }

        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_modifyStudentMutationDocument,
            variables:{ //pasword만 바꿈 
                modifyCpStudentsInput:{id:student.id, name:student.name, number:student.number, password}
            }
          })
          .then(async({data})=>{
            if(data &&data.cp_modifyStudent.ok ){
            //   await client.refetchQueries({
            //     include: [CP_PAY_USERLIST_QUERY],
            //   });
            alert(student.name+'학생의 비밀번호를 초기화 하였습니다.')
            //팝업? 닫기
            closeFunc()
            }else if(data?.cp_modifyStudent.error){
              alert(data.cp_modifyStudent.error)
            }
          })
          .catch(e => handleError(e, 'cp_modifyStudentMutationDocument'))
    }
    const contents =( //px-3 py-2 => {{paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px'}}
        <div className="w-full p-8">
            <div>초기화할 비밀번호</div>
            <div className=" text-sm">
                <input placeholder="password" name={'password'}  value={password} onChange={onChang}
                style={{paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px'}}
                className="appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 text-lg"
                />    
        {/* <br /> */}
            </div>
            <div className="h-[12px] text-red-500 text-xs">{errMessage}</div>
            <div className="w-full flex justify-between items-center">
                <div className="flex">
                    <div>{student.number}번&nbsp;</div>
                    <div>{student.name}&nbsp;</div>
                </div>
                <div className="mt-3 block rounded-lg bg-indigo-200 hover:bg-indigo-300 texg-lg cursor-pointer" onClick={submit}
                style={{paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px'}}>초기화</div>
            </div>
       </div>
    )

    return(
        <PopupCenterHCustom onClose={closeFunc} contents={contents} option={{width:280, height:160}}/>
    )
}