import React from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { useMe } from '../../../hooks/user/useMe';


export const BuyQrcodePopup=({setIsQrcode}:{
    setIsQrcode:React.Dispatch<React.SetStateAction<boolean>>
    })=> {
    const {data:meData} = useMe()
    const pay =meData?.cp_me.joinclasspay

    const qrCodeValue =()=>{
        if(!pay)return ''; if(!meData)return '';
        const me = meData.cp_me
        return `${pay.className}/${me.id}:${'sort'}`
    }

return(
    <div className='w-full h-full  ' onClick={()=>setIsQrcode(false)}>
    <section className='w-full h-[50vh] flex items-center justify-center flex-col' >
            <div className='py-3 text-primary text-2xl mb-4 font-semibold'>{meData?.cp_me.name||''}</div>
            {qrCodeValue() && <QRCodeCanvas
                className='border-primary border-4 rounded-xl'
                includeMargin
                fgColor="#393E46"
                size={200}
                value={qrCodeValue()} />}
            {!qrCodeValue() && <div className='w-full text-center text-primary text-3xl font-semibold'>QR코드를 생성할 수 없습니다.</div>}
    </section>
    </div>
)

}