import { useReactiveVar } from "@apollo/client";
import { useEffect, useState,  } from "react";
import {Helmet} from "react-helmet-async";
import { useNavigate,  } from "react-router-dom";
import TokenRepository from "../../api/token/tokenRepo";
import { CP_PAY_PRODUCTS_HOME_ROUTE_NAME,  CP_PAY_QRSCAN_ROUTE_NAME, CP_PAY_TRADE_HISTORY_ROUTE_NAME, CP_PAY_TRADE_HOME_ROUTE_NAME, LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";
import { authVar, editAuth } from "../../stores/authstore";
import { editRouteVar } from "../../stores/route-info-store";
// import { CiMoneyCheck1 } from 'react-icons/ci'; //?
// import { AiOutlineCreditCard } from 'react-icons/ai';
import {BsCreditCard2Back} from 'react-icons/bs';
import {IoMdRefresh } from 'react-icons/io'; //IoIosBarcode
import {IoQrCodeOutline} from 'react-icons/io5'; //https://react-icons.github.io/react-icons/icons?name=io5
import { AiOutlineScan } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';
import { FaMoneyBillWaveAlt } from "react-icons/fa";
// import { useCpPayAppInfo } from "../../hooks/cp-pay/useCpPayInfoApp";
import MaxPageCircelLoading from "../../components/common/loading/pageMaxLoading";
import { addCommaMan } from "../../func/basic/number/addComma";
import { CP_ME_QUERY, useMe } from "../../hooks/user/useMe";
import { BuyQrScan } from "../trades/buy/buy-qr-scan-popup";
import { cpPayVar } from "../../stores/cp-pay-store";
import { CP_BANKBOOK_HISTORY_ROUTE_NAME, CP_BANKBOOK_SNEDMONEY_ROUTE_NAME } from "../../routers/contains/ecomomy";
import { FaRegHeart } from "react-icons/fa";
import { cls } from "../../func/basic/string/cls";
import { client } from "../../apollo";
import { ConsoleHelper } from "../../func/sys/consoleHelper";
import { TodayStudyContent } from "./zhome-classpay-app/today-study-content";
//실질적인 홈페이지
export const ClassPayApp = () => {

  let navigate = useNavigate();
  // const {payid} = useParams(); //https://velog.io/@tjdgus0528/React-Router-v6-%EC%A0%95%EB%A6%AC
  // const cpapy = useReactiveVar(cpPayVar).cppay;
  const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
  const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
  // const location = useLocation();
  const isLoggedIn = useReactiveVar(authVar).isLogin;
  // const {data:cppayResult} = useCpPayAppInfo({id:Number(payid)})
  const {data:meData, loading} = useMe()
  const [fetchTime, setFetchTime] = useState(new Date().getTime())
  // const cpPayRedux = useReactiveVar(cpPayVar); 
  const [isViewMoney, setisViewMoney] = useState(true)

  const [isBuyMadal, setIsBuyModal] = useState(false)

  const refech = async()=>{
    await client.refetchQueries({
      include: [CP_ME_QUERY, ],//cppay list refech
      });
    }
  const refeshMoney = ()=>{//한번 클릭하면 1초 뒤에 작동 - fetchTime
    const now = new Date().getTime()
    if(now - fetchTime > 1200){
      setFetchTime(now)
      refech()
    }
  }

  useEffect(()=>{ //로그인하지 않앗다면 로그인으로 보내기  
    
    if(!isLoggedIn){//처름 들어왔을때는 isLoggedIn=false이므로 자돌로그인 아니면 로그인 화면으로 이동
      const token = TokenRepository.getToken()
      const isAuto = TokenRepository.getAuto()
      if(!token || !isAuto){
        navigate(LOGIN_ROUTE_NAME)
      }else{
        editAuth.setLogin(true) //login처리
        editRouteVar.header.setVisible(true) //상단 메뉴 보이게
      }
      
    }else{
      editRouteVar.header.setVisible(true) //상단 메뉴 보이게
    }
  },[ ]) 


  if(!meData || !meData.cp_me.joinclasspay){
    return <MaxPageCircelLoading />
  }
  // const cpapy = meData.cp_me.joinclasspay || ''
  const userName =()=>{
    if(!meData)return '님'
    const name = meData.cp_me.name
    if(name.length>1 && name[name.length-1]==='님'){
      return name
    }
    return name+'님'
  }
//w-763보다 크면
// const { transW400,chk}= useWindowSizeTrans()
// const marginT = chk.w.md ? 'mt-5' : '' //md보다 작으면 mt-5
const moneyHeight = 'h-14'

  //서울페이 https://seoulpay.shinhancard.com/gcp/ac/HAC1000N/HAC1000.shc
  return(
  // <div className=" max-w-screen-lg h-screen flex flex-col items-center">
  <div className="w-full h-screen flex flex-col items-center bg-white md:mt-10 lg:mt-20">
        <Helmet><title>물고기경제홈</title>
          <meta name="title" content="물고기경제홈" />
          <meta property="og:title" content="물고기경제홈" />
          <meta property="og:description" content="물고기경제홈입니다" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/airship192.png" />
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        </Helmet>
        {/* h-screen 제거  style 500px=> 600*/}
        {/* style={{width:'396px',height:'570px'}} */}
        {/* style={{ width: transW400(CSS_TEST.basic_wide), minHeight: CSS_LEN.min_height+'px' }} */}
   <div className={cls("rounded-xl shadow-xl bg-slate-200 max400width")} >
   {/* 서울페이 이미지 */}
   {/* style={{transform: 'scaleX(-1)'}} */}
   {/* https://stackoverflow.com/questions/18609819/how-to-flip-the-glyphicon-icon */}
   {/* style={{height:'400px'}} */}
    <section className=" w-full flex flex-col items-center " >
    {/* h-[120px] bg-indigo-500 */}
      <article className="px-4 py-4 w-full  rounded-t-xl text-white  bg-white
        space-y-3" style={{backgroundColor:'#8878FF'}}>
        <div className="w-full flex">
          {/* 오늘 날짜 */}
          <div>{new Date().getFullYear()}.{new Date().getMonth()+1}.{new Date().getDate()}</div>
          {/* <div>{cpapy.className}</div> */}
          {/* <div className="flex px-1 items-center"><GoTriangleDown /></div> */}
        </div>
        <div className="w-full flex space-x-2">
          {/* <div className="text-2xl"></div> */}
          <div className=" ">{userName()}의 통장&#60;교육용&#62;</div>  
        </div>

      </article>
        
      {/* 4.5rem */}
      <article className={cls(moneyHeight,"w-full px-3 mt-3  ")} style={{height:'8rem'}}>
        {/* style={{width:'85%'}}  shadow-md */}
        <div className="w-full h-full flex flex-col justify-center bg-white rounded-lg shadow-md">
        <div className='w-full h-12  px-5  flex justify-center items-center  ' 
           >
          {isViewMoney && <div className=" px-2 flex items-center    " >
            <div className=" cursor-pointer flex items-center" onClick={refeshMoney}><IoMdRefresh /></div>
            
          </div>}
          {isViewMoney && <div className=" px-2 flex items-center  text-black">
            <div className=" flex items-center align-middle ">
            {/* font-bold */}
              <div className="text-2xl  ">
                {/* 10,0000,0000 */}
                {addCommaMan(meData?.cp_me.money||0, numberOfDigits)}
              </div>
              <div className="px-1 text-lg ">{moneyUnit}</div>
            </div>
            <div className="px-1 text-xs rounded-lg border border-black opacity-40  cursor-pointer"
              onClick={()=>setisViewMoney(false)}>숨김</div>
          </div> }
          {!isViewMoney && <div className=" px-2 flex justify-center items-center text-black">
            <div className="px-1 text-xs rounded-lg border border-black opacity-40  cursor-pointer"
              onClick={()=>setisViewMoney(true)}>보이기</div>
          </div> }

        </div> 
        {/* bg-yellow-300 */}
          <div className="mt-4 flex w-full justify-center items-center text-sm space-x-2">
            <button className="px-4 py-1 bg-gray-200  rounded-xl"
              onClick={()=>navigate(CP_BANKBOOK_SNEDMONEY_ROUTE_NAME)}>이체</button>
            <button className="px-4 py-1 bg-gray-300 rounded-xl "
              onClick={()=>navigate(CP_BANKBOOK_HISTORY_ROUTE_NAME)}>조회</button>
          </div>
        </div>
      </article> 


      {/* 보유금액 아래창 */}
      {/* navigate(CP_PAY_QRSCAN_ROUTE_NAME) relative -top-3 */}
      <article className="w-full px-3 mt-3 ">
      <div className="w-full p-3 flex flex-col justify-center items-center bg-white rounded-lg">
        {/* <div className="w-full px-2 font-bold">결제</div> */}
        {/* grid grid-cols-2 gap-x-4  */}
        <div className="w-full  font-bold">
          <div className="px-2">판매, 결제(시장놀이)</div>
          <div className="px-2"></div>
        </div>
        <div className="w-full h-30 mt-3 grid grid-cols-2 gap-x-4 text-white">
          {/* bg-purple-400 #AB3ED6*/}
          {/* style={{backgroundColor:'#798ED2'}} */}
          {/* <div className="p-3  rounded-lg text-sm bg-indigo-400 cursor-pointer" onClick={()=>navigate(CP_PAY_TRADE_HOME_ROUTE_NAME)}
            >
            <div className=" font-bold text-lg">결제하기</div>
            <div className="flex justify-end text-3xl"><BsCreditCard2Back /></div>
          </div> */}
          {/* bg-indigo-400 */}
          <div className="px-3 py-7 flex space-x-2 justify-center items-center rounded-lg text-sm border-2  cursor-pointer text-gray-500" onClick={()=>navigate(CP_PAY_TRADE_HOME_ROUTE_NAME)}
            >
            {/* <div className="font-thin">QR코드</div> */}
            <div className="flex justify-end text-xl"><BsCreditCard2Back /></div>
            <div className=" font-bold text-lg ">결제하기</div>
          </div>
          {/* bg-purple-300  #8E40BF*/}
          {/* style={{backgroundColor:'#9D8CD9'}} */}
          {/* <div className="p-3 rounded-lg text-sm bg-indigo-300 cursor-pointer" 
            onClick={()=>navigate(CP_BANKBOOK_SNEDMONEY_ROUTE_NAME)}>
            <div className=" font-bold text-lg" >투자하기</div>
            <div className="flex justify-end text-3xl"><FaMoneyBillWaveAlt /></div>
          </div> */}
          {/* bg-indigo-300 */}
          <div className="p-3 flex space-x-2 justify-center items-center rounded-lg text-sm border-2 cursor-pointer text-gray-500" 
            onClick={()=>{
              alert('준비중입니다.')
              // navigate(CP_BANKBOOK_SNEDMONEY_ROUTE_NAME)
            }}>
            {/* <div className="font-thin">QR코드</div> */}
            <div className="flex justify-end text-xl"><FaMoneyBillWaveAlt /></div>
            <div className=" font-bold text-lg " >투자하기</div>
          </div>
        </div>


        <div className="w-full h-12 mt-3 grid grid-cols-2 gap-x-4   
         " >  
         {/* bg-slate-700 */}
          <div className="flex justify-center items-center bg-gray-200  rounded-lg cursor-pointer" onClick={()=>navigate(CP_PAY_TRADE_HISTORY_ROUTE_NAME)}
            >상품거래내역</div>  
          <div className="flex justify-center items-center bg-gray-200 rounded-lg cursor-pointer"
            onClick={()=>navigate(CP_PAY_PRODUCTS_HOME_ROUTE_NAME)}>판매물품</div>    
        </div>
        {/* <div className="w-full h-12 mt-3 grid grid-cols-2 gap-x-4   text-white
         " >
          <div className="flex justify-center items-center bg-slate-700 rounded-lg cursor-pointer"
            onClick={()=>navigate(CP_BANKBOOK_HISTORY_ROUTE_NAME)}>조회</div>  
          <div className="flex justify-center items-center bg-slate-700 rounded-lg cursor-pointer" onClick={()=>navigate(CP_PAY_TRADE_HISTORY_ROUTE_NAME)}
            >거래내역</div>  
        </div> */}
        {/* <div className="w-full h-12 mt-3 grid grid-cols-2 gap-x-4   text-white" >
          <div className="flex justify-center items-center bg-slate-700 rounded-lg cursor-pointer">투자</div>  
          <div className="flex justify-center items-center bg-slate-700 rounded-lg cursor-pointer"
            onClick={()=>navigate(CP_PAY_PRODUCTS_HOME_ROUTE_NAME)}>판매물품</div>  
        </div> */}


        {/* <div className="w-full h-12 mt-3 flex justify-center items-center bg-slate-700 rounded-lg text-white
         cursor-pointer" onClick={()=>navigate(CP_PAY_TRADE_HISTORY_ROUTE_NAME)}>
          <div>거래내역</div>  
        </div> */}
        {/* <div className="w-full h-12 mt-3 flex justify-center items-center bg-slate-700 rounded-lg text-white
         cursor-pointer" onClick={()=>navigate(cp_pay_products_route_fn(Number(payid)))}>
          <div>판매물품</div>  
        </div> */}
        
      </div>
    </article>
</section>
{/* relative mt-2 */}
 <TodayStudyContent />
 {isBuyMadal && <BuyQrScan setIsBuyModal={setIsBuyModal} />}
 </div>
 </div>
);
}