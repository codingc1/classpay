import { POSITION } from "../../__generated__/gql-types";
import { cpMeQueryQuery } from "../../hooks/user/useMe.generated";



//교사인지 확인
export const isTeacher = (Medata: cpMeQueryQuery | undefined) => {
    if (!Medata) return false;
    return (Medata.cp_me.position === POSITION.Teacher)
   
}