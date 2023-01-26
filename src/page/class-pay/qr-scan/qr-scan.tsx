import { useState } from 'react'


//react에서 cavas활용하기 https://www.google.com/search?q=typescript+canvaselement&oq=&aqs=chrome.5.35i39i362l8.781015j0j7&sourceid=chrome&ie=UTF-8
export const QrScan=()=>{

    //걍 이거 쓰자 ㅠㅠ
    //https://velog.io/@gsh723/QR-CODE-QR-CODE-SCANNER
    //https://www.npmjs.com/package/react-qr-code
    
    // const video = document.createElement("video");
    // let canvasElement = document.getElementById("qr-canvas") as HTMLCanvasElement;;
    // let canvas = canvasElement.getContext("2d");


    // const qrResult = document.getElementById("qr-result") as HTMLDivElement | null;
    // const outputData = document.getElementById("outputData") as HTMLDivElement | null;
    

    // const [scanning, setScanning] = useState(false)
    // //@ts-ignore
    // qrcode.callback =(res:any)=>{
    //     if(res && outputData){
    //         outputData.innerText = res;
    //         setScanning(true)
    //     }
    //     if(video && video.srcObject){
    //         //@ts-ignore
    //         video.srcObject.getTracks().forEach(track => {
    //             track.stop();
    //           });    
    //     }
        
    //     if(qrResult)qrResult.hidden = false;
    //     canvasElement.hidden = true;
    // }

    // const handleStart=()=>{
    //     navigator.mediaDevices
    //     .getUserMedia({ video: { facingMode: "environment" } })
    //     .then(function(stream) {
    //       setScanning(true)
    //       if(qrResult)qrResult.hidden = true;
          
    //       canvasElement.hidden = false;
    //       //@ts-ignore
    //       video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    //       video.srcObject = stream;
    //       video.play();
    //       tick();
    //       scan();
    //     });
    // }

    // function tick() {
    //     canvasElement.height = video.videoHeight;
    //     canvasElement.width = video.videoWidth;
    //     if(canvas)canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      
    //     scanning && requestAnimationFrame(tick);
    //   }

    // function scan() {
    //     try {
    //       qrcode.decode();
    //     } catch (e) {
    //       setTimeout(scan, 300);
    //     }
    //   }

    return(
        <div>
            <div>scan</div>
            <button>scan start</button>

            <canvas id="qr-canvas"></canvas>

            <div id='qr-result'></div>
            <div id='outputData'></div>
            
        </div>
    )
}