import { useNavigate } from "react-router-dom";
import BaseBgGray from "../../components/layout/basic-component/base-bggray"
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import {IoQrCodeOutline} from 'react-icons/io5'; //https://react-icons.github.io/react-icons/icons?name=io5
import { AiOutlineScan } from 'react-icons/ai';
import { BuyQrScan } from "./buy/buy-qr-scan-popup";
import { useState } from "react";
import { BuyQrcodePopup } from "./buy/buy-qrcode-popup";



export const TradeHome=()=>{
    let navigate = useNavigate();
    const [isBuyMadal, setIsBuyModal] = useState(false)
    const [isQrcode, setIsQrcode] = useState(false)

    //qrcode 생성1 https://velog.io/@bishoe01/React%EB%A1%9C-QR%EC%BD%94%EB%93%9C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
    //qrcode 생성2 https://velog.io/@jiwonyyy/QR%EC%BD%94%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-qrcode.react
    return(
        <BaseBgGray backgroundColor={'bg-slate-200'} onClick={()=>navigate(-1)}>


            
            {!isQrcode && <div className="w-full p-3 flex flex-col justify-center items-center bg-white rounded-lg">
                <div className="w-full mt-3 grid grid-cols-2 gap-x-4 font-bold">
                    <div className="px-2">결제하기</div>
                    <div className="px-2"></div>
                </div>

                <div className="w-full h-30 mt-3 grid grid-cols-2 gap-x-4 text-white">
                <div className="p-3 bg-indigo-300 rounded-lg text-sm  cursor-pointer"
                    onClick={()=>setIsBuyModal(true)}
                    >
                    <div className="font-thin">QR코드</div>
                    <div className=" font-bold text-lg" >스캔하기</div>
                    <div className="flex justify-end text-5xl"><AiOutlineScan /></div>
                </div>
                <div className="p-3 bg-indigo-400 rounded-lg text-sm  cursor-pointer" onClick={()=>setIsQrcode(true)}>
                    <div className="font-thin">QR코드</div>
                    <div className=" font-bold text-lg">보여주기</div>
                    <div className="flex justify-end text-5xl"><IoQrCodeOutline /></div>
                </div>
                </div>
            </div>}

            {isBuyMadal && <BuyQrScan setIsBuyModal={setIsBuyModal} />}
            {isQrcode && <BuyQrcodePopup setIsQrcode={setIsQrcode} />}
        </BaseBgGray>
    )
}