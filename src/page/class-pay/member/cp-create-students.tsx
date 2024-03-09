import {  useEffect, useState } from "react";
import { arrayClone } from "../../../func/array/arrayClone";

import { useDebounceFunction } from "../../../func/basic/useDebounce";
import { checkCPNickname, checkCPPassOk, checkCPUserMainIdOk } from "../../../func/server/id-password-check";
import { UserEnterStudentDirectly } from "./create-students/userEnterStudentDirectly";
import { CrestuExcelUpload } from "./create-students/crestu-excel-upload";
import { CreateStuCheckBoxGroup } from "./create-students/checkbox-group";
import { chkCpUser } from "../../../utils/check-create/cp-id-password-check";
import { CreateStudentSubmit } from "./create-students/crestu-submit";
import { usePossibleIds } from "../../../hooks/cp-pay/cp-pay-user/usePossibleIds";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import { ExplanAgreeStudent } from "./create-students/explan-agree-stu";
import { AgreeStudent } from "./create-students/agree-student";

//Homr
export interface IFCreateTempStudent {mainId:string,password:string,name:string,number:number}
// export type UploadCombiType = {fullHang_id:number, kind:string, mark:number, sentence: string,  schoolGrade: UserSchoolGrade, tagArray:string[]}
export const CPCreateStudents=()=>{
    // const payid = useReactiveVar(cpPayVar).payid;
    const [isHumanInput, setIsHumanInput] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [isPopup, setIsPopup] = useState(true)
   
    //{mainId:string,password:string,name:string,number:number}
    const [studentList, setStudentList] = useState<IFCreateTempStudent[]>([])
    
    useEffect(() => {
        if(studentList.length ===0){return}
        const isFind = errMessage.includes('이미 존재하는')
        if(isFind){ //아디체크 문제가 아니면 초기화
            return;
        }

        const errMsg = chkCpUser.checkStudent(studentList)
        if(errMsg.error && errMsg.index ===-1){
            setErrMessage(errMsg.error)
        }else if(errMsg.error && errMsg.index !==-1){
            setErrMessage((errMsg.index+1)+'번째 학생 : '+errMsg.error)
        }else{
            setErrMessage('')
        }
        
    },[studentList])
    // const onChangStuList=(e: React.ChangeEvent<HTMLInputElement>,num:number)=>{ //input의 name에 따라 알아서? 변경
    //     const { value, name, type } = e.target; 
    //     const copyArr = arrayClone(studentList)
    //     copyArr[num] ={...copyArr[num], [name]: value}
    //     setStudentList(copyArr)
    // }

    // const [idPossible, setIdPossible] = useState<boolean[]>([])//id사용가능한가 서버 통신 후-추후
    
    const [debounceFn] = useDebounceFunction()
    
    //excel file
    const [selectedFile, setSelectedFile] = useState('')
    const [theInputKey, setTheInputKey] = useState('')
    // const [tmpExcelData, setTmpExcelData] = useState<IFCreateTempStudent[]>([]) 
    // const jsonOption = [{colName:'id',keyName:'mainId'},{colName:'password',keyName:'password'},{colName:'name',keyName:'name'},{colName:'number',keyName:'number',},]
    const jsonOption = [{colName:'id',keyName:'mainId'},{colName:'비밀번호',keyName:'password'},{colName:'이름',keyName:'name'},{colName:'번호',keyName:'number',},]
    const setObj =(arr:any[])=>{
        const res:any[] = []
        const throwError = (index:number, type:string)=>{throw Error(index+`번째 줄에 ${type}가 없거나 에 오류가 있습니다.`)}
        arr.forEach((el:any,index)=> {
            // const mainId = Number(el.id)
            const mainId = String(el.mainId).trim()
            // if(isNaN(mainId)){throwError(index,'id')} //id는 영어 숫자 한글가능..
            const password = String(el.password).trim()
            const name = String(el.name).trim()
            const number = Number(el.number)
            const obj = {mainId, password, name, number}
            res.push(obj)
        });
        setStudentList(res)
    }
 
    //id, name, number체크 함수
    const chkIsCreatable=(num:number)=>{
        const RED= 'bg-red-500'
        const {mainId, password, name, number} = studentList[num]
        if(chkCpUser.checkPosibleStudent({mainId, password, name, number}).error)return RED
        // if(number === 0)return RED // checkPosibleCpUser는 교사용체크라 학생이 0번을 갖지 못하도록 체크
        // if(checkCPUserMainIdOk(studentList[num].mainId) === false)return RED
        // if(checkCPPassOk((studentList[num].password)) === false)return RED
        // if(checkCPNickname((studentList[num].name)) === false)return RED
        //아이디는 서버와 통신해서 가능한지 살펴야함
        return 'bg-green-400'
    }
    
    
    const [studentPossibelMutationFunc] = usePossibleIds({mainIds:studentList.map(v=>v.mainId),setErrMessage:setErrMessage})
    const debouncdFunction=()=>{
        studentPossibelMutationFunc()
        ConsoleHelper('debounce')
    }
    const onChang=(e: React.ChangeEvent<HTMLInputElement>,num:number)=>{ //input의 name에 따라 알아서? 변경 
        const { value, name, type } = e.target; 
        const copyArr = arrayClone(studentList)
        copyArr[num] ={...copyArr[num], [name]: value}
        //errmessage가 없을때 id체크
        const errMsg = chkCpUser.checkStudent(copyArr)
        setStudentList(copyArr)
        if(errMsg.error)return; //에러가 있으면 api호출 안함
        if(name === 'mainId'){ //id중복체크
            debounceFn(debouncdFunction, 1000)
        }
    }
    const onChangNum=(e: React.ChangeEvent<HTMLInputElement>,num:number)=>{ //
        const { value, name, type } = e.target; 
        const copyArr = arrayClone(studentList)
        copyArr[num] ={...copyArr[num], [name]: Number(value)}
        setStudentList(copyArr)
    }
    

   

    const notificationMethods = [
        { id: 'email', title: '직접입력',isHumanInput:true,onChange:()=>{setStudentList([]);setIsHumanInput(true);} },
        { id: 'sms', title: '엑셀업로드',isHumanInput:false,onChange:()=>{setStudentList([]);setIsHumanInput(false); }},
    ]
    return(
        <div className="w-full  flex justify-center ">
            {/* max-w-sm */}
        <div className="w-full max-w-lg  pb-16">
        <div className="py-5 mb-3">
            
            <CreateStuCheckBoxGroup notificationMethods={notificationMethods} isHumanInput={isHumanInput} />
            <br />
            
            {isHumanInput && <UserEnterStudentDirectly studentList={studentList} setStudentList={setStudentList}  />}
            {!isHumanInput &&<div>
            <CrestuExcelUpload selectedFile={selectedFile} 
               theInputKey={theInputKey} jsonOption={jsonOption} 
               setTmpExcelData={setObj} />
            <button onClick={()=>{
              const randomString = Math.random().toString(12); //input 초기화
              setTheInputKey(randomString);
              setSelectedFile(''); setStudentList([])
            }}>초기화</button>
            </div>}

            <br />
            <div >
            {studentList.length>0 && //table-auto  style={{width:'23rem'}}
            <table className=" text-gray-800  w-full border-2" >
                {/* justify-between */}
            <thead className="" >
                <tr className="" >
                    {/* w-10 w-24 w-20 w-10 w-24 */}
                    <th className="" style={{width:'7%'}}></th>
                    <th className=" text-center"style={{width:'23%'}}>아이디</th>
                    <th className=" text-center"style={{width:'23%'}}>비밀번호</th>
                    
                    <th className=" text-center"style={{width:'13%'}}>번호</th>
                    <th className=" text-center"style={{width:'24%'}}>이름</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map((el,index)=>{
                    return(
                        <tr className="bg-white " style={{height:'2rem', paddingTop:'1px',paddingBottom:'1px'}} key={'stulist'+index}>
                            <td style={{width:'7%'}}><div className=" h-full flex justify-center items-center "><div className={`w-3 h-3 rounded-full ${chkIsCreatable(index)}`}></div></div></td>
                            <td className=" "style={{width:'23%'}}>
                                <input  className="w-full  bg-green-200 px-1" placeholder="학생id" name={'mainId'}  value={el.mainId} onChange={(e)=>onChang(e,index)}/>
                                
                            </td>
                            <td className=""style={{width:'23%'}}>
                                <input className="w-full bg-green-200 px-1" placeholder="password" name={'password'}  value={el.password} onChange={(e)=>onChang(e,index)}/>
                                
                            </td>
                            
                            {/* <td>{el.password}</td> */}
                            <td className=""style={{width:'13%'}}>  
                                <input  className="w-full bg-green-200 text-center" placeholder="번호" name={'number'} type={'number'}  value={el.number} onChange={(e)=>onChangNum(e,index)}/>
                            </td>
                            <td className=" "style={{width:'23%'}}>
                                <input  className="w-full bg-green-200 px-1" placeholder="이름" name={'name'}  value={el.name} onChange={(e)=>onChang(e,index)}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>}
            {/*     {studentList.map((el,index)=>{
                    return(//w-[310px] h-[64px]

                        <div className="mb-1 px-1 border flex justify-start space-x-2 " style={{width:'18rem',height:'4rem', paddingTop:'1px',paddingBottom:'1px'}} key={'stulist'+index}>
                            <div className="w-10 r-1 h-full flex justify-center items-center "><div className={`w-3 h-3 rounded-full ${chkIsCreatable(index)}`}></div></div>
                            <div className="w-24"><label>학생아이디 
                                <input className="w-24 bg-green-200" placeholder="학생id" name={'mainId'}  value={el.mainId} onChange={(e)=>onChang(e,index)}/>
                            </label></div>
                            <div className="w-10"><label>번호  
                                <input className=" w-10 bg-green-200 text-center" placeholder="번호" name={'number'} type={'number'}  value={el.number} onChange={(e)=>onChangNum(e,index)}/>
                            </label></div>
                            <div className="w-24"><label>이름 
                                <input className="w-24 bg-green-200" placeholder="이름" name={'name'}  value={el.name} onChange={(e)=>onChang(e,index)}/>
                            </label></div>
                                
                        </div>
                    )
                })}*/}
            </div> 
            <div className="text-red-500 text-xs">{errMessage}</div>
            {errMessage.length === 0 && <CreateStudentSubmit studentList={studentList} setErrMessage={setErrMessage} />}
            
            {/* <div className="py-3">
                <div>추가 방법</div>
                <button className="block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs"
                    onClick={()=>alert('아직 지원하지 않습니다^^;')}>id로 추가</button>
                <button className="mt-3 block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs">학생 계정 생성 + 학급멤버로 가입</button>
            </div> */}
        </div>

        </div>
        {isPopup && <ExplanAgreeStudent onClose={()=>setIsPopup(false)}/>}
        </div>
    )
}