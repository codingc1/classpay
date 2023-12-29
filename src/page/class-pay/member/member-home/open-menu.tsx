import { Navigate, useNavigate } from "react-router-dom"
import { IFstudnet } from "../cp-member-home"
import { CP_UserDeleteBtn } from "../cp-user-delete"
import { CP_PAY_MODIFY_MEMBER_ROUTE_NAME } from "../../../../routers/route-name-constants"




//click on the menu icon to open the menu
export const OpenMenu = ({position, onClose, user, setResetPassModel}:{position:{x:number,y:number},
    onClose:()=>void, user:IFstudnet, setResetPassModel:()=>void}) => {
    let navigate = useNavigate()
    const width = 150
    const height = 150

    const moveModify = ()=>{
        navigate(CP_PAY_MODIFY_MEMBER_ROUTE_NAME)
    }
    // const resetPasswordClick=()=>{ //reset password start
    //     setResetPassModel()
    // }

    //rgba(0, 0, 0, 0.5)
    return(
        <div>
        <div style={{boxSizing: 'border-box', position:'fixed', top:0, left:0, bottom:0, right:0, zIndex: 1000,
                overflow: 'auto', outline:0,}}
                // className={className}
                // onClick={(e)=>onMaskClick(e)}
                // tabIndex="-1"
            className="border-2 border-gray-200 transition-colors" onClick={onClose}

        >
        </div>
        <div style={{boxSizing: 'border-box', display: 'block', position:'fixed', left:position.x-10, top:position.y+10, width: `${width}px`,height: `${height}px`, zIndex: 1001,
                outline:0, backgroundColor: 'white',boxShadow:'2px 2px 5px silver',}}
                // className={className}
                // onClick={(e)=>onMaskClick(e)}
                // tabIndex="-1"
            className="border-2 border-gray-200 transition-colors"
        >
            <div className="  p-2">
                <div className="mt-1 p-2 cursor-pointer" onClick={setResetPassModel}>비번 초기화</div>
                <div className="p-2 hover:bg-blue-200 cursor-pointer" onClick={moveModify}>계정 변경</div>
                <div className="mt-1 p-2 cursor-pointer"><CP_UserDeleteBtn user={user} /></div>
                {/* <div className="mt-1 p-2 cursor-pointer">계정 삭제</div> */}
            </div>
        </div>
    </div>
    )
}