import { useNavigate } from "react-router-dom";
import { CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME, CP_FAIR_TRADE_MARKETTRADE_STUDENTS_ROUTE_NAME } from "../../../../routers/contains/ecomomy";
import { TwoCheckGroupBoxTradeBasic } from "../../../../components/checkbox/ftc-cehck-group-box";


export const FairTradeCheckMarketTradeGroupBox = () => {
    let navigate = useNavigate();

    const notificationMethods = [
        { id: 'resent', title: '거래내역', onChange:()=>{navigate(CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME) }, },
        { id: 'students', title: '학생별', onChange:()=>{navigate(CP_FAIR_TRADE_MARKETTRADE_STUDENTS_ROUTE_NAME) },}
    ]

    return(
        <TwoCheckGroupBoxTradeBasic btnArr={notificationMethods} />
    )
}   