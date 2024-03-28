import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { client } from "../../../../apollo";
import { useNavigate } from "react-router-dom";
import { CP_ME_QUERY } from "../../../user/useMe";
import { PAY_HOME } from "../../../../routers/route-name-constants";
import { CP_INSTI_SENDMONEY_ONETOMANY_MUTATION } from "./cp-bankbook";
import { cp_insti_sendMoney_oneToManyMutationMutation, cp_insti_sendMoney_oneToManyMutationMutationVariables } from "./cp-bankbook.generated";
import { useBankBookMuRefetch } from "./useBankBookMu";
import { CP_PAY_USERLIST_QUERY } from "../../cp-pay-user/useCpPayUserList";
import { SENDMONEY_REFETCH_ARR } from "../sendRefetch";

//은행에서 여러명에게 송금하기 - 같은 금액
export const useInstiSendMoneyOneToMany =()=>{
    let navigate = useNavigate()

    // const { billMutation } = useBankBookMu({})
    const {refetchBankBook} = useBankBookMuRefetch()
    const [handleError] = useErrorShow()
    const [cp_insti_sendMoney_oneToMany, { loading,  }] = useMutation<cp_insti_sendMoney_oneToManyMutationMutation, cp_insti_sendMoney_oneToManyMutationMutationVariables>(CP_INSTI_SENDMONEY_ONETOMANY_MUTATION, {async onCompleted (data){
        if(data.cp_insti_sendMoney_oneToMany.ok  ){ //
        alert('송금 하였습니다.')
        await client.refetchQueries({
            include: SENDMONEY_REFETCH_ARR,//cppay list refech - bookbank list refetch
            });
            refetchBankBook() //이번달 거래내역 refetch
            // const now = new Date()
            // billMutation(now.getFullYear(), now.getMonth() + 1, now.getDate()) //이번달 거래내역 refetch
        navigate(PAY_HOME)
        }else if(data.cp_insti_sendMoney_oneToMany.error){
            // console.log(data.myChecks.error)
            alert(`송금에 실패하였습니다..\n${data.cp_insti_sendMoney_oneToMany.error}` );
        }
        }, onError: (err) => {
        handleError(err, '송금에 실패하였습니다.')
        } });

    const callMutation=({insti_id, oneuser_id, serveral_ids, money, desciption}:{insti_id:number, oneuser_id:number, serveral_ids:number[], money:number, desciption:string})=>{
        if(loading)return;
        cp_insti_sendMoney_oneToMany({
            variables: {
                cp_instiBankServeralSendMoneyOneToManyInput: { insti_id, oneuser_id, serveral_ids, money, desciption }, //cppay_id:Number(payid),
            },
            });
    }
    return {callMutation, loading}
}

