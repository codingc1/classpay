import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";
import NomadButton from "../../../components/button/nomad-btn";
import PopupCenter from "../../../components/popup/sm-center/popup-center";
import { addCommaMan } from "../../../func/basic/number/addComma";
import { cpPayVar, editCpPayVar } from "../../../stores/cp-pay-store";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";

//https://www.npmjs.com/package/react-zxing
export const BuyQrScan=({setIsBuyModal}:{setIsBuyModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    let navigate = useNavigate()
    const tradeTmp = useReactiveVar(cpPayVar).trade.tradeTmpCode;
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  }); 

  const [isScanCode, setIsScanCode] = useState(true)
 
  useEffect(()=>{
    //tmptrade_id
    // if(result)navigate(-1)
    if(result){
      const resData = JSON.parse(result)
      console.log(resData, 'res')
      editCpPayVar.trade.setTmpcode(resData) //String입력으로 바꿔야함~~~~~~~~~
      setIsScanCode(false) //scan Canvas close
    }
    return ()=>editCpPayVar.trade.setTmpcode(cpPayFn.store.tradeTmpCode)
  },[result]) 

  const activePopupClose=()=>{ //닫기 - 그 데이터 삭제
    setIsScanCode(false) //scan Canvas close
    setIsBuyModal(false) //이 컴포넌트 cloae
  }
  const contents =(
    <div  >
      <video ref={ref} />
      <p>
        {/* <span>Last result:</span> */}
        {/* <span>{result}</span> */}
        <span>결재할 qr코드를 스캔해 주세요</span>
      </p>
    </div>
  )

  const buySubmit=() => {
    
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
      {isScanCode===false && tradeTmp.qty >0 && <PopupCenter onClose={activePopupClose} contents={buyContents} />}
      {isScanCode && <PopupCenter onClose={activePopupClose} contents={contents} />}
    </>

  );
}