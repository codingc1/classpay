
import { useMutation, useReactiveVar } from "@apollo/client"
import { useParams } from "react-router-dom"
import { client } from "../../../../apollo"
import NomadButton from "../../../../components/button/nomad-btn"
import NomadInput from "../../../../components/input/nomad-input"
import NomadInputNumber from "../../../../components/input/nomad-input/nomad-input-number"
import NomadInputText from "../../../../components/input/nomad-input/nomad-input-text"
import PopupCenter from "../../../../components/popup/sm-center/popup-center"
import { addCommaMan } from "../../../../func/basic/number/addComma"
import useError from "../../../../func/sys/err/useErr"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_SELLING_START_MUTATION } from "../../../../hooks/cp-pay/trade/selling"
import { cp_sellingStartMutationMutation,cp_sellingStartMutationMutationVariables} from "../../../../hooks/cp-pay/trade/selling.generated"


import { cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store"
import { CP_Product } from "../../../../__generated__/gql-types"




export const ProductSell=({setIsModal,setIsQrcode}:{
    setIsModal:React.Dispatch<React.SetStateAction<boolean>>
    setIsQrcode:React.Dispatch<React.SetStateAction<boolean>>}) => {
        const {payid} = useParams(); 
        
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
        

        //pendingSelling - subscribe시작
        cp_sellingStartMutation({
            variables: {
                cp_buyProductIdInput: { cppay_id:Number(payid),product_id:productRedux.product.id,qty:productRedux.qty, },
            },
          });
         
        
       
    }
    const productOnchange=(e: React.ChangeEvent<HTMLInputElement>) => {
      editCpPayVar.product.setQty(Number(e.target.value))
    }
  

    const contents =(
        <div className="w-full p-12">
            <div className="mb-5 text-base">
                {/* <div className='w-full text-center'>판매하기</div> */}
                <div className='w-full '>{productRedux.product.name}, 개당{addCommaMan(productRedux.product.price)}원</div>
                <div>보유 개수 : {productRedux.product.qty}개</div>
                <NomadInputNumber value={productRedux.qty}  onChange={productOnchange} label="판매 개수" name="qty" unit="개" />
                <div className='w-full text-center'>판매 금액 :{addCommaMan(productRedux.product.price*productRedux.qty)} 원</div>

            </div>
            {/* <div className="mb-5 text-sm">
 
                <div>판매하기</div>
                <div>{productRedux.product.name}</div>

            </div> */}

            <NomadButton text={ loading?'loading':"qr코드 보여주기"} onClick={submit}/>
            <div className="py-3"></div>
            <NomadButton text={ loading?'loading':"qr코드 스캔하기"} onClick={submit}/>
            {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                cursor-pointer" onClick={()=>setIsModal(true)}>
                <div>판매물품 추가</div>  
            </div> */}
        </div>
    )

    return(
        <PopupCenter onClose={popupClose} contents={contents} />
    )
}