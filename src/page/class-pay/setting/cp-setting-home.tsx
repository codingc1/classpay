import { useReactiveVar } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../apollo"
import useError from "../../../func/sys/err/useErr"
import { cp_deleteClassPayMutationDocument } from "../../../hooks/cp-pay/basic/createClassPay.generated"
import { cpPayVar, editCpPayVar } from "../../../stores/cp-pay-store";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";
import { logoutFunc } from "../../../func/sys/auth/logout-func";





export const CpSettingHome=()=>{
    // const cpPayRedux = useReactiveVar(cpPayVar); 
    let navigate = useNavigate()
    const payid = useReactiveVar(cpPayVar).payid;

      const [handleError] = useError()

    const handlesubmit=()=>{
        const isConfirm = window.confirm(' 학급페이를 삭제하시겠습니까? ')
        if(!isConfirm)return
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_deleteClassPayMutationDocument,
            variables:{
                idOnlyInput:{id:Number(payid)}
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_DeleteClassPay.ok ){
              // editCpPayVar.setPayID(0) 
              // editCpPayVar.cppay.set(cpPayFn.store.cpay)

                // await client.refetchQueries({
                //     include: [CP_PAYS_QUERY],//cppay list refech
                //   });
              alert('삭제하였습니다. 계정이 존재하지 않으므로 아용하시려면 다시 생성하여야 합니다.')
              logoutFunc()
              navigate('/')
            }else if(data?.cp_DeleteClassPay.error){
              alert(data.cp_DeleteClassPay.error)
            }
          })
          .catch(e => handleError(e, 'cp_LoginMutation'))
    }
    return( 
        <div className="w-full mx-auto flex justify-center ">
            <div className="w-full max-w-sm">
                <div>학급페이 설정</div>
                {/* <div>payid : {payid}</div> */}
                <button onClick={handlesubmit}>학급 삭제하기</button>
            </div>

        </div>
    )
}