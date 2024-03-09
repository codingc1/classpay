import { useNavigate } from "react-router-dom";
import { CP_SETTING_HOME_ROUTE_NAME } from "../../../routers/route-name-constants";
import { cls } from "../../../func/basic/string/cls";

import { useMe } from "../../../hooks/user/useMe";
import { isTeacher } from "../../../stores/sub-store-fn/isTeacher";


//설정은 교사만 보여야함
export const LayOutSettingBtn = ({setSidebarOpen}:{
  setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>
}) => {
    let navigate = useNavigate();
    const {data:Medata} = useMe()
    

  // const hiddenCss = ()=>{
  //   if(isTeacher(Medata))return ''
  //   return 'hidden'
  //   // if(!Medata)return 'hidden'
  //   // if(!(Medata.cp_me.position===POSITION.Teacher)){
  //   //   return 'hidden'
  //   // }
  //   // return ''
  // }
  
    return(
        <div className={'px-2' }>
          {isTeacher(Medata) && <button
            onClick={()=>{
              setSidebarOpen(false)
              navigate(CP_SETTING_HOME_ROUTE_NAME)
              }
            }
            className={cls(
              'w-full ', 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
          >
            <div className={cls(
                     'text-gray-400 group-hover:text-gray-500', 'mr-3 h-6 w-6'
                  )}>A</div>
            설정
          </button>}
      </div>
    )
}