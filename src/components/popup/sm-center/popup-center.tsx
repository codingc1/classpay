import React, { ReactNode } from 'react'
import Portal from '../../modal/portal'
import PopupCenterContent from './popup-cener-content'

// import img from 'components/popup/img/1667.jpg'
 const defaultContents =<div><div className=" text-sm">
 <div>title</div>
 <div className="mt-2 text-xs"> 
  content
 {/* {el.content.split("\n").map((line, memotextindex) => <div className="text-left" key={memotextindex}>{line}<br /></div>)} */}
 </div>
 <br />
 </div>
</div>
//여러 팝업을 한 화면에
//https://medium.com/h3o/portal-%EC%82%AC%EC%9A%A9%EC%9C%BC%EB%A1%9C-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-modal-%EC%82%AC%EC%9A%A9-ae081e8463ee
function PopupCenter({  onClose, contents=defaultContents  }:
    {  onClose:()=>void, contents?: ReactNode}) { //className, 

    // const onMaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     if(maskClosable){
    //         if (e.target === e.currentTarget) {
    //             onClose(popupItem)
    //         }
    //     }
        
    // }


    const close = () => { 
        onClose() 
    }

    return (
        <Portal elementId="modal">               
            <div style={{boxSizing: 'border-box', display: 'block', position:'fixed', top:0, right:0, bottom:0, left:0, zIndex: 1000,
                overflow: 'auto', outline:0, backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
               
                // className={className}
                // onClick={(e)=>onMaskClick(e)}
                // tabIndex="-1"
            >
                {/* transform: 'translateY(-50%)', */}
              <div  className="w-full min-h-full flex justify-center items-center ">
              
                    <PopupCenterContent 
                      onClose={onClose}  
                      contents={ 
                        contents 
                    //       <div><div className=" text-sm">
                    //       <div>title</div>
                    //       <div className="mt-2 text-xs"> 
                    //        content
                    //       {el.content.split("\n").map((line, memotextindex) => <div className="text-left" key={memotextindex}>{line}<br /></div>)}
                    //       </div>
                    //       <br />
                    //       </div>
                    //   </div>
                      }
                      
                    />
            </div>
            </div>
        </Portal>
    )
}



export default React.memo(PopupCenter)


