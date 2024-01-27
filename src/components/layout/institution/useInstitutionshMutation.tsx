



import { gql, useMutation,} from "@apollo/client";
import { CP_INSTITUTION_FRAGMENT } from "../../../utils/fragment/insti-fragments";
import useErrorShow from "../../../func/sys/err/useErrShow";
import { my_cp_institutionshMutationMutation,my_cp_institutionshMutationMutationVariables } from "./useInstitutionshMutation.generated";;
import { useState } from "react";
import { CP_Institution } from "../../../__generated__/gql-types";
import { IInstitution } from "../../../stores/type/institution-type";


export const CP_MY_INSTITUTIONS_MUTATION = gql`
mutation my_cp_institutionshMutation {
    my_cp_institutions{
        ...CPInstitutionBasicParts
  }
}
${CP_INSTITUTION_FRAGMENT}
`;


export const CP_MY_INSTITUTIONS_QUERY = gql`
query my_cp_institutions_qquery {
    my_cp_institutions_q{
        ...CPInstitutionBasicParts
  }
}
${CP_INSTITUTION_FRAGMENT}
`;


// export const CP_MYBILLS_MONTH_MUTATION = gql`
// mutation my_cp_institutionshMutation($yearMonthInput:YearMonthInput!) {
//     my_cp_institutions(input: $yearMonthInput) {
//         ...CP_BillParts
//   }
// }
// ${CP_BILL_FRAGMENT}
// `;

  
  


//삭제해야함 쿼리로 대체
export const useInstitutionshMutation = () => {

    const [institutionsList, setChilInstitutionsList] = useState<IInstitution[]>([])
    const [isOpenInstitutions, setIsOpenInstitutions] = useState<boolean>(false)

    const [handleError] = useErrorShow()
    const [my_cp_institutionshMutation, { loading,  }] = useMutation<my_cp_institutionshMutationMutation, my_cp_institutionshMutationMutationVariables>(CP_MY_INSTITUTIONS_MUTATION, {async onCompleted (data){
        if(data.my_cp_institutions){ //
            const instiData = data.my_cp_institutions
            // const instiList = instiData.map((insti)=>{
            //     if(insti.instiPermission){
            //         return {...insti, instiPermission:insti.instiPermission}
            //     }
            //     return insti
            // })
            // console.log(data.my_cp_institutions)
            
            setChilInstitutionsList(instiData)
        }
        // const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
        
        
        return;

        }, onError: (err) => {
        handleError(err, '판매에 실패하였습니다.')
        } });

    const submitInstitutions =() => {
        if(loading)return
        //pendingSelling - subscribe시작
        my_cp_institutionshMutation();
            
        // {
        //     variables: {
        //         cp_buyProductIdInput: { cppay_id:cppay.id,product_id:productRedux.product.id,qty:productRedux.qty, },
        //     },
        //     }
        
    }  

    return {submitInstitutions, institutionsList, isOpenInstitutions, setIsOpenInstitutions}
}