import useErrorShow from "../../../func/sys/err/useErrShow";
import { cp_getBuyTmpTradeMutationDocument,cp_buyingTradeMutationDocument } from "../../../hooks/cp-pay/trade/cp-buying.generated";
import { editCpPayVar } from "../../../stores/cp-pay-store";
import { client } from "../../../apollo";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";

//buy-qr-scan-popup
//큐알코드 스캔하면 프로덕트 정보 가져오기
export const useBuyGetTradeTmp=() => {


    const [handleError] = useErrorShow()
    const getTradeTmp =({payid,code,setIsScanCode}:{payid:number,code:string,setIsScanCode:React.Dispatch<React.SetStateAction<boolean>>}) => {
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
      mutation:cp_getBuyTmpTradeMutationDocument,
      variables:{
        cp_getTradeTmpCodeInput:{cppay_id:payid, code}
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

export const useBuyIngTradeSubmit =() => {
    const [handleError] = useErrorShow()
    const buyIngTradeSubmit=({payid,code,setIsBuyModal}:{payid:number,code:string,setIsBuyModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_buyingTradeMutationDocument,
            variables:{
              cp_getTradeTmpCodeInput:{cppay_id:payid, code}
            }
          })
          .then(({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_buyingTrade.ok ){
                alert('결제하였습니다.')
            //   editCpPayVar.trade.setTmpcode(data.cp_buyingTrade.result)
        
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