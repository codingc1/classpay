import useErrorShow from "../../../func/sys/err/useErrShow";
import { cp_getBuyTmpTradeMutationDocument,cp_buyingTradeMutationDocument } from "../../../hooks/cp-pay/trade/cp-buying.generated";
import { editCpPayVar } from "../../../stores/cp-pay-store";
import { client } from "../../../apollo";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";
import { useNavigate } from "react-router-dom";
import { CP_PAY_HOME_ROUTE_NAME } from "../../../routers/route-name-constants";
import { CP_ME_QUERY } from "../../../hooks/user/useMe";

//buy-qr-scan-popup
//큐알코드 스캔하면 프로덕트 정보 가져오기
export const useBuyGetTradeTmp=() => {


    const [handleError] = useErrorShow()
    const getTradeTmp =({code,setIsScanCode}:{code:string,setIsScanCode:React.Dispatch<React.SetStateAction<boolean>>}) => {
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
      mutation:cp_getBuyTmpTradeMutationDocument,
      variables:{
        cp_getTradeTmpCodeInput:{ code} //cppay_id:payid,
      }
    })
    .then(({data})=>{
      // console.log(data, ': data res')
      if(data &&data.cp_getBuyTmpTrade.ok && data.cp_getBuyTmpTrade.result){
        editCpPayVar.trade.setTmpcode(data.cp_getBuyTmpTrade.result)
  
      }else if(data?.cp_getBuyTmpTrade.error){
        alert(data.cp_getBuyTmpTrade.error)
      }
    })
    .catch(e => {handleError(e, 'cp_getBuyTmpTradeMutation');})
    .finally(()=>setIsScanCode(false))
    }

    return [getTradeTmp]
}

//결제하기 BuyQrScan
export const useBuyIngTradeSubmit =() => {
  let navigate = useNavigate()
    const [handleError] = useErrorShow()
    const buyIngTradeSubmit=({code,setIsBuyModal}:{code:string,setIsBuyModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_buyingTradeMutationDocument,
            variables:{
              cp_getTradeTmpCodeInput:{ code} //cppay_id:payid,
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_buyingTrade.ok ){
                alert('결제하였습니다.')
              // editCpPayVar.trade.setTmpcode(cpPayFn.store.tradeTmpCode)
              await client.refetchQueries({
                include: [CP_ME_QUERY], //money refech
              });

              navigate(CP_PAY_HOME_ROUTE_NAME)
            }else if(data?.cp_buyingTrade.error){
              alert(data.cp_buyingTrade.error)
            }
          })
          .catch(e => {handleError(e, 'buyIngTradeSubmit');})
          .finally(()=>{
            editCpPayVar.trade.setTmpcode(cpPayFn.store.tradeTmpCode)
            setIsBuyModal(false)
          })
    }

      return [buyIngTradeSubmit]
}