import { useState } from "react";
import BaseMax400 from "../../../../components/layout/basic-component/base-max400";
import { InstiHeader } from "../../insti-home/insti-header";
import { FairTradeCheckMarketTradeGroupBox } from "./ftc-markettrade-group-box";
import { FTTMarketHistoryMonthContainer } from "./market-resent/market-th-month-container";
import { FairTradeMarketResentDetail } from "./market-resent/market-resent-th-detail";
import { IBill } from "../../../../stores/cp-pay-store";


//최근 거래
export const FairtradeMarkettradeRecenHome = () => {

    const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1,day: new Date().getDate()});
    const [nowBill, setBill] = useState<IBill[]>([]);
    const [isLoading, setIsLoading] = useState(false); 

    // useBillTeacherAllMu

    return(
    <BaseMax400>
        <InstiHeader />
        <div className="w-full mt-3 px-3">
            
            <FairTradeCheckMarketTradeGroupBox />
            <section className="w-full px-1 bg-white">
                {/* <BankBookHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBook={setNowBook} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
                <FTTMarketHistoryMonthContainer currentDate={currentDate} setCurrentDate={setCurrentDate} setBill={setBill} isLoading={isLoading} setIsLoading={setIsLoading} />
                <ul style={{maxHeight:'80vh',overflowY:'auto'}}>
                    {!isLoading && nowBill.map((bill, index) => <FairTradeMarketResentDetail key={'bill'+index} bill={bill} />)}
                </ul>
                <div className="py-2"></div>
            </section>
        </div>
    </BaseMax400>
    )
}