import { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function TradeHistoryHome() {
    let navigate = useNavigate();
   
    const [isMadal, setIsModal] = useState(false)

    return(
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className="py-5    rounded-xl shadow-xl bg-slate-200 flex flex-col items-center" 
        //mt-5 ,height:'500px'
            style={{width:'396px', minHeight:'500px'}}>
            <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white ">
                <div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
                <div>거래 내역</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section>
            <section>

            </section>
            <div className="mt-5 w-[370px] h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                cursor-pointer" >
          <div>판매물품 추가</div>  
        </div>

        </div>
    </div>
    )
}