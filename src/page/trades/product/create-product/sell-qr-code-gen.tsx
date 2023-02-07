import { useReactiveVar } from '@apollo/client';
import {QRCodeSVG} from 'qrcode.react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PopupCenter from '../../../../components/popup/sm-center/popup-center';
import { addCommaMan } from '../../../../func/basic/number/addComma';
import { cpStopSelleing, useSellingSubscribe } from '../../../../hooks/cp-pay/trade/selling';
import { cpPayVar } from '../../../../stores/cp-pay-store';

//https://zpao.github.io/qrcode.react/
export const SellQrCodeGen=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const {payid} = useParams(); 
  const productRedux = useReactiveVar(cpPayVar).trade;

  // client.subscribe({
  //https://community.apollographql.com/t/is-it-possible-to-cancel-graphql-subscriptions/116
  //검색어 graphql client unsubscribe
  //useEffect로 구독취소 https://dev.to/email2vimalraj/cancel-unsubscribe-graphql-subscription-55oe
  //구독취소 영감 https://stackoverflow.com/questions/51477002/unsubscribe-subscription-in-apollo-client
  //구독취소 정답 https://community.apollographql.com/t/is-it-possible-to-cancel-graphql-subscriptions/116
  const {data, error} = useSellingSubscribe({id:Number(productRedux.tradeTmpCode.id)})
  useEffect(()=>{
    // if(data)console.log(data, 'data')
    // if(loading)console.log(loading, 'loading')
    if(error)console.log(error, 'error')
    if(data){ //사용자가 구매하면 코드 삭제, subscribe 종료
      if(data.pendingSelling.ok && data.pendingSelling.result){
        const bill = data.pendingSelling.result
        alert('결제되었습니다. '+bill.name+' : '+bill.sumPrice)
        setIsModal(false)
      }else
      if(data.pendingSelling.ok ){
        alert('test')
        setIsModal(false)
      }else if(data.pendingSelling.error){
        alert('결제되지 않았습니다.'+data.pendingSelling.error)
      }
    }
  },[data])
  // useEffect(()=>{
  //   return ()=>cpStopSelleing({id:Number(productRedux.tradeTmpCode.id)})
  // },[])
  
  
  const popupClose=()=>{ //닫기 - 그 데이터 삭제
      setIsModal(false)
    }
  const makeQrcode=() => {
    const obj = productRedux.tradeTmpCode.code
    // const obj = {cppay_id:Number(payid), product_id:productRedux.product.id, qty:productRedux.qty}
    return JSON.stringify(obj)
  }
  
      const contents =(
        <div className="w-full p-12">
            <div className="mb-5 text-base">
                {/* <div className='w-full text-center'>판매하기</div> */}
                <div className='w-full text-center'>{productRedux.product.name} {addCommaMan(productRedux.product.price)}원 x {productRedux.qty}개</div>
                <div className='w-full text-center'>결제금액 : {addCommaMan(productRedux.product.price*productRedux.qty)}원</div>

            </div>
            <div className="w-full flex justify-center">
                <QRCodeSVG
                value={makeQrcode()}
                size={200}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                // imageSettings={{
                //   src: "https://static.zpao.com/favicon.png",
                //   x: undefined,
                //   y: undefined,
                //   height: 24,
                //   width: 24,
                //   excavate: true,
                // }}
              />
          </div>              
        </div>
    )

    return(
        <PopupCenter onClose={popupClose} contents={contents} />
    )
}