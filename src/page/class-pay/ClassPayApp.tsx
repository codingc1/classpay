import { useReactiveVar } from "@apollo/client";
import { useEffect, useState,  } from "react";
import {Helmet} from "react-helmet-async";
import { useNavigate, useParams,  } from "react-router-dom";
import TokenRepository from "../../api/token/tokenRepo";
import { cp_pay_products_route_fn, CP_PAY_QRSCAN_ROUTE_NAME, cp_pay_setting_route_fn, LOGIN_ROUTE_NAME } from "../../routers/route-name-constants";
import { authVar } from "../../stores/authstore";
import { editRouteVar } from "../../stores/route-info-store";
// import { CiMoneyCheck1 } from 'react-icons/ci'; //?
// import { AiOutlineCreditCard } from 'react-icons/ai';
import {BsCreditCard2Back} from 'react-icons/bs';
import {IoMdRefresh } from 'react-icons/io'; //IoIosBarcode
import {IoQrCodeOutline} from 'react-icons/io5'; //https://react-icons.github.io/react-icons/icons?name=io5
import { AiOutlineScan } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';

import { useCpPayAppInfo } from "../../hooks/cp-pay/useCpPayInfoApp";
import MaxPageCircelLoading from "../../components/common/loading/pageMaxLoading";
import { addCommaMan } from "../../func/basic/number/addComma";
import { useMe } from "../../hooks/user/useMe";
import { BuyQrScan } from "../trades/buy/buy-qr-scan-popup";

//디프레스트~~
export const ClassPayApp = () => {

  let navigate = useNavigate();
  const {payid} = useParams(); //https://velog.io/@tjdgus0528/React-Router-v6-%EC%A0%95%EB%A6%AC

  // const location = useLocation();
  const isLoggedIn = useReactiveVar(authVar).isLogin;
  // const cpPayRedux = useReactiveVar(cpPayVar); 

  const {data:cppayResult} = useCpPayAppInfo({id:Number(payid)})
  const {data:meData} = useMe()
  const [isBuyMadal, setIsBuyModal] = useState(false)
  // const alertTest=()=>{
  //   setErrMsg('test')
  // }

  // useEffect(()=>{
  //   if(cppayResult){
  //     console.log(cppayResult, 'query cppayResult get')
  //   }
  // },[cppayResult])
  useEffect(()=>{
    editRouteVar.header.setVisible(true) //상단 메뉴 보이게
  },[])


  useEffect(()=>{ //로그인하지 않앗다면 로그인으로 보내기  
    if(!isLoggedIn){//처름 들어왔을때는 isLoggedIn=false이므로 자돌로그인 아니면 로그인 화면으로 이동
      const token = TokenRepository.getToken()
      const isAuto = TokenRepository.getAuto()
      if(!token || !isAuto){
        navigate(LOGIN_ROUTE_NAME)
      }
      // alertTest()
    }
  },[ ]) 

  if(!cppayResult|| !cppayResult.cp_PayInfoApp.result){
    return <MaxPageCircelLoading />
  }
  const cpapy = cppayResult.cp_PayInfoApp.result
  //서울페이 https://seoulpay.shinhancard.com/gcp/ac/HAC1000N/HAC1000.shc
  return(
  // <div className=" max-w-screen-lg h-screen flex flex-col items-center">
  <div className="w-full h-screen flex flex-col items-center bg-white">
        <Helmet><title>학급페이홈</title>
          <meta name="title" content="학급페이홈" />
          <meta property="og:title" content="학급페이홈" />
          <meta property="og:description" content="학학급페이홈입니다" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/airship192.png" />
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        </Helmet>
   <div className=" mt-5 h-screen  rounded-xl shadow-xl bg-slate-200" style={{width:'396px',height:'500px'}}>
   {/* 서울페이 이미지 */}
   {/* style={{transform: 'scaleX(-1)'}} */}
   {/* https://stackoverflow.com/questions/18609819/how-to-flip-the-glyphicon-icon */}
   {/* style={{height:'400px'}} */}
    <section className=" w-full flex flex-col items-center " >
      <article className="px-4 py-4 h-[120px] w-full  rounded-t-xl bg-indigo-500 text-white 
        space-y-3">
        <div className="w-full flex">
          <div>{cpapy.cppay.className}</div>
          <div className="flex px-1 items-center"><GoTriangleDown /></div>
        </div>
        <div className="w-full flex px-4 space-x-2">
          <div className="text-2xl"><BsCreditCard2Back /></div>
          <div className=" ">{meData?.cp_me.name||''}님의 통장&#60;교육용&#62;</div>  
        </div>

      </article>
        
        {/* 보유금액 표시창 */}
      <article className=" h-12 flex justify-between items-center shadow-md
        rounded-lg bg-white relative -top-[26px] font-bold" style={{width:'85%'}}>
        <div className="px-2 flex items-center space-x-1  " style={{width:'40%'}}>
          <div className="cursor-pointer"><IoMdRefresh /></div>
          <div>보유금액</div>
        </div>
        <div className="px-2 flex items-center  space-x-1 text-indigo-500">
          <div className="flex">
            <div className="">
              {/* 10,0000,0000 */}
              {addCommaMan(cpapy.paymoney.money)}
            </div>
            <div>원</div>
          </div>
          <div>&#62;</div>
        </div> 
      </article> 

      {/* 보유금액 아래창 */}
      {/* navigate(CP_PAY_QRSCAN_ROUTE_NAME) */}
      <article className="w-full px-3 relative -top-3 ">
      <div className="w-full p-3 flex flex-col justify-center items-center bg-white rounded-lg">
        <div className="w-full px-2 font-bold">결제</div>
        <div className="w-full h-30 mt-3 grid grid-cols-2 gap-x-4 text-white">
          <div className="p-3 bg-indigo-300 rounded-lg text-sm  cursor-pointer"
            onClick={()=>setIsBuyModal(true)}>
            <div className="font-thin">QR코드</div>
            <div className=" font-bold text-lg">스캔하기</div>
            <div className="flex justify-end text-5xl"><AiOutlineScan /></div>
          </div>
          <div className="p-3 bg-indigo-400 rounded-lg text-sm  cursor-pointer">
            <div className="font-thin">QR코드</div>
            <div className=" font-bold text-lg">보여주기</div>
            <div className="flex justify-end text-5xl"><IoQrCodeOutline /></div>
          </div>
        </div>

        <div className="w-full h-12 mt-3 flex justify-center items-center bg-slate-700 rounded-lg text-white
         cursor-pointer">
          <div>거래내역</div>  
        </div>
        <div className="w-full h-12 mt-3 flex justify-center items-center bg-slate-700 rounded-lg text-white
         cursor-pointer" onClick={()=>navigate(cp_pay_products_route_fn(Number(payid)))}>
          <div>판매물품</div>  
        </div>
        
      </div>
    </article>
</section>

<article className="w-full px-3 relative mt-2 ">
  <div className="w-full p-3 flex flex-col justify-center items-center bg-white rounded-lg">
    <div className="w-full px-2 font-bold">공부할 내용</div>
    <div>
      
    </div>
  </div>
</article>
 {isBuyMadal && <BuyQrScan setIsBuyModal={setIsBuyModal} />}
 </div>
 </div>
);
}