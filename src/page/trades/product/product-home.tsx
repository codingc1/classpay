import { useNavigate, useParams } from "react-router-dom";

import {BsTrash } from 'react-icons/bs'; 
import { CP_MY_PRODUCTS_QUERY, useMyProducts } from "../../../hooks/cp-pay/products/useCpProducts";
import { useState } from "react";
import { ProductCreatePopup } from "./create-product/product-create-popup";
import { client } from "../../../apollo";
import { cp_cp_deleteProductMutationDocument } from "../../../hooks/cp-pay/products/createProduct.generated";
import { CP_Product } from "../../../__generated__/gql-types";
import { ProductSell } from "./create-product/product-sell";
import { SellQrCodeGen } from "./create-product/sell-qr-code-gen";
import { editCpPayVar, IProduct } from "../../../stores/cp-pay-store";
import { addCommaMan } from "../../../func/basic/number/addComma";
import useErrorShow from "../../../func/sys/err/useErrShow";

 

export const CProductsHome=()=>{ 
    let navigate = useNavigate();
   
    const [isMadal, setIsModal] = useState(false)
    const [isBuyMadal, setIsBuyModal] = useState(false)
    const [isGrcode, setIsQrcode] = useState(false)

    const {payid} = useParams(); 
    const {data} =useMyProducts({id:payid})

    const [handleError] = useErrorShow()
    const submit=(product:Pick<CP_Product, "id"|"name" >) => {
        // if(loading)return;
        const isConfirm = window.confirm(product.name+'을 삭제할까요? ')
        if(!isConfirm)return;
        client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
            mutation:cp_cp_deleteProductMutationDocument,
            variables:{
                cp_payIdAndIDInput:{payid:Number(payid), id:product.id}
            }
          })
          .then(async({data})=>{
            // console.log(data, ': data res')
            if(data &&data.cp_deleteProduct.ok ){
              alert('삭제하였습니다.')
              await client.refetchQueries({
                include: [CP_MY_PRODUCTS_QUERY],//cppay list refech
              });
            }else if(data?.cp_deleteProduct.error){
              alert(data.cp_deleteProduct.error)
            }
          })
          .catch(e => handleError(e, 'cp_deleteProductMutation'))
    }
    //팜내하기 : qr보여주기, 상대방에 읽으면 웹소켓으로 받기
    //읽기 =>tmpcode생성 => 읽으면 {payid, productid, tmpcode}
    const productClick=(item:IProduct) => {
        editCpPayVar.product.setProduct(item)
        editCpPayVar.product.setQty(1)
        setIsBuyModal(true) //product-sell 화면이 뜸
    }
    
    return(
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className=" mt-5 min-h-screen  rounded-xl shadow-xl bg-slate-200 flex flex-col items-center" 
            style={{width:'396px',height:'500px'}}>
            <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white ">
                <div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
                <div>판매 물품 리스트</div>
                <div className="w-[40px]  rounded-t-xl"></div>
            </section>
            <section>
                {data &&data.cp_myProducts.map(el=>{
                    return(
                        <article className="mt-3 w-[380px] px-1 flex justify-between items-center " key={el.id}>
                            <div className="px-4 py-4 w-full  rounded-xl  bg-white 
                                space-y-3 border-2 flex justify-between ">
                                    <div className="px-2 flex items-center"  onClick={()=>productClick(el)}>
                                        <div className=" w-12 h-12 p-1 bg-indigo-300 rounded-full   ">
                                            {/* <div className="font-thin">QR코드</div>
                                            <div className=" font-bold text-lg">스캔하기</div>
                                        <div className="flex justify-end text-5xl"><AiOutlineScan /></div> */}
                                        </div>
                                        <div className="flex-col flex-1  px-2 text-xs">
                                            <div className="  text-sm ">{el.name}</div>
                                            <div className="flex text-slate-400">
                                                <div className=" ">가격 :&#09;{addCommaMan(el.price)}원</div> 
                                                
                                                <div className="px-2">개수 :&#09;{el.qty}개</div>
                                            </div>
                                        </div>

                                    
                                </div>
                                
                                <div className="flex">
                                    {/* <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center text-xs"
                                        onClick={()=>submit(el)}>판매하기
                                    </div>    */}
                                    <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center"
                                        onClick={()=>submit(el)}><BsTrash />
                                    </div>     
                                </div>

                                </div>
                        </article>
                    )
                })
                }
            </section>
        {/* <section className="mt-3 w-full flex flex-col items-center " style={{height:'400px'}}>
                <article className="px-4 py-4 h-[120px] w-full  rounded-t-xl bg-indigo-500 text-white 
                space-y-3">
                    <div>dd</div>
                </article>
      
        </section> */}
        <div className="mt-5 w-[370px] h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
         cursor-pointer" onClick={()=>setIsModal(true)}>
          <div>판매물품 추가</div>  
        </div>
       

        </div>
        {isMadal && <ProductCreatePopup setIsModal={setIsModal} />}
        {isBuyMadal && <ProductSell setIsModal={setIsBuyModal} setIsQrcode={setIsQrcode} />}
        {isGrcode && <SellQrCodeGen setIsModal={setIsQrcode} />}
        </div>
    )
}