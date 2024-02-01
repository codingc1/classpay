import { useMutation, useReactiveVar } from "@apollo/client";
import useErrorShow from "../../../../func/sys/err/useErrShow";
import { cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store";
import { CP_MY_PRODUCTS_QUERY } from "../../../../hooks/cp-pay/products/useCpProducts";
import { client } from "../../../../apollo";
import { chkCpProduct } from "../../../../utils/check-create/cp-product-check";
import { useEffect, useState } from "react";
import NomadInputCount from "../../../../components/input/nomad-input/nomad-input-count"
import PopupCenterHCustom from "../../../../components/popup/center-h-custom/popup-real-center";
import NomadInputText from "../../../../components/input/nomad-input/nomad-input-text";
import NomadInputPrice from "../../../../components/input/nomad-input/nomad-input-price";
import NomadButton from "../../../../components/button/nomad-btn";
import { cp_cp_deleteProductMutationDocument, cp_updateProductMutationMutation, cp_updateProductMutationMutationVariables } from "../../../../hooks/cp-pay/products/createProduct.generated";
import { CP_UPDATE_PRODUCT_MUTATION } from "../../../../hooks/cp-pay/products/createProduct";
import {BsTrash } from 'react-icons/bs'; 
import { CP_Product } from "../../../../__generated__/gql-types";
import { useWindowSizeTrans } from "../../../../func/html/useWidthTrans";
import { CSS_LEN } from "../../../../func/html/width-contain/css-contain";


export const UpdateProduct=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
    // const cppay = useReactiveVar(cpPayVar).cppay;   
    const productRedux = useReactiveVar(cpPayVar).trade.product;
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;

    useEffect(()=>{
        ()=>editCpPayVar.product.resetProduct()
    },[])
    const setName=(e: React.ChangeEvent<HTMLInputElement>)=>{ 
        editCpPayVar.product.setProduct({...productRedux, name:e.target.value})
    }

    const setPrice=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        editCpPayVar.product.setProduct({...productRedux, price:Number(e.target.value)})
    }
    const setQty=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        editCpPayVar.product.setProduct({...productRedux, qty:Number(e.target.value)})
    }
    const oneChange=(num:number)=>{
        console.log(num, 'num')
        const nowNum = productRedux.qty+num
        console.log(nowNum, 'nowNum')
        if(nowNum < 0)return
        editCpPayVar.product.setProduct({...productRedux, qty:nowNum})
    }


    const popupClose=()=>{ //닫기 - 그 데이터 삭제
        setIsModal(false)
        }
    
    const [handleError] = useErrorShow()
    const [cp_updateProductMutation, { loading,  }] = useMutation<cp_updateProductMutationMutation, cp_updateProductMutationMutationVariables>(CP_UPDATE_PRODUCT_MUTATION, {async onCompleted (data){
        if(data.cp_updateProduct.ok ){ //
            // alert('수정하였습니다')
            await client.refetchQueries({
                include: [CP_MY_PRODUCTS_QUERY],//cppay list refech
              });
            popupClose()

        }else if(data.cp_updateProduct.error){
            // console.log(data.myChecks.error)
            alert(`상품 수정에 실패하였습니다..\n${data.cp_updateProduct.error}` );
        }
        }, onError: (err) => {
        handleError(err, '상품 수정에 실패하였습니다.')
        } });

    const submit =() => {
        if(loading)return
        const {id, name, price, qty,desciption,imgurl} = productRedux
        if(chkCpProduct.name(name).error){
            alert(chkCpProduct.name(name).error);return;
        }
        if(chkCpProduct.price(price).error){    
            alert(chkCpProduct.price(price).error);return;
        }
        if(chkCpProduct.qty(qty).error){
            alert(chkCpProduct.qty(qty).error);return;
        }
        

        //pendingSelling - subscribe시작
        cp_updateProductMutation({
            variables: {
                cp_updateProductIdInput: { id,name,desciption,qty,price,imgurl },
            },
          });
         
        
       
    }

    // const [handleError] = useErrorShow()
    //product:Pick<CP_Product, "id"|"name" >
    const deleteSubmit=() => { //delete는 update로 이동..
        if(loading)return;

        const isConfirm = window.confirm(productRedux.name+'을 삭제할까요? ')
        if(!isConfirm)return;
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_cp_deleteProductMutationDocument,
            variables:{
                id:productRedux.id //payid:Number(payid),
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_deleteProduct.ok ){
              alert('삭제하였습니다.')
              await client.refetchQueries({
                include: [CP_MY_PRODUCTS_QUERY],//cppay list refech
              });
                popupClose()
            }else if(data?.cp_deleteProduct.error){
              alert(data.cp_deleteProduct.error)
            }
          })
          .catch(e => handleError(e, 'cp_deleteProductMutation'))
    }


    const {transW500} = useWindowSizeTrans()
    const transWFull = transW500(CSS_LEN.popup.wide)
    const innerPopupWidth = transWFull-CSS_LEN.popup.paddingX
    
    //product-create-popup.tsx 과 비슷함
    const contents =( //p-12
    <div className=" box-border" style={{width:transWFull+'px',padding:'5px'}} >
        <div className="text-sm  box-border" style={{width:innerPopupWidth+'px',}}>
            <NomadInputText value={productRedux.name}  onChange={setName} label="물품이름" name="name" />
            <div className="mt-3"></div>
            <NomadInputPrice value={productRedux.price}  onChange={setPrice} label="가격" name="price" isHideZeoro={true} moneyUnit={moneyUnit}/>
            <div className="mt-3"></div>
            <NomadInputCount value={productRedux.qty}  onChange={setQty} oneChange={oneChange} label="보유 개수(재고)" name="qty"  />
            <br />

        </div>

        <div className="  flex" style={{width:innerPopupWidth+'px',}}>

            <NomadButton text={ loading ? "Loading..." :"수정하기"} onClick={submit} large={true} width="90%"/>
            
            <div style={{width:'10%'}} className="flex justify-center items-center cursor-pointer"
            onClick={deleteSubmit}><BsTrash size={'1.25rem'} /></div>
        </div>

        {/* <div className="py-3"></div> */}

        
        {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
            cursor-pointer" onClick={()=>setIsModal(true)}>
            <div>판매물품 추가</div>  
        </div> */}
   </div>
)

    return( //삭제하기 전 400
    //24.1.5
        <PopupCenterHCustom onClose={popupClose} contents={contents} option={{width:transW500(CSS_LEN.popup.wide), height:400}} isTopClose={true} />
        // <PopupCenter onClose={popupClose} contents={contents} />
    )
}