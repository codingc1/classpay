import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";

//https://www.npmjs.com/package/react-zxing
export const QrScanner = () => {
    let navigate = useNavigate()
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  useEffect(()=>{
    if(result)navigate(-1)
    
  },[result])

  return (
    <div  >
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        {/* <span>{result}</span> */}
        <span>결재할 qr코드를 스캔해 주세요</span>
      </p>
    </div>
  );
};