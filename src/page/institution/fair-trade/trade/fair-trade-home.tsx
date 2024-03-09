import { useState } from "react";
import { CbbRecentBookList } from "../book-bank/cbb-resent/cbb-recent-book-list";
import { StudentBookBankSubHome } from "../book-bank/students-book-bank/students-book-bank-subhome";
import { CheckBoxGroupTwoArr } from "../../../../components/checkbox/checkbox-group-twoarr";

//deprecated--
export const FairTradekHome=()=>{
    const [selNum, setSelNum] = useState(0);
    const notificationMethods = [ //fair-book-bank-home.tsx과 동일 //합칠까?
        { id: 'email', title: '거래내역',num:0,onChange:()=>{setSelNum(0) }, },
        { id: 'sms', title: '학생별',num:1, onChange:()=>{setSelNum(1) },}
    ]
    //최근 거래내역 Recent trade list
    //학생을 클릭하면 navigate to /classpay/institution/fairTradeBookBank/:number
    
return(
    <div className="w-full mt-3 px-3">
        {/* <h1>통장조회</h1> */}
        <CheckBoxGroupTwoArr boxArr={notificationMethods} selNum={selNum} />
        {selNum===0 && <CbbRecentBookList />}
        {selNum===1 && <StudentBookBankSubHome />}
    </div>
)
}