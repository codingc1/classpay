import { useCallback, useEffect, useState } from "react"
import { generateRandomEnglish } from "../../../../func/basic/string/random-string";
import { IFCreateTempStudent } from "../cp-create-students";
import { useCpPayUserList } from "../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { useReactiveVar } from "@apollo/client";
import { cpPayVar } from "../../../../stores/cp-pay-store";


export const UserEnterStudentDirectly =({ studentList, setStudentList, }:{//setIdPossible
    studentList:IFCreateTempStudent[],
    setStudentList:React.Dispatch<React.SetStateAction<IFCreateTempStudent[]>>
    //</React.SetStateAction>setIdPossible:React.Dispatch<React.SetStateAction<boolean[]>>
})=>{
    const{data} = useCpPayUserList()
    const cpapy = useReactiveVar(cpPayVar).cppay;
    const [memberNum, setMemberNum] = useState(0)
    //학급명+학생번호
    const [commMainId, setCommMainId] = useState(cpapy.className) //generateRandomEnglish(4,{type:'lower'})
    const [commPassword, setCommPassword] = useState('1111')//'1111'

    useEffect(() => {
        if(data && data.cp_PayUserLists.length>1){ //2개이상일때면 1개일때는 교사이므로 2
            const getEnglish=(str:string)=>{
                //처음부터 숫자가 아닌 문자가 나올때까지 => 한글도 포함하여 통과..
                let result =''
                const reg = /^[a-zA-Z]+/
                for(let i=0; i<str.length; i++){
                    if(reg.test(str[i])){
                        result+=str[i]
                    }else{
                        break
                    }
                }
                return result
            }
            //뒤에서부터 문자가 나올때까지 => 문자만 가져옴
            const getString=(str:string)=>{
                let index = -1;
                const reg = /[0-9]+/
                for(let i=str.length-1; i>-1; i--){
                    if(reg.test(str[i])){ //숫자면
                        index = i
                    }else{
                        break
                    }
                }
                const sliced = str.slice(0, index)
                return sliced
            }
            setCommMainId(getString(data.cp_PayUserLists[1].mainId))
        }
    }, [data])
    
    const onChangeMemberNum = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value)
        if(isNaN(num))setMemberNum(0)
        if(num<0)setMemberNum(0);
        if(num>50){
            alert('50명 이하로 입력해주세요')
            return
        }
        setMemberNum( num)
      }, [])

    
    const getStudnetNumber = (index:number)=>{
        if(data && data.cp_PayUserLists.length>2){ //교사 포함. 2개이상일때: 1개일때는 교사이므로 
            const lastStudentNumber = data.cp_PayUserLists[data.cp_PayUserLists.length-1].number
            return lastStudentNumber+index //마지막 학생번호 +1
        }
        return index
    }
    const handleOK=()=>{ //인원 + 확인
        const stu =[]
        for(let i=1; i<memberNum+1; i++){
            stu.push({mainId:commMainId+getStudnetNumber(i),password:commPassword,name:'',number:getStudnetNumber(i)})
        }
        setStudentList(stu)
        // setIdPossible([...Array(memberNum)].fill(false))
    }
    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { //학생수입력하면서 엔터키 눌렀을때
        if (e.key === 'Enter') {
            handleOK()
        }
    }

    const onChangeCommMainId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommMainId(e.target.value)
        const modifyAllMainId = studentList.map((student, index)=>({...student,mainId:e.target.value+(index+1)}))
        setStudentList(modifyAllMainId)
    }
    const onChangeCommPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommPassword(e.target.value)
        const modifyAllPassword = studentList.map((student, index)=>({...student,password:e.target.value}))
        setStudentList(modifyAllPassword)
    }
      
    return(
        <div>
            <div >
                <input className="w-24 input-lime mb-3 text-center" autoFocus  placeholder="id" type={'number'} value={memberNum} onChange={onChangeMemberNum}
                    onKeyDown ={handleOnKeyPress} />
                <span>명</span>
                <button className="ml-2 px-3 py-2 bg-slate-200 hover:bg-slate-300 text-xs" onClick={handleOK}>확인</button>
            </div> 

            {studentList.length>0 &&
            <div>
                <br />
                <div>공통 id: <input className="w-24 px-1  bg-green-200" placeholder="일괄id" value={commMainId} onChange={onChangeCommMainId}/>
                    {/* <span className="text-xs">반에 맞게 바꿔주세요</span> */}
                </div>
                <div className="text-xs text-gray-400">(한글도 가능합니다.)</div>
                {/* <div className="text-xs text-gray-400">(학생들이 기억하기 쉽게 바꿔주세요)</div> */}
                {/* <div className="text-xs mb-3 text-gray-400">영어 또는 숫자</div> */}
                <div>초기 비밀번호: <input className="w-24 px-1  bg-green-200" placeholder="일괄password" value={commPassword} onChange={onChangeCommPassword}/></div>
                {/* <div className="text-xs mb-3 text-gray-400">영어 또는 숫자, 숫자만 있어도 가능</div> */}
            </div>}
            
        </div>
    )
}