import { InstiBankOuter } from "../../page/institution/bank/insti-bank-outer";
import { InstiCenterBankOuter } from "../../page/institution/bank/insti-center-bank-outer";
import { CbbRecentBookList } from "../../page/institution/fair-trade/book-bank/cbb-resent/cbb-recent-book-list";
import { OneStudnetBookBank } from "../../page/institution/fair-trade/book-bank/students-book-bank/one-student-bookbank";
import { StudentBookBankSubHome } from "../../page/institution/fair-trade/book-bank/students-book-bank/students-book-bank-subhome";
import { FairTradeOuter } from "../../page/institution/fair-trade/fair-trade-check-home";
import { FairtradeMarkettradeRecenHome } from "../../page/institution/fair-trade/trade/ftt-recent-home";
import { InstitutionHome } from "../../page/institution/institution-home";
import { CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME, CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME, CP_FAIR_TRADE_ROUTE_NAME, CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME, CP_INSTITUTION_BANK_ROUTE_NAME, CP_INSTITUTION_CENTERBANK_ROUTE_NAME, CP_INSTITUTION_HOME_ROUTE_NAME } from "../contains/ecomomy";


 

export const otherInstitutionRouters =[ //은행
  { path: CP_INSTITUTION_HOME_ROUTE_NAME,element: <InstitutionHome /> },
  { path: CP_INSTITUTION_CENTERBANK_ROUTE_NAME,element: <InstiCenterBankOuter /> }, //InstiCenterBank 중앙은행
  { path: CP_INSTITUTION_BANK_ROUTE_NAME,element: <InstiBankOuter /> }, //은행

  // { path: CP_FAIR_TRADE_ROUTE_NAME,element: <FairTradeOuter />, }, //공정거래위원회
  //bankbook - recent
  { path: CP_FAIRTRADE_BANKBOOK_RESENT_ROUTE_NAME,element: <CbbRecentBookList /> }, //공정거래위원회-최근 모두조히;;
  { path: CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME, element: <StudentBookBankSubHome /> }, //bankbook - students 학생들
  { path: CP_FAIRTRADE_BANKBOOK_STUDENTS_ROUTE_NAME+'/:number',element: <OneStudnetBookBank />}, //bankbook - students - :number //학생별 조회
  // { path: CP_FAIR_TRADE_ROUTE_NAME+'/bankbook'+'/:number',element: <OneStudnetBookBank />, }, //공정거래위원회-학생 조회-안씀;;
//CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME, CP_FAIR_TRADE_TRADE_STUDENTS_ROUTE_NAME
  { path: CP_FAIR_TRADE_MARKETTRADE_RESENT_ROUTE_NAME,element: <FairtradeMarkettradeRecenHome />, }, //공정거래위원회
]