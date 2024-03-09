


//

import { useState } from "react";
import { CbbRecentBookList } from "./cbb-resent/cbb-recent-book-list";
import { StudentBookBankSubHome } from "./students-book-bank/students-book-bank-subhome";
import { CheckBoxGroupTwoArr } from "../../../../components/checkbox/checkbox-group-twoarr";
import { useNavigate, useSearchParams } from "react-router-dom";

//deprecated--
export const FairTradeBookBankHome=()=>{
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('select');
    
    //radio button
    const [selNum, setSelNum] = useState(0);
    const notificationMethods = [
        { id: 'email', title: '거래내역',num:0,onChange:()=>{setSelNum(0) }, },
        { id: 'sms', title: '학생별',num:1, onChange:()=>{setSelNum(1) },}
    ]
    //최근 거래내역 Recent trade list
    //학생을 클릭하면 navigate to /classpay/institution/fairTradeBookBank/:number
    
return(
    <div className="w-full mt-3 px-3">
        {/* <h1>통장조회</h1> */}
        <CheckBoxGroupTwoArr boxArr={notificationMethods} selNum={selNum} />
        {/* <div className="flex items-center space-y-0">
            {notificationMethods.map((notificationMethod) => (
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
            </div> */}
        {selNum===0 && <CbbRecentBookList />}
        {selNum===1 && <StudentBookBankSubHome />}
    </div>
)
}