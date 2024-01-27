import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useReactiveVar } from "@apollo/client";
import { cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store";
import { useMe } from "../../../../hooks/user/useMe";
import { IBankBook } from "../../../../stores/type/cppay-type";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { CP_BANKBOOKS_MONTH_MUTATION } from "../../../../hooks/cp-pay/trade/cp-bill";
import { cp_MyBankBooksMonthMutationMutation, cp_MyBankBooksMonthMutationMutationVariables } from "../../../../hooks/cp-pay/trade/cp-bill.generated";
import { cpPayFn } from "../../../../stores/sub-store-fn/cp-pay-fn";
import { addCommaMan } from "../../../../func/basic/number/addComma";
import { BankBookHistoryMonth } from "./book-history/book-th-month";
import { BankBookHistoryDetail } from "./book-history/th-detail";


//거래내역 
export default function BankBookHistoryHome() {
    let navigate = useNavigate();
    const bookRedux = useReactiveVar(cpPayVar).bankBooks;
   
    const {data:meData, } = useMe()
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  });
    const [nowBook, setNowBook] = useState<IBankBook[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    //bill 다른 파일로 분리하기 - bill-detail.tsx
    // 월 바꾸면 0.8초후에 함수 실행하기, loding중이면 실행x (useEffect는 처음에만)
    // porduct 생산후 결제해야 반영 기능?-isSettle  //eneity 생산불가-isProduce



    // const handlePlusButtonClick = () => {
    //     setCurrentDate(prevDate => {
    //       let newMonth = prevDate.month + 1; let newYear = prevDate.year;
    //       if (newMonth > 12) {
    //         newMonth = 1;  newYear += 1;
    //       }
    //       return { year: newYear, month: newMonth };
    //     });
    //   };
    // const handleMinusButtonClick = () => {
    //     setCurrentDate(prevDate => {
    //     let newMonth = prevDate.month - 1; let newYear = prevDate.year;
    //     if (newMonth < 1) {
    //         newMonth = 12; newYear -= 1;
    //     }
    //     return { year: newYear, month: newMonth };
    //     });
    // };
    //월별 배열[] - useeffect로 아무 데이터도 없으면 mutation

    //특수문자 코드표 https://suusuus.tistory.com/14#google_vignette
    return(
        <div className="w-full min-h-screen flex flex-col items-center bg-slate-200">
        <div className="py-5 h-full    rounded-xl shadow-xl  flex flex-col items-center bg-white" 
        //mt-5 ,height:'500px'
        //minHeight:'500px'
            style={{width:'396px', }}>
            <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0'}}>
                <div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
                <div>나의 통장</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section>
            <section style={{height:'5rem'}} className="w-full flex justify-center items-center border-b-2 border-t-2 border-blue-400 bg-white">
                <div className=" font-bold" style={{fontSize:'1.5rem'}}>{addCommaMan(meData?.cp_me.money||0)}{moneyUnit}</div>
            </section>
            <section className="w-full px-1 bg-white">
                {/* useEffect로 bill데이터 가져옴 */}
                <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBook={setNowBook} isLoading={isLoading} setIsLoading={setIsLoading} />

                {!isLoading && nowBook.map((book, index) => <BankBookHistoryDetail key={'book'+index}bankbook={book} />)}

            </section>
            {/* <div className="mt-5 w-[370px] h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                cursor-pointer" >
                <div>판매물품 추가</div>  
            </div> */}

        </div>
    </div>
    )
}