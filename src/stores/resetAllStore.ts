
import { editCpInstitutionVar } from "./cp-institution"
import { editCpPayVar } from "./cp-pay-store"
import { editStudentsVar } from "./cp-students-store"
import { editRouteVar } from "./route-info-store"



export const resetAllStore=()=>{
    editRouteVar.reset()//route
    editCpPayVar.reset()//class students
    editStudentsVar.reset()//student
    editCpInstitutionVar.reset()//institution
}