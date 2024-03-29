import { useEffect, useState } from "react"
import { useMe } from "../../../../hooks/user/useMe"
import { StudentTableExcelDown } from "./student-table-excel-down"
import { ICpStudent, cpStudentsVar } from "../../../../stores/cp-students-store"
import { POSITION } from "../../../../__generated__/gql-types"
import { useReactiveVar } from "@apollo/client"


export const StudentListTable = () => {
    const studentList = useReactiveVar(cpStudentsVar).students
    const {data:meDate} = useMe()
    const [students, setStudents] = useState<ICpStudent[]>([])
    useEffect(()=>{ //학생 리스트 테이블
            const students = studentList.map((person)=>{
                return {id:person.id, name:person.name, number:person.number, mainId:person.mainId, money:person.money, position:person.position}
            })
            const filterStudents = students.filter((student)=>student.position !== POSITION.Teacher)
            setStudents(filterStudents)
        
    },[studentList])
    // const students = data? data.cp_PayUserLists.map((person)=>{
    //     return {id:person.id, name:person.name, number:person.number, mainId:person.mainId, money:person.money, position:person.position}
    // }):[]
    
    return(
        <div className="px-1 ">
      <div className="sm:flex sm:items-center">
        <div className="">
          {/* <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1> */}
          <StudentTableExcelDown students={students} />
          {/* <p className="mt-2 text-sm text-gray-700">
            엑셀로 다운로드
          </p> */}
        </div>
        {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div> */}
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 text-sm">
                  <tr>
                    <th scope="col" className="py-1  font-semibold text-gray-900 text-center" style={{width:'15%'}}>
                      번호
                    </th>
                    <th scope="col" className=" py-1 w-1/4  font-semibold text-gray-900 text-center">
                      이름
                    </th>
                    <th scope="col" className=" py-1  font-semibold text-gray-900 text-center" style={{width:'35%'}}>
                      아이디
                    </th>
                    <th scope="col" className=" py-1  w-1/4 font-semibold text-gray-900 text-center">
                      비고
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {studentList.map((person) => {
                    if(person.id === meDate?.cp_me.id) return <div></div>
                    return(
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-1   font-medium text-gray-900 text-center" style={{width:'15%'}}>
                        {person.number}
                      </td>
                      <td className="whitespace-nowrap  py-1 w-1/4 text-gray-500 text-center">{person.name}</td>
                      <td className="whitespace-nowrap  py-1  text-gray-500 text-center" style={{width:'35%'}}>{person.mainId  }</td>
                      <td className="whitespace-nowrap  py-1 w-1/4 text-gray-500 text-center"></td>
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}