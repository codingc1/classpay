import { useNavigate } from "react-router-dom";
import { CheckBoxGroupTwoArr } from "../../../../components/checkbox/checkbox-group-twoarr"
import { CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME, CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME } from "../../../../routers/contains/ecomomy";
import { useLocation } from 'react-router-dom';
import { TwoCheckGroupBoxTradeBasic } from "../../../../components/checkbox/ftc-cehck-group-box";


export const FairTradeCheckBankBookGroupBox = () => {
    let navigate = useNavigate();
    // const location = useLocation();
    //url에 students가 있으면 true
    // const isUrlContion =(str:string)=>location.pathname.includes(str)?true:false
    const notificationMethods = [
        { id: 'resent', title: '거래내역', onChange:()=>{navigate(CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME) }, },
        { id: 'students', title: '학생별', onChange:()=>{navigate(CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME) },}
    ]

    return(
        <TwoCheckGroupBoxTradeBasic btnArr={notificationMethods} />
        // <div className="flex items-center space-y-0">
        // {notificationMethods.map((notificationMethod) => (
        //     <div key={notificationMethod.id} className="flex items-center mr-3">
        //         <input
        //             id={notificationMethod.id}
        //             name="notification-method"
        //             type="radio"
        //             defaultChecked={isUrlContion(notificationMethod.id)}
        //             onChange={notificationMethod.onChange}
        //             className="h-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
        //         />
        //         <label htmlFor={notificationMethod.id} className="ml-1 block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
        //             onClick={notificationMethod.onChange}>
        //             {notificationMethod.title}
        //         </label>
        //     </div>
        // ))}
        // </div>
    )
}   