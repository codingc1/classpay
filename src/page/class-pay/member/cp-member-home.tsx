import { useNavigate, useParams } from "react-router-dom";
import { useCpPayUserList } from "../../../hooks/cp-pay/cp-pay-user/useCpPayUserList";
import { useMe } from "../../../hooks/user/useMe";
import { POSITION } from "../../../__generated__/gql-types";
import { CPCreateStudents } from "./cp-create-students";
import { CP_UserDeleteBtn } from "./cp-user-delete";



export const CPMemberHome=()=>{
    let navigate = useNavigate()
    const {payid} = useParams();

    const {data:meDate} = useMe()
    const{data} = useCpPayUserList({id:payid})

    const teacherT = <span className="banselect text-blue-700">T</span>

    const handlesubmit=()=>{

    }


    return(
        <div className="w-full mx-auto flex justify-center ">
        <div className="w-full max-w-sm pb-16">
            <div className="py-5">멤버</div>
            <div className="flex py-5">
                {data && data.cp_PayUserLists.map((el)=>{
                    return(
                        <div className="px-2"  onClick={handlesubmit} key={el.id}>
                            <div className=" w-12 h-12 p-1 bg-indigo-300 rounded-full   ">
                                {/* <div className="font-thin">QR코드</div>
                                <div className=" font-bold text-lg">스캔하기</div>
                            <div className="flex justify-end text-5xl"><AiOutlineScan /></div> */}
                            </div>
                            {meDate?.cp_me.position===POSITION.Teacher &&
                                <div className="w-12 mt-2 text-center text-xs ">{el.number}번</div>}
                            <div className="w-12 text-center text-xs ">{el.name}{el.position===POSITION.Teacher?teacherT:''}</div> 

                            {meDate?.cp_me.position===POSITION.Teacher &&
                                <CP_UserDeleteBtn user={el} />}
                      </div>
                    )
                })}
            </div>
            <button className="px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs" onClick={handlesubmit}>+ 멤버 추가</button> 
            <div className="py-3">
                <div>추가 방법</div>
                <button className="block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs"
                    onClick={()=>alert('아직 지원하지 않습니다^^;')}>id로 추가</button>
                <button className="mt-3 block px-3 py-2 rounded-lg bg-indigo-200 hover:bg-indigo-300 text-xs">학생 계정 생성 + 학급멤버로 가입</button>
            </div>

            <CPCreateStudents />
            {/* <button onClick={handlesubmit}>삭제하기</button> */}
            <div>추후: 가입버튼 작동하게, 학생 정보 수정-이름번호, 학급페이 삭제</div>
        </div>

    </div>
    )
}