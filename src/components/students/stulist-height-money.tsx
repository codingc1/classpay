import { cls } from "../../func/basic/string/cls"
import { ICpStudent } from "../../stores/cp-students-store"
import { IoAccessibilityOutline } from "react-icons/io5";



export const StudentListTableMoney = ({index,student, onClickStudent}:{index:number,
    student:ICpStudent,
    onClickStudent:(stu:ICpStudent)=>void,
    
}) => {

    const bgClass=(i:number)=>{
        if(i%2===0)return 'bg-gray-100'
        return ''
    }
return(
    <li className={cls(`flex items-center justify-between py-2 pl-4 pr-5 text-sm leading-6 hover:bg-lime-400 cursor-pointer`,bgClass(index))}
        onClick={()=>onClickStudent(student)}>
        <div className="flex w-0 flex-1 items-center">
            <IoAccessibilityOutline className=" w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
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