import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useErrorShow from "../../../func/sys/err/useErrShow";
import { useMutation, useReactiveVar } from "@apollo/client";
import { CP_MYBILLS_MONTH_MUTATION } from "../../../hooks/cp-pay/trade/cp-bill";
import { cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables } from "../../../hooks/cp-pay/trade/cp-bill.generated";


import { IBill, cpPayVar, editCpPayVar } from "../../../stores/cp-pay-store";
import { cpPayFn } from "../../../stores/sub-store-fn/cp-pay-fn";
import { TradeHistoryDetail } from "./trade-history/th-detail";
import { addCommaMan } from "../../../func/basic/number/addComma";
import { useMe } from "../../../hooks/user/useMe";
import { TradeHistoryMonth } from "./trade-history/th-month";

//거래내역 
export default function TradeHistoryHome() {
    let navigate = useNavigate();
    const billRedux = useReactiveVar(cpPayVar).bills;
   
    const {data:meData, } = useMe()
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1,  });
    const [nowBill, setNowBill] = useState<IBill[]>([]);
    const [isLoading, setIsLoading] = useState(false); 
    //bill 다른 파일로 분리하기 - bill-detail.tsx
    // 월 바꾸면 0.8초후에 함수 실행하기, loding중이면 실행x (useEffect는 처음에만)
    // porduct 생산후 결제해야 반영 기능?-isSettle  //eneity 생산불가-isProduce

    // const [handleError] = useErrorShow()
    // const [cp_MyBillsMonthMutation, { loading,  }] = useMutation<cp_MyBillsMonthMutationMutation, cp_MyBillsMonthMutationMutationVariables>(CP_MYBILLS_MONTH_MUTATION, {async onCompleted (data){
    //     console.log(data.cp_MyBillsMonth, 'data.cp_MyBillsMonth')
    //     editCpPayVar.bill.add({year:currentDate.year, month:currentDate.month, data:data.cp_MyBillsMonth})

    //     const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
    //     if(billRedux[key]){
    //         setNowBill(billRedux[key]);return;
    //     }
    //     }, onError: (err) => {
    //     handleError(err, '판매에 실패하였습니다.')
    //     } });

    // useEffect(()=>{
    //     //redux에 [].length === 0 이면 mutation => {year+month: data}로 redux에 저장
    //     //year, month가 바뀌면 year+momth로 검색하여 없으면 mutation => {year+month: data}로 redux에 저장
    //     const key =cpPayFn.bill.makeKey({year:currentDate.year, month:currentDate.month})
    //     if(billRedux[key]){
    //         setNowBill(billRedux[key]);return;
    //     }
    //     console.log(currentDate.year, currentDate.month, 'currentDate.year, currentDate.month')
    //     cp_MyBillsMonthMutation({
    //         variables: {
    //             yearMonthInput: { year:currentDate.year, month:currentDate.month }, //cppay_id:Number(payid),
    //         },
    //         });
    // },[currentDate.year, currentDate.month])

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
                <div>거래 내역</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section>
            <section style={{height:'5rem'}} className="w-full flex justify-center items-center border-b-2 border-t-2 border-blue-400 bg-white">
                <div className=" font-bold" style={{fontSize:'1.5rem'}}>{addCommaMan(meData?.cp_me.money||0)}{moneyUnit}</div>
            </section>
            <section className="w-full px-1 bg-white">
                {/* useEffect로 bill데이터 가져옴 */}
                <TradeHistoryMonth currentDate={currentDate} setCurrentDate={setCurrentDate} setNowBill={setNowBill} isLoading={isLoading} setIsLoading={setIsLoading} />
                {/* <div className="flex justify-between items-center  " style={{height:'3.5rem',borderTop:'1px solid #C0C0C0', borderBottom:'1px solid #C0C0C0'}}>
                    <div className="cursor-pointer text-center" style={{width:'3rem'}} onClick={handleMinusButtonClick}>&#9001;</div>
                    <div className="text-lg">{currentDate.year}.{currentDate.month}</div>
                    <div className=" text-center cursor-pointer" style={{width:'3rem'}} onClick={handlePlusButtonClick}>&#9002;</div>
                </div> */}
                {!isLoading && nowBill.map((bill, index) => <TradeHistoryDetail key={'bill'+index}bill={bill} />)}
                {/* <div className="py-3 w-full flex">
                    <div className="flex justify-center items-center" style={{width:'20%'}}>
                        <div className="text-center " ><FaCircleMinus color="red" size={'2rem'} /></div>
                    </div>
                    <div className="" style={{width:'35%'}}>
                        <div>지출</div>
                        <div>1000원</div>
                    </div>
                    <div className="" style={{width:'44%'}}>
                        <div className="w-full flex justify-end "><div className="text-right">홍길동</div></div>
                        <div className="w-full flex justify-end "><div className="text-right text-gray-400">2023/12/31 14:00</div></div>
                    </div>
                </div> */}
            </section>
            {/* <div className="mt-5 w-[370px] h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                cursor-pointer" >
                <div>판매물품 추가</div>  
            </div> */}

        </div>
    </div>
    )
}