import { cls } from "../../func/basic/string/cls"
import { ICpStudent } from "../../stores/cp-students-store"
import { IoAccessibilityOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

//다중 선택
export const StudentListTableMoneyServeral = ({index,student, onClickStudent,receiveStudents, setReceiveStudents}:{index:number,
    student:ICpStudent,
    onClickStudent:(stu:ICpStudent)=>void,
    receiveStudents:ICpStudent[], 
    setReceiveStudents:React.Dispatch<React.SetStateAction<ICpStudent[]>>
}) => {

    const bgClass=(i:number)=>{
        if(i%2===0)return 'bg-gray-100'
        return ''
    }
    //receiveStudents와 id가 같다면 체크 v아이콘 <FaCheck />
    const checkedIcon = receiveStudents.findIndex((stu)=>stu.id===student.id)!==-1?<FaCheck className=" w-5 flex-shrink-0 text-red-400" aria-hidden="true"/>:
        <div className=" w-5"></div>;
return(
    <li className={cls(`flex items-center justify-between py-1 pl-4 pr-5 text-sm leading-6 hover:bg-lime-400 cursor-pointer`,bgClass(index))}
        onClick={()=>onClickStudent(student)}>
        <div className="flex w-0 flex-1 items-center">
            {checkedIcon}
            {/* <IoAccessibilityOutline className=" w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium mr-2">{index+1}.</span>
                <span className="truncate font-medium text-lg">{student.name}</span>
                {/* <span className="flex-shrink-0 text-gray-400">{student.money}</span> */}
            </div>
        </div>
        <div className="ml-4 flex-shrink-0">
            <div className=" text-lg" style={{color:'rgb(79 70 229)'}}>{student.money}</div>
        </div>
    </li>
)
}