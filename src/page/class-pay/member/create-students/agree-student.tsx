import { useState } from "react";
import { serverAddress } from "../../../../api/app-setting";




export const AgreeStudent=()=>{
  const [isDownloading, setIsDownloading] = useState(false);
  
//파일 다운로드 https://velog.io/@sarang_daddy/React-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C
  const handleFileDownload = () => {
    if(isDownloading) return;
    
      const filename = '/explain/expamle-hwp'
      setIsDownloading(true);
      const fileUrl = `${serverAddress()}${filename}`;
  
      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement("a");
          a.href = url;
          // a.download = filename.split("/").pop() || "download";
          a.download = '동의서 예제.hwp'
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a); 
          setIsDownloading(false);
        })
        .catch((error) => {
          console.error("파일 다운로드 오류:", error);
          setIsDownloading(false);
        });
    };

    return(
        <div className=" text-blue-400 cursor-pointer" onClick={handleFileDownload}>보호자 동의 예제 파일</div>
    )
}