import { gql, useQuery,} from "@apollo/client";
import { IInstiPermission, IInstitution } from "../../../stores/type/institution-type";
import { my_cp_institutions_qqueryQuery } from "./useInstitutionshMutation.generated";
import { CP_MY_INSTITUTIONS_QUERY } from "./useInstitutionshMutation";
import { ConsoleHelper } from "../../../func/sys/consoleHelper";
import TokenRepository from "../../../api/token/tokenRepo";
import { sortArrayByKey } from "../../../utils/array/sort-array";







export const useInstitutionshQuery = () => {

    // const [institutionsList, setChilInstitutionsList] = useState<IInstitution[]>([])
    // const [isOpenInstitutions, setIsOpenInstitutions] = useState<boolean>(false)
    // const sortByth =<T, K extends keyof T>( original:T[],  keyName: K ):T[]=>{ //th순으로 정렬
    //     return original.sort((a, b) => {
    //         if(a[keyName] < b[keyName]) { return -1; }
    //         if(a[keyName] > b[keyName]) { return 1; }
    //         return 0;
    //     })
    // }
    try{
      const aa = useQuery<my_cp_institutions_qqueryQuery>(CP_MY_INSTITUTIONS_QUERY, {
        // variables: { id:Number(id) }, //id===0?null:id
        // skip: !id, //https://stackoverflow.com/questions/70715621/dont-run-query-if-parameter-is-null
        skip: !TokenRepository.getToken(), //token이 없으면 실행안함
        fetchPolicy: "no-cache" , //https://www.apollographql.com/docs/react/caching/advanced-topics/
      });
      let result:IInstitution[] = []
      if(aa.data && aa.data.my_cp_institutions_q){
        result = aa.data.my_cp_institutions_q

        const sortPermission = (a:IInstiPermission, b:IInstiPermission)=>{ //th순으로 정렬
          return a.th -b.th //오름차순
          // if(a.instiPermission[0].permissionName < b.instiPermission[0].permissionName) { return -1; }
          // if(a.instiPermission[0].permissionName > b.instiPermission[0].permissionName) { return 1; }
          // return 0;
        }
        result = sortArrayByKey(result, 'th')
        result.forEach((institution:IInstitution, index:number)=>{
          result[index].instiPermission =sortArrayByKey(institution.instiPermission, 'th'); //institution.instiPermission.sort(sortPermission)
        })
      }else{
        result = []
      }
      return {data:result, loading:aa.loading, error:aa.error}
      }catch(e){
        ConsoleHelper(e, 'my_cp_institutions')
        return {error:'my_cp_institutions error', data:[], loading:false}
      }
      
}