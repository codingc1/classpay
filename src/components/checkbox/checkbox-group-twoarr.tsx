
//depreacted
//두개의 체크박스 그룹을 만들어주는 컴포넌트
export const CheckBoxGroupTwoArr = ({boxArr,selNum}:{
    boxArr:{id:string, title:string, num:number, onChange:()=>void}[],
    selNum:number,
}) => {

return(
    <div className="flex items-center space-y-0">
            {boxArr.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center mr-3">
                    <input
                        id={notificationMethod.id}
                        name="notification-method"
                        type="radio"
                        defaultChecked={notificationMethod.num === selNum}
                        onChange={notificationMethod.onChange}
                        className="h-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor={notificationMethod.id} className="ml-1 block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                        onClick={notificationMethod.onChange}>
                        {notificationMethod.title}
                    </label>
                </div>
            ))}
            </div>
)
}