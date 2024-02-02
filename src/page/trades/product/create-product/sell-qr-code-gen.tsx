import { useReactiveVar } from '@apollo/client';
import {QRCodeSVG} from 'qrcode.react';
import { useEffect } from 'react';
import PopupCenter from '../../../../components/popup/sm-center/popup-center';
import { addCommaMan } from '../../../../func/basic/number/addComma';
import { useSellingSubscribe } from '../../../../hooks/cp-pay/trade/selling';
import { cpPayVar } from '../../../../stores/cp-pay-store';
import { ConsoleHelper } from '../../../../func/sys/consoleHelper';
import { client } from '../../../../apollo';
import { CP_ME_QUERY } from '../../../../hooks/user/useMe';
import { CP_MY_PRODUCTS_QUERY } from '../../../../hooks/cp-pay/products/useCpProducts';
import { useNavigate } from 'react-router-dom';
import { PAY_HOME } from '../../../../routers/route-name-constants';

//판매자가 qr코드를 보여줌 - Subscribe
//https://zpao.github.io/qrcode.react/
export const SellQrCodeGen=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
  let navegate = useNavigate()
  const unit = useReactiveVar(cpPayVar).cppay.moneyUnit;
  const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
  const productRedux = useReactiveVar(cpPayVar).trade;

  // client.subscribe({
  //https://community.apollographql.com/t/is-it-possible-to-cancel-graphql-subscriptions/116
  //검색어 graphql client unsubscribe
  //useEffect로 구독취소 https://dev.to/email2vimalraj/cancel-unsubscribe-graphql-subscription-55oe
  //구독취소 영감 https://stackoverflow.com/questions/51477002/unsubscribe-subscription-in-apollo-client
  //구독취소 정답 https://community.apollographql.com/t/is-it-possible-to-cancel-graphql-subscriptions/116
  const {data, error, } = useSellingSubscribe({id:Number(productRedux.tradeTmpProduct.id)})
  if(error){
    ConsoleHelper(error, 'SellQrCodeGen useEffect error')
    alert('결제에 오류가 생겼습니다.'+String(error))
    setIsModal(false)
    navegate(PAY_HOME)
  }
  useEffect(()=>{
    if(data){ //사용자가 구매하면 코드 삭제, subscribe 종료
      if(data.pendingSelling.ok ){ //&& data.pendingSelling.result
        // const bill = data.pendingSelling.result
        // alert('결제되었습니다. '+bill.name+' : '+bill.sumPrice)
        //refetch - product, me
        const refetchProduct = async()=>{
          await client.refetchQueries({
            include: [CP_MY_PRODUCTS_QUERY, CP_ME_QUERY],//bill refech //cppay list refech
          });
        alert('결제되었습니다.')
        setIsModal(false)
        navegate(PAY_HOME)
      }
      refetchProduct()
      // }else
      // if(data.pendingSelling.ok ){
      //   alert('test')
      //   setIsModal(false)
      }else if(data.pendingSelling.error){
        alert('결제되지 않았습니다.'+data.pendingSelling.error)
        setIsModal(false)
      }
    }
  },[data])
  //또다른 unsubscribe 방법 - https://dev.to/email2vimalraj/cancel-unsubscribe-graphql-subscription-55oe
  // useEffect(() => { //apollo graphql react code example about 'Unsubscribe GraphQL Subscription, please
  //   // Subscription handler
  //   const unsubscribe = subscribeToMore({
  //     document: CP_SELLING_PENDING_SUBSCRIPTION,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const newMessage = subscriptionData.data.messageAdded;
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //       return prev;
  //     },
  //   });
  //   // Cleanup function to unsubscribe when the component is unmounted
  //   return () => unsubscribe();
  // }, [subscribeToMore]);
  
  // useEffect(()=>{
  //   return ()=>cpStopSelleing({id:Number(productRedux.tradeTmpCode.id)})
  // },[])
  
  
  const popupClose=()=>{ //닫기 - 그 데이터 삭제
      setIsModal(false)
    }
  const makeQrcode=() => {
    const obj = productRedux.tradeTmpProduct.code
    // const obj = {cppay_id:Number(payid), product_id:productRedux.product.id, qty:productRedux.qty}
    return JSON.stringify(obj)
  }
  
      const contents =(
        <div className="w-full p-12">
            <div className="mb-5 text-lg">
                {/* <div className='w-full text-center'>판매하기</div> */}
                <div className='w-full text-center '>{productRedux.product.name} {addCommaMan(productRedux.product.price, numberOfDigits)}{unit} x {productRedux.qty}개</div>
                <div className='w-full text-center'>결제금액 :&nbsp; 
                  <span className='font-bold'>{addCommaMan(productRedux.product.price*productRedux.qty, numberOfDigits)}{unit}</span></div>

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