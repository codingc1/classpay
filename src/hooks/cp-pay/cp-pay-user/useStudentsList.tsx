import { useEffect, useState } from "react"
import { useCpPayUserList } from "./useCpPayUserList"
import { ICpStudent } from "../../../stores/cp-students-store"


 
//const {studentList} = useStudentsList()
export const useStudentsList = () => {
    const{data} = useCpPayUserList() 
    const [studentList, setStudentList] = useState<ICpStudent[]>([])

    const setStudentListFn = ()=>{
        // console.log('data', data)
        if(data && data.cp_PayUserLists){
            setStudentList(data.cp_PayUserLists)
        }
    }
    useEffect(()=>{
        setStudentListFn()
    },[data])

    return {studentList}
}