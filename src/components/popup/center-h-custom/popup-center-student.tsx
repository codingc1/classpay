import React, { ReactNode } from 'react'
import Portal from '../../modal/portal'
import PopupCenterContent from '../sm-center/popup-cener-content'
import { PopuCenterCloseBtn } from '../sm-center/popup-center-close-btn'

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
function PopupCenterStudent({  onClose, title, contents=defaultContents, option, isTopClose  }:
    {  isTopClose?:boolean, onClose:()=>void, title?:string, contents?: ReactNode ,
        option:{width:number, height:number, }
    }) { //className, 

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
    const calWidth = (width:number)=>{
        return 50-Math.floor(((width/2)/window.innerWidth)*100)
    }
    const calTop = (height:number)=>{
        return 50-Math.floor((height/2)/window.innerHeight*100)-5
    }

    return ( //
        <Portal elementId="modal">               
            <div style={{boxSizing: 'border-box', display: 'block', position:'fixed', top:0, right:0, bottom:0, left:0, zIndex: 1000,
                overflow: 'auto', outline:0, backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
               onClick={close}
                // className={className}
                // onClick={(e)=>onMaskClick(e)}
                // tabIndex="-1"
            >
                {/* transform: 'translateY(-50%)', */}
              {/* <div  className={` flex justify-center items-center `} style={{width:option.width, height:option.height}}> */}
              {/* maxHeight:'600px', */}
              <div style={{ boxSizing: 'border-box', position: 'fixed',width: `${option.width}px`, height: `${option.height}px`,  zIndex: 1001,
                top: `${calTop(option.height)}%`,left:`${calWidth(option.width)}%`,  margin: '0 auto', padding: '5px 0px', border:'1px solid black'}}
                className=" bg-white" onClick={(e)=>e.stopPropagation()}>
                <div className='flex flex-col items-center'></div>
                { isTopClose && <PopuCenterCloseBtn  close={close} />}
                    {title && <div className="px-2 text-lg font-bold">{title}</div>}
                    {contents}
            </div>
            </div>
        </Portal>
    )
}



export default React.memo(PopupCenterStudent)


