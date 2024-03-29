import { useMutation } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { client } from "../../../../apollo";
import { useNavigate } from "react-router-dom";
import { CP_ME_QUERY } from "../../../user/useMe";
import { PAY_HOME } from "../../../../routers/route-name-constants";
import { CP_INSTI_SENDMONEY_ONETOMANY_MUTATION, CP_INSTI_SENDMONEY_ONE_MUTATION } from "./cp-bankbook";
import { cp_insti_sendMoneyMutationMutation, cp_insti_sendMoneyMutationMutationVariables, cp_insti_sendMoney_oneToManyMutationMutation, cp_insti_sendMoney_oneToManyMutationMutationVariables } from "./cp-bankbook.generated";
import { useBankBookMuRefetch } from "./useBankBookMu";
import { SENDMONEY_REFETCH_ARR } from "../sendRefetch";

//은행에서 여러명에게 송금하기 - 같은 금액
export const useInstiSendMoneyOne =()=>{
    let navigate = useNavigate()

    // const { billMutation } = useBankBookMu({})
    const {refetchBankBook} = useBankBookMuRefetch()
    const [handleError] = useErrorShow()
    const [cp_insti_sendMoney_oneMutation, { loading,  }] = useMutation<cp_insti_sendMoneyMutationMutation, cp_insti_sendMoneyMutationMutationVariables>(CP_INSTI_SENDMONEY_ONE_MUTATION, {async onCompleted (data){
        if(data.cp_insti_sendMoney.ok  ){ //
        alert('송금 하였습니다.')
        await client.refetchQueries({ //student list refetch 필요함..
            include: SENDMONEY_REFETCH_ARR,//user list refech, bookbank list refetch
            });
            refetchBankBook() //이번달 거래내역 refetch
            // const now = new Date()
            // billMutation(now.getFullYear(), now.getMonth() + 1,now.getDate() ) //이번달 거래내역 refetch
        navigate(PAY_HOME)
        }else if(data.cp_insti_sendMoney.error){
            // console.log(data.myChecks.error)
            alert(`송금에 실패하였습니다..\n${data.cp_insti_sendMoney.error}` );
        }
        }, onError: (err) => {
        handleError(err, '송금에 실패하였습니다.')
        } });

    const callMutation=({insti_id, sender_id, receiver_id, money, desciption}:{insti_id:number, sender_id:number, receiver_id:number, money:number, desciption:string})=>{
        if(loading)return;
        cp_insti_sendMoney_oneMutation({
            variables: {
                cp_instiAcitveSendMoneyInput: { insti_id, sender_id, receiver_id, money, desciption }, //cppay_id:Number(payid),
            },
            });
    }
    return {callMutation, loading}
}

