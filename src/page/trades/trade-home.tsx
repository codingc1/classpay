import { useNavigate } from "react-router-dom";
import BaseBgGray from "../../components/layout/basic-component/base-bggray"
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import {IoQrCodeOutline} from 'react-icons/io5'; //https://react-icons.github.io/react-icons/icons?name=io5
import { AiOutlineScan } from 'react-icons/ai';
import { BuyQrScan } from "./buy/buy-qr-scan-popup";
import { useState } from "react";
import { BuyQrcodePopup } from "./buy/buy-qrcode-popup";
import { useWindowSizeTrans } from "../../func/html/useWidthTrans";
import { cls } from "../../func/basic/string/cls";
import { CSS_LEN, CSS_TEST } from "../../func/html/width-contain/css-contain";
import { TitleAndLine } from "../../components/title/title-line";


//결제하기
export const TradeHome=()=>{
    let navigate = useNavigate();
    const [isBuyMadal, setIsBuyModal] = useState(false)
    const [isQrcode, setIsQrcode] = useState(false)

    const { transW400,chk}= useWindowSizeTrans()
    const marginT = chk.w.md ? 'mt-5' : '' //md보다 작으면 mt-5
    //qrcode 생성1 https://velog.io/@bishoe01/React%EB%A1%9C-QR%EC%BD%94%EB%93%9C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
    //qrcode 생성2 https://velog.io/@jiwonyyy/QR%EC%BD%94%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-qrcode.react
    return(
        // <BaseBgGray backgroundColor={'bg-slate-200'} onClick={()=>navigate(-1)}>
<div className="w-full min-h-screen flex flex-col items-center bg-slate-200 ">
<div className={cls('mt-5',"rounded-xl shadow-xl bg-white flex flex-col items-center")} style={{ width: transW400(CSS_TEST.basic_wide), minHeight: CSS_LEN.min_height+'px' }}>

            
            {!isQrcode && <div className="w-full p-3 flex flex-col justify-center items-center bg-white rounded-lg">
                <TitleAndLine title="결제하기" />
                {/* <div className="w-full mt-3 grid grid-cols-2 gap-x-4 font-bold">
                    <div className="px-2">결제하기</div>
                    <div className="px-2"></div>
                </div> */}

                <div className="w-full h-30 mt-3 grid grid-cols-2 gap-x-4 text-white">
                {/* <div className="p-3 bg-indigo-300 rounded-lg text-sm  cursor-pointer"
                    onClick={()=>setIsBuyModal(true)}
                    >
                    <div className="font-thin">QR코드</div>
                    <div className=" font-bold text-lg" >스캔하기</div>
                    <div className="flex justify-end text-5xl"><AiOutlineScan /></div>
                </div> */}
                <div className="p-3 flex flex-col justify-center items-center bg-indigo-300 rounded-lg text-sm  cursor-pointer"
                    onClick={()=>setIsBuyModal(true)}
                    >
                    <div className=" font-semibold text-base" >QR코드 스캔</div>
                    <div className="mt-1 flex justify-end text-5xl"><AiOutlineScan /></div>
                </div>
                {/* <div className="p-3 bg-indigo-400 rounded-lg text-sm  cursor-pointer" onClick={()=>setIsQrcode(true)}>
                    <div className="font-thin">QR코드</div>
                    <div className=" font-bold text-lg">보여주기</div>
                    <div className="flex justify-end text-5xl"><IoQrCodeOutline /></div>
                </div> */}
                <div className="p-3 flex flex-col justify-center items-center bg-indigo-400 rounded-lg text-sm  cursor-pointer" onClick={()=>setIsQrcode(true)}>
                    <div className=" font-semibold text-base" >QR코드 보여주기</div>
                    <div className="mt-1 flex justify-end text-5xl"><IoQrCodeOutline /></div>
                </div>
                </div>
            </div>}

            {isBuyMadal && <BuyQrScan setIsBuyModal={setIsBuyModal} />}
            {isQrcode && <BuyQrcodePopup setIsQrcode={setIsQrcode} />}
        {/* </BaseBgGray> */}
        </div>
        </div>
    )
}