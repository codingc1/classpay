
import { useMutation, useReactiveVar } from "@apollo/client"
import { useParams } from "react-router-dom"
import NomadButton from "../../../../components/button/nomad-btn"
import { addCommaMan } from "../../../../func/basic/number/addComma"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_SELLING_START_MUTATION } from "../../../../hooks/cp-pay/trade/selling"
import { cp_sellingStartMutationMutation,cp_sellingStartMutationMutationVariables} from "../../../../hooks/cp-pay/trade/selling.generated"
import PopupCenterHCustom from "../../../../components/popup/center-h-custom/popup-real-center";

import { cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store"
import OneLineInputNumber from "../../../../components/input/one-line-input-num/line-input-number"
import { ConsoleHelper } from "../../../../func/sys/consoleHelper"
import { useWindowSizeTrans } from "../../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../../func/html/width-contain/css-contain"




export const ProductSell=({setIsModal,setIsQrcode}:{
    setIsModal:React.Dispatch<React.SetStateAction<boolean>>
    setIsQrcode:React.Dispatch<React.SetStateAction<boolean>>}) => {
        // const {payid} = useParams(); 
    const cppay = useReactiveVar(cpPayVar).cppay;     
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    const productRedux = useReactiveVar(cpPayVar).trade;

    const popupClose=()=>{ //닫기 - 그 데이터 삭제
        setIsModal(false)
        }
    
    const [handleError] = useErrorShow()
    const [cp_sellingStartMutation, { loading,  }] = useMutation<cp_sellingStartMutationMutation, cp_sellingStartMutationMutationVariables>(CP_SELLING_START_MUTATION, {async onCompleted (data){
        if(data.cp_sellingStart.ok  && data.cp_sellingStart.result){ //

        // alert('물품을 만들었습니다')
        // await client.refetchQueries({
        //     include: [CP_MY_PRODUCTS_QUERY],//cppay list refech
        //     });
        editCpPayVar.trade.setTmpcode(data.cp_sellingStart.result) //String입력으로 바꿔야함~~~~~~~~~
        setIsQrcode(true) //판패 시작 - 대기중
        popupClose()

        }else if(data.cp_sellingStart.error){
            // console.log(data.myChecks.error)
            alert(`판매를 시도하는데 실패하였습니다..\n${data.cp_sellingStart.error}` );
        }
        }, onError: (err) => {
        handleError(err, '판매에 실패하였습니다.')
        } });

    const submit =() => {
        if(loading)return
        if(productRedux.qty <1){
            alert('1개 이상부터 판매할 수 있습니다.')
            return;
        }
        if(productRedux.product.qty < productRedux.qty){
            alert('재고가 부족합니다.')
            return;
        }
        
        // console.log(Number(payid), productRedux.product.id, productRedux.qty, 'sell')
        
        //pendingSelling - subscribe시작
        cp_sellingStartMutation({
            variables: {
                cp_buyProductIdInput: { cppay_id:cppay.id,product_id:productRedux.product.id,qty:productRedux.qty, },
            },
          });
         
        
       
    }
    const productOnchange=(e: React.ChangeEvent<HTMLInputElement>) => {
        //앞에 0이 붙으면 제거
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        
      editCpPayVar.product.setQty(Number(e.target.value))
    }
    const {transW400} = useWindowSizeTrans()
    const transWFull = transW400(CSS_LEN.popup.wide)
    const innerPopupWidth = transWFull-CSS_LEN.popup.paddingX

    const contents =( //p-12
        <div className=" box-border" style={{width:transWFull+'px',padding:'5px'}} >
         {/* <div className="w-full px-3 pt-0 pb-3 text-lg"> */}
            <div className="mb-3 text-lg px-3" style={{width:innerPopupWidth+'px',}}>
                <div className='w-full text-center font-bold  border'>상품 판매</div>
                <div className="flex mt-3 py-1">
                    <div>상품 이름:&nbsp;</div>
                    <div className='flex-1 font-semibold '>{productRedux.product.name}</div>
                </div>
                <div className="flex py-1">
                    <div>상품 가격:&nbsp;</div>
                    <div className='flex-1 font-semibold'>{addCommaMan(productRedux.product.price, numberOfDigits)}원</div>
                </div>
                {/* <div className='w-full '>{productRedux.product.name}, 개당{addCommaMan(productRedux.product.price)}원</div> */}
                {/* <div className="py-1">보유 개수 : {productRedux.product.qty}개</div> */}
                <OneLineInputNumber value={productRedux.qty}  onChange={productOnchange} label="판매 개수" name="qty" unit="개" />
                {/* style={{fontSize:'1.5rem'}} */}
                <div className='w-full  text-center py-2 mt-2' >총 판매 금액 :&nbsp;
                    <span className="font-bold" style={{textDecoration:'underline'}}>{addCommaMan(productRedux.product.price*productRedux.qty, numberOfDigits)}{cppay.moneyUnit}</span></div>

            </div>
            {/* <div className="mb-5 text-sm">
 
                <div>판매하기</div>
                <div>{productRedux.product.name}</div>

            </div> */}
            {/* <div className="p-3 border-orange-500 border-2 rounded-md"> */}
            <div className="text-sm  box-border" style={{width:innerPopupWidth+'px',}}>
                <NomadButton text={ loading?'loading':"qr코드 보여주기"} onClick={submit}/>
                {/* <div className="py-3"></div>
                <NomadButton text={ loading?'loading':"qr코드 스캔하기"} onClick={submit}/> */}
            </div>
            {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                cursor-pointer" onClick={()=>setIsModal(true)}>
                <div>판매물품 추가</div>  
            </div> */}
        </div>
    )

    return( //450,
        <PopupCenterHCustom onClose={popupClose} contents={contents} option={{width:transW400(CSS_LEN.popup.wide), height:400}} isTopClose={true} />
        // <PopupCenter onClose={popupClose} contents={contents} />
    )
}