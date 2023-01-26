import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../apollo"
import { arrayClone } from "../../../func/array/arrayClone";
import { generateRandomEnglish } from "../../../func/basic/string/random-string";
import { useDebounceFunction } from "../../../func/basic/useDebounce";
import { checkCPNickname, checkCPPassOk, checkCPUserMainIdOk } from "../../../func/server/id-password-check";
import useError from "../../../func/sys/err/useErr"
import { cp_CreateStudentsMutationDocument } from "../../../hooks/cp-pay/cp-pay-user/createCpUser.generated";
import { CP_PAY_USERLIST_QUERY } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";



export const CPCreateStudents=()=>{
    const {payid} = useParams();
    const [memberNum, setMemberNum] = useState(0)
    const [commMainId, setCommMainId] = useState(generateRandomEnglish(4,{type:'lower'}))
    const [commPassword, setCommPassword] = useState('1111')
    const [studentList, setStudentList] = useState<{mainId:string,password:string,name:string,number:number}[]>([])
    const [idPossible, setIdPossible] = useState<boolean[]>([])//id사용가능한가 서버 통신 후-추후
    
    const [debounceFn] = useDebounceFunction()
    const onChangeMemberNum = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMemberNum( Number(e.target.value))
      }, [])

    const handleOK=()=>{ //인원 + 확인
        const stu =[]
        for(let i=1; i<memberNum+1; i++){
            stu.push({mainId:commMainId+i,password:commPassword,name:'',number:i})
        }
        setStudentList(stu)
        setIdPossible([...Array(memberNum)].fill(false))
    }
 
    //id, name, number체크 함수
    const chkIsCreatable=(num:number)=>{
        const RED= 'bg-red-500'
        if(checkCPUserMainIdOk(studentList[num].mainId) === false)return RED
        if(checkCPPassOk((studentList[num].password)) === false)return RED
        if(checkCPNickname((studentList[num].name)) === false)return RED
        //아이디는 서버와 통신해서 가능한지 살펴야함
        return 'bg-green-400'
    }
    const debouncdFunction=()=>console.log('hi')
    const onChang=(e: React.ChangeEvent<HTMLInputElement>,num:number)=>{ //
        const { value, name, type } = e.target; 
        const copyArr = arrayClone(studentList)
        copyArr[num] ={...copyArr[num], [name]: value}
        setStudentList(copyArr)
        debounceFn(debouncdFunction)
    }
    const onChangNum=(e: React.ChangeEvent<HTMLInputElement>,num:number)=>{ //
        const { value, name, type } = e.target; 
        const copyArr = arrayClone(studentList)
        copyArr[num] ={...copyArr[num], [name]: Number(value)}
        setStudentList(copyArr)
    }

    const [handleError] = useError()
    const submit=()=>{
        if(studentList.length ===0)return;
        //각각체크
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_CreateStudentsMutationDocument,
            variables:{
                createCpStudentsInput:{payid:Number(payid), students:studentList}
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_CreateStudents.ok ){
              await client.refetchQueries({
                include: [CP_PAY_USERLIST_QUERY],
              });
            }else if(data?.cp_CreateStudents.error){
                let sameId = data.cp_CreateStudents.mainIds.reduce((acc,cur)=>acc+cur,'')
                sameId = sameId.length>0 ?' :' +sameId:''
              alert(data.cp_CreateStudents.error+sameId)
            }
          })
          .catch(e => handleError(e, 'cp_LoginMutation'))

    }
    return(
        <div className="mb-3">
            <div>
                <div>공통 id: <input className="w-24 px-1  bg-green-200" placeholder="공통id" value={commMainId} onChange={(e)=>setCommMainId(e.target.value)}/>
                    <span className="text-xs">반에 맞게 바꿔주세요</span>
                </div>
                <div className="text-xs mb-3 text-gray-400">영어 또는 숫자</div>
                <div>초기 비밀번호: <input className="w-24 px-1  bg-green-200" placeholder="공통id" value={commPassword} onChange={(e)=>setCommPassword(e.target.value)}/></div>
                <div className="text-xs mb-3 text-gray-400">영어 또는 숫자, 숫자만 있어도 가능</div>
            </div>
            <div >
                <input className="w-24 input-lime mb-3 text-center" placeholder="id" type={'number'} value={memberNum} onChange={onChangeMemberNum}/>
                <span>명</span>
                <button className="ml-2 px-3 py-2 bg-slate-200 hover:bg-slate-300 text-xs" onClick={handleOK}>확인</button>
            </div> 

            <div >
                {studentList.map((el,index)=>{
                    return(
                        <div className="w-[350px] h-[64px] mb-2 px-1 py-1 border flex " key={'stulist'+index}>
                            <div className="w-10 pr-1 h-full flex justify-center items-center "><div className={`w-3 h-3 rounded-full ${chkIsCreatable(index)}`}></div></div>
                            <div ><label>아이디 : 
                                <input className="w-24 bg-green-200" placeholder="학생id" name={'mainId'}  value={el.mainId} onChange={(e)=>onChang(e,index)}/>
                            </label></div>
                            <div><label>번호 : 
                                <input className="w-24 bg-green-200" placeholder="번호" name={'number'} type={'number'}  value={el.number} onChange={(e)=>onChangNum(e,index)}/>
                            </label></div>
                            <div><label>이름 : 
                                <input className="w-24 bg-green-200" placeholder="이름" name={'name'}  value={el.name} onChange={(e)=>onChang(e,index)}/>
                            </label></div>
                                
                        </div>
                    )
                })}
            </div>
            <button className="mt-3 block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs" onClick={submit}>학생 등록</button>
        </div>
    )
}