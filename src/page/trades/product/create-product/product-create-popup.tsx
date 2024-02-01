import { useMutation, useReactiveVar } from "@apollo/client"
import { useState } from "react"
import { client } from "../../../../apollo"
import NomadButton from "../../../../components/button/nomad-btn"
import NomadInputPrice from "../../../../components/input/nomad-input/nomad-input-price"
import NomadInputText from "../../../../components/input/nomad-input/nomad-input-text"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_CREATE_PRODUCT_MUTATION } from "../../../../hooks/cp-pay/products/createProduct"
import { cp_createProductMutationMutation,cp_createProductMutationMutationVariables } from "../../../../hooks/cp-pay/products/createProduct.generated"
import { CP_MY_PRODUCTS_QUERY } from "../../../../hooks/cp-pay/products/useCpProducts"
import { cpPayVar } from "../../../../stores/cp-pay-store"
import NomadInputCount from "../../../../components/input/nomad-input/nomad-input-count"
import PopupCenterHCustom from "../../../../components/popup/center-h-custom/popup-real-center";
import { CP_PRODUCT_COLUMN } from "../../../../routers/contains-len"
import { chkCpProduct } from "../../../../utils/check-create/cp-product-check"
import { useWindowSizeTrans } from "../../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../../func/html/width-contain/css-contain"

//화살표 함수형 컴포넌트 생성rsc
// const fast = fa


export const ProductCreatePopup=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    // const payid = useReactiveVar(cpPayVar).payid;
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    
    // const [price, setPrice] =useState(0)
    const [productNum, setProductNum] =useState({price:0,qty:1,})
    const [productObj, setProductObj] =useState({name:'',desciption:'',imgurl:''})


    // const priceOnchange=(e: React.ChangeEvent<HTMLInputElement>)=>{ 
    //     setPrice(Number(e.target.value))
    // }
    const productOnchange=(e: React.ChangeEvent<HTMLInputElement>)=>{ 
        const { value, name,  } = e.target;
        setProductObj({...productObj, [name]: value})
    }

    const productNumchange=(e: React.ChangeEvent<HTMLInputElement>)=>{ 
        const { value, name, type } = e.target;
        const num = Number(value)
        if(num < 0)return
        setProductNum({...productNum, [name]: num})
    }
    const oneChange=(num:number)=>{
        const nowNum = productNum.qty+num
        if(nowNum < 0)return
        setProductNum({...productNum, qty:nowNum})
    }

    

    const activePopupClose=()=>{ //닫기 - 그 데이터 삭제
        setIsModal(false)
        //   const arr =arrayClone(activeData) 
        //   const index = dataFindFn.findDataByKeyReturnIndex(arr,'id', activePopupItem.id)
        //   arr.splice(index, 1) 
        //   editPopupVar.popup.activePopups(arr)
        // }
        // const closePopupNextDistance =(item:IPopupItem)=>{ //다음부터 열지 않기, 7일 후에 열기
        //   if(checkoading)return
        //   createPopupClickMutation({ 
        //     variables: {
        //       createPopupClickInput:{ id: item.id},
        //     },
        //   });
        //   activePopupClose(item)
        }
        const [handleError] = useErrorShow()
        const [cp_createProductMutation, { loading,  }] = useMutation<cp_createProductMutationMutation, cp_createProductMutationMutationVariables>(CP_CREATE_PRODUCT_MUTATION, {async onCompleted (data){
            if(data.cp_createProduct.ok  ){ //
            alert('물품을 만들었습니다')
            await client.refetchQueries({
                include: [CP_MY_PRODUCTS_QUERY],//cppay list refech
              });
            setIsModal(false)
      
           }else if(data.cp_createProduct.error){
             // console.log(data.myChecks.error)
             alert(`만드는데 실패하였습니다..\n${data.cp_createProduct.error}` );
           }
         }, onError: (err) => {
            handleError(err, '물품 만들기를 실패하였습니다.')
         } });
         const submit=()=>{
            const {name, desciption,imgurl} =productObj
            const {price,qty}=productNum
            if(loading)return;
            if(chkCpProduct.name(name).error){
                alert(chkCpProduct.name(name).error);return;
            }
            // if(name.length <1){
            //     alert('물품 이름을 입력해 주세요');
            //     return;
            // }
            //max
            if(chkCpProduct.price(price).error){    
                alert(chkCpProduct.price(price).error);return;
            }
            // if(isNaN(Number(price)) ||price < 0 || price >CP_PRODUCT_COLUMN.maxPrice  ){
            //     alert('가격을 입력해 주세요');
            //     return;
            // }
            if(chkCpProduct.qty(qty).error){
                alert(chkCpProduct.qty(qty).error);return;
            }
            // if(isNaN(Number(qty)) ||qty < 0 || qty >CP_PRODUCT_COLUMN.maxPrice  ){
            //     alert('보유 개수를 입력해 주세요');
            //     return;
            // }
            const isConfirm = window.confirm(name+'을 생산할까요? ')
            if(!isConfirm)return
            // console.log('submit', name, desciption, price, qty, imgurl)
            cp_createProductMutation({
                variables: {
                    cp_createProductIdInput: { name,desciption,qty,price,imgurl }, //cppay_id:Number(payid),
                },
              });
         }
         const {transW500} = useWindowSizeTrans()
         const transWFull = transW500(CSS_LEN.popup.wide)
         const innerPopupWidth = transWFull-CSS_LEN.popup.paddingX

        const contents =( //p-12
            <div className=" box-border" style={{width:transWFull+'px',padding:'5px'}} >
            {/* <div className=" p-8" style={{width:transW500(CSS_LEN.popup.wide),}}> */}
                {/* <div className=" text-sm"> */}
                <div className="text-sm  box-border" style={{width:innerPopupWidth+'px',}}>                    
                    <NomadInputText value={productObj.name}  onChange={productOnchange} label="물품이름" name="name" />
                    <div className="mt-3"></div>
                    <NomadInputPrice value={productNum.price}  onChange={productNumchange} label="가격" name="price" isHideZeoro={true} moneyUnit={moneyUnit} />
                    <div className="mt-3"></div>
                    <NomadInputCount value={productNum.qty}  onChange={productNumchange} oneChange={oneChange} label="보유 개수(재고)" name="qty"  />
                    
                    <br />

                </div>
                <div className="  flex" style={{width:innerPopupWidth+'px',}}>
                    <NomadButton text={ loading ? "Loading..." :"등록하기"} onClick={submit} large={true}  />
                {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                    cursor-pointer" onClick={()=>setIsModal(true)}>
                    <div>판매물품 추가</div>  
                </div> */}
                </div>
           </div>
        )
        
    return(
        <PopupCenterHCustom onClose={activePopupClose} contents={contents} option={{width:transW500(CSS_LEN.popup.wide), height:450}} isTopClose={true} />
        // <PopupCenter onClose={activePopupClose} contents={contents} />
    )
}