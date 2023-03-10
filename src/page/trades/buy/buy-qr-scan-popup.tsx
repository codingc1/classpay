import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useZxing } from "react-zxing";
import NomadButton from "../../../components/button/nomad-btn";
import PopupCenter from "../../../components/popup/sm-center/popup-center";
import { addCommaMan } from "../../../func/basic/number/addComma";

import { cpPayVar, editCpPayVar } from "../../../stores/cp-pay-store";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";
import {  useBuyGetTradeTmp, useBuyIngTradeSubmit } from "./useBuyGetTradeTmp";

//https://www.npmjs.com/package/react-zxing
export const BuyQrScan=({setIsBuyModal}:{setIsBuyModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    let navigate = useNavigate()
    const {payid} = useParams(); 
    const tradeTmp = useReactiveVar(cpPayVar).trade.tradeTmpCode;
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  }); 

  const [isScanCode, setIsScanCode] = useState(true)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)

 const contents =( //1번
 <div  >
   <video ref={ref} />
   <p>
     {/* <span>Last result:</span> */}
     {/* <span>{result}</span> */}
     <span>결재할 qr코드를 스캔해 주세요</span>
   </p>
 </div>
)
//2번
 //qr코드가 들어오면 //tmpcode를 바탕으로 tradeTmp를 가져옴
 const [getTradeTmp] = useBuyGetTradeTmp()
  useEffect(()=>{
    //tmptrade_id
    // if(result)navigate(-1)
    if(result){ 
      const resData = JSON.parse(result)
      console.log(resData, 'res')
      getTradeTmp({payid:Number(payid), code:resData, setIsScanCode}) //=>이후 에 상품 정보 보여주며 결제하기 나옴
      // editCpPayVar.trade.setTmpcode({...tradeTmp, code:resData })  //String입력으로 바꿔야함~~~~~~~~~
      
    }
    return ()=>editCpPayVar.trade.setTmpcode(cpPayFn.store.tradeTmpCode)
  },[result]) 

  const activePopupClose=()=>{ //닫기 - 그 데이터 삭제
    setIsScanCode(false) //scan Canvas close
    setIsBuyModal(false) //이 컴포넌트 cloae
  }

 //3번
 const [buyIngTradeSubmit]=useBuyIngTradeSubmit()
  const buySubmit=() => {
    setIsSubmitLoading(true)
    buyIngTradeSubmit({payid:Number(payid), code:tradeTmp.code, setIsBuyModal})
  }
  const buyContents =(
    <div className="w-full p-12">
        <div className="mb-5 text-base">
            {/* <div className='w-full text-center'>판매하기</div> */}
            <div className='w-full text-center'>{tradeTmp.name} {addCommaMan(tradeTmp.price)}원 x {tradeTmp.qty}개</div>
            <div className='w-full text-center'>결제금액 : {addCommaMan(tradeTmp.price*tradeTmp.qty)}원</div>

        </div>
        <NomadButton text={ "결제하기"} onClick={buySubmit}/>          
    </div>
)
  return (
    <>
      {isScanCode===false && tradeTmp.qty >0 && isSubmitLoading === false && 
        <PopupCenter onClose={activePopupClose} contents={buyContents} />}
      {isScanCode && <PopupCenter onClose={activePopupClose} contents={contents} />}
    </>

  );
}