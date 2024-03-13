import { useNavigate, } from "react-router-dom";
import { useCpPayUserList } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { useMe } from "../../../hooks/user/useMe";
import { CP_User, POSITION } from "../../../__generated__/gql-types";
import { useReactiveVar } from "@apollo/client";
import { cpPayVar } from "../../../stores/cp-pay-store";
import { CP_PAY_CREATE_MEMBER_ROUTE_NAME,  } from "../../../routers/route-name-constants";
import { OpenMenu } from "./member-home/open-menu";
import { useState } from "react";
import { ICpStudent, cpStudentsVar, editStudentsVar } from "../../../stores/cp-students-store";
import { ResetPassword } from "./member-home/reaset-password";
import { HomeIconTitle } from "../../../components/home/icon/home-icon-title";
import { useCheckboxAndText } from "../../../components/checkbox/useCheckboxAndText";
import { StudentListTable } from "./member-home/student-table";

 

export type IFstudnet =Pick<CP_User,"id"|"name"|"number">
export const CPMemberHome=()=>{ //변경 : delete, create, modify
    let navigate = useNavigate()
    // const payid = useReactiveVar(cpPayVar).payid;
    const student = useReactiveVar(cpStudentsVar).student;
    // const pay = useReactiveVar(cpPayVar).cppay;

    const {data:meDate} = useMe()
    const{data} = useCpPayUserList() //이것도 바꿔야함..
    // const [student, setStudent] = useState<IFstudnet>({id:0,name:'',number:0,});
    const [ checkboxContent, isChecked,] = useCheckboxAndText({text:'표로 보기',size:' text-md'})
    const [isOpend, setIsOpend] = useState(false) //modal 하위메뉴 띄우기
    const [onClickCoordinate, setOnClickCoordinate] = useState({x: 0, y: 0, });
    const setElementPosition = (e:any, student:ICpStudent) => { //https://jemerald.tistory.com/9
        const obj = { x:(e.nativeEvent.clientX - 0), y: (e.nativeEvent.clientY - 0)}// / photoOverlay.current.offsetHeight) *100,
        setOnClickCoordinate(obj); //position
        editStudentsVar.setStudent(student)
        setIsOpend(true); //modal open
    };
    const onClose = () => { setIsOpend(false); }

    const [isResetPassModel, setIsResetPassModel] = useState(false) //modal 하위메뉴 띄우기
    const viewResetPass = ()=>{ setIsOpend(false); setIsResetPassModel(true); }
    
    const isTeacher = meDate?.cp_me.position===POSITION.Teacher //선생님인지
    //banselect
    const teacherT = <span className=" text-blue-700">T</span>

    const handlesubmit=()=>{
        // navigate(`/classpay/${payid}/member/create`)
        navigate(CP_PAY_CREATE_MEMBER_ROUTE_NAME)
    }


    const isNotTeacherCss =()=>{ //선생님 제외
        if(meDate?.cp_me.position!==POSITION.Teacher)return 'mt-2'
        return ''
    }
    return(
        <div className="w-full mx-auto flex justify-center " >
        <div className="w-full max-w-sm pb-16">
            <div className="py-5 flex text-lg items-center"><HomeIconTitle />구성원</div>
            {isTeacher && checkboxContent} 
            {isChecked && <StudentListTable />}
            <div className="flex flex-wrap py-5">
                {!isChecked && data && data.cp_PayUserLists.map((el)=>{
                    return(
                        <div className="px-2 py-1"  key={el.id}>
                            <div className=" w-12 h-12 p-1 bg-indigo-300 rounded-full "  onClick={()=>{}}>
                                {/* <div className="font-thin">QR코드</div>
                                <div className=" font-bold text-lg">스캔하기</div>
                            <div className="flex justify-end text-5xl"><AiOutlineScan /></div> */}
                            </div>
                            {meDate?.cp_me.position===POSITION.Teacher &&
                                <div className="w-12 mt-2 text-center text-xs ">{el.number}번</div>}
                            <div className={`w-12 text-center text-xs ${isNotTeacherCss()}`}>{el.name}{el.position===POSITION.Teacher?teacherT:''}</div> 

                            {meDate?.cp_me.position===POSITION.Teacher && meDate?.cp_me.id!==el.id && //https://jemerald.tistory.com/9
                                <div style={{color:'rgb(96 165 250)'}} className="w-12 text-center text-xs cursor-pointer" onClick={(e)=>{setElementPosition(e,el)}} >수정</div>}
                      </div>
                    )
                })}
            </div>
            {isTeacher &&
            <button className="px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs" onClick={handlesubmit}>+ 구성원 추가</button> }
            

            {/* <CPCreateStudents /> */}
            {/* cp_myCreatedStudentButNotPayLists */}

             {/* <button onClick={handlesubmit}>삭제하기</button> */}
           
        </div>
        {isOpend && <OpenMenu position={onClickCoordinate} onClose={onClose} user={student}  setResetPassModel={viewResetPass}/>}
        {isResetPassModel && <ResetPassword onClose={()=>{setIsResetPassModel(false)}} />}
    </div>
    )
}