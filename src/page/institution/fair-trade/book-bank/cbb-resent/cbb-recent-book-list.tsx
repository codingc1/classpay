import { useReactiveVar } from "@apollo/client";
import { useMe } from "../../../../../hooks/user/useMe";
import { cpPayVar } from "../../../../../stores/cp-pay-store";
import { useState } from "react";
import { IBankBook } from "../../../../../stores/type/cppay-type";
import { BankBookHistoryMonth } from "../../../../class-pay/economy/bankbook/book-history/book-th-month";
import { CBBHistoryMonthContainer } from "./cbb-th-month-container";
import { CBBankBookHistoryDetail } from "./cbb-book-th-detail";
import BaseMax400 from "../../../../../components/layout/basic-component/base-max400";
import { InstiHeader } from "../../../insti-home/insti-header";
import { FairTradeCheckBankBookGroupBox } from "../ftc-bankbook-group-box";
import { DateObj } from "../../../../../utils/date/dateObj";




//최근 거래
export const CbbRecentBookList = () => {

    const [currentDate, setCurrentDate] = useState(DateObj.today);
    const [nowBook, setNowBook] = useState<IBankBook[]>([]);
    const [isLoading, setIsLoading] = useState(false); 

     

    return(
    <BaseMax400>
        <InstiHeader />
        <div className="w-full mt-3 px-3">
            <FairTradeCheckBankBookGroupBox />
            <section className="w-full px-1 bg-white bankbookDetailHeight">
                {/* <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBook={setNowBook} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
                <CBBHistoryMonthContainer currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBook={setNowBook} isLoading={isLoading} setIsLoading={setIsLoading} />
                {/* <ul style={{maxHeight:'80vh',overflowY:'auto'}}> */}
                {!isLoading && nowBook.map((book, index) => <CBBankBookHistoryDetail key={'book'+index}bankbook={book} />)}
                {/* </ul> */}
                <div className="py-2"></div>
            </section>
        </div>
    </BaseMax400>
    )
}