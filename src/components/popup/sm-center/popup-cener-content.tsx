import React, { ReactNode, useEffect } from 'react'
import { PopuCenterCloseBtn } from './popup-center-close-btn'

 
//효율적인 모달??
//모양만 팝업이고 실제는 그냥 모달
//https://medium.com/h3o/portal-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-modal-%EC%82%AC%EC%9A%A9-ae081e8463ee
function PopupCenterContent({  onClose, contents }:
    {  onClose:()=>void,contents: ReactNode, }, ) { //className, 

    const close = () => { 
        onClose()        
    }

    return (
        <div
        //  tabIndex="0"  
        
        style={{ boxSizing: 'border-box',// width: `${360}px`,maxWidth: '480px',  height: `${300}px`, padding: '20px 20px', 
            border:'1px solid black'}}
        className=" w-full max-w-sm min-h-screen bg-white">
            <div className='w-full flex flex-col items-center'>
            { <PopuCenterCloseBtn  close={close} />}
                {/* <div> 
                    <a href="https://www.pping.kr" rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                        <img src={img} style={{ width: '100%', height: '100%' }} alt="" />
                        content
                    </a>
                </div> */}
                {contents}  
                
            </div>
        </div>

    )
}



export default React.memo(PopupCenterContent)


