import { useNavigate, useParams } from "react-router-dom";


import { CP_MY_PRODUCTS_QUERY, useMyProducts } from "../../../hooks/cp-pay/products/useCpProducts";
import { useEffect, useState } from "react";
import { ProductCreatePopup } from "./create-product/product-create-popup";
import { cp_cp_deleteProductMutationDocument } from "../../../hooks/cp-pay/products/createProduct.generated";
import { ProductSell } from "./create-product/product-sell";
import { SellQrCodeGen } from "./create-product/sell-qr-code-gen";
import { editCpPayVar, IProduct } from "../../../stores/cp-pay-store";
import { addCommaMan } from "../../../func/basic/number/addComma";
import { CiEdit } from "react-icons/ci";
import { UpdateProduct } from "./update-product/update-product";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { CSS_LEN } from "../../../func/html/width-contain/css-contain";
import { useWindowSizeTrans } from "../../../func/html/useWidthTrans";
 
const TEST_SUBSCRIPTION = gql`
  subscription testSubsub {
    testSub {
      ok
      error
    }
  }
`;
export const CP_TEST_SUB_MUTATION = gql`
mutation testSubPushMutation {
    testSubPush {
    ok
    error
  }
}
`;


export const CProductsHome=()=>{ 
    let navigate = useNavigate();
   
    const [isMadal, setIsModal] = useState(false)
    const [isUpdateModat, setIsUpdateModal] = useState(false) //product update
    const [isBuyMadal, setIsBuyModal] = useState(false)
    const [isQrcode, setIsQrcode] = useState(false)
    
    const {data} =useMyProducts()//{id:payid}

    // const { data:subData, loading,error } = useSubscription( TEST_SUBSCRIPTION,  );
    // useEffect(() => {
    //     if(subData){
    //         console.log('subData',subData)
    //     }
    // }, [subData]);
    // if(error){console.log('error',error)}

    // const [testSubPushMutation, { loading:muloaing,  }] = useMutation<testSubPushMutationMutation, testSubPushMutationMutationVariables>(CP_TEST_SUB_MUTATION, {async onCompleted (data){
    //     if(data.testSubPush.ok ){ //
    //         console.log('testSubPushMutation',data.testSubPush.ok)
    //     }else if(data.testSubPush.error){
    //         // console.log(data.myChecks.error)
    //         alert(`판매를 시도하는데 실패하였습니다..\n${data.testSubPush.error}` );
    //     }
    //     }, onError: (err) => {
    //         console.log(err, '판매에 실패하였습니다.')
    //     } });
    // const submit =() => {
    //     if(muloaing)return
    //     testSubPushMutation()
    // }

    //팜내하기 : qr보여주기, 상대방에 읽으면 웹소켓으로 받기
    //읽기 =>tmpcode생성 => 읽으면 {payid, productid, tmpcode}
    const productClick=(item:IProduct) => {
        editCpPayVar.product.setProduct(item)
        editCpPayVar.product.setQty(1)
        setIsBuyModal(true) //product-sell 화면이 뜸
    }
    const updateProductClick=(item:IProduct) => {
        editCpPayVar.product.setProduct(item)
        setIsUpdateModal(true) //product-sell 화면이 뜸
    }
    // const windowSize = useWindowSize()
    const {transW400} = useWindowSizeTrans()
    
     
    return(
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className="py-5 max-w-sm  rounded-xl shadow-xl bg-slate-200 flex flex-col items-center" 
        //mt-5 ,height:'500px' //490px
            style={{width:transW400(CSS_LEN.basic_wide), minHeight:'500px'}}>
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
                                    <div className="px-2 flex-1 flex items-center cursor-pointer"  onClick={()=>productClick(el)}>
                                        <div className=" w-12 h-12 p-1 bg-indigo-300 rounded-full   ">
                                            {/* <div className="font-thin">QR코드</div>
                                            <div className=" font-bold text-lg">스캔하기</div>
                                        <div className="flex justify-end text-5xl"><AiOutlineScan /></div> */}
                                        </div>
                                        <div className="flex-col flex-1  px-2 ">
                                            <div className="  text-lg ">{el.name}</div>
                                            <div className="flex text-slate-400">
                                            {/* 가격 : */}
                                                <div className=" ">&#09;{addCommaMan(el.price)}원</div> 
                                                {/* 개수 : */}
                                                <div className="px-2">&#09;{el.qty}개</div>
                                            </div>
                                        </div>

                                    
                                </div>
                                
                                <div className="flex">
                                    {/* <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center text-xs"
                                        onClick={()=>submit(el)}>판매하기
                                    </div>    */}
                                    <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center"
                                        onClick={()=>updateProductClick(el)}><CiEdit size={'1.25rem'}/>
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
        {/* 물품 추가 */}
        {isMadal && <ProductCreatePopup setIsModal={setIsModal} />}
        {isUpdateModat && <UpdateProduct setIsModal={setIsUpdateModal} />}
        {/* 판매금액 모달 */}
        {isBuyMadal && <ProductSell setIsModal={setIsBuyModal} setIsQrcode={setIsQrcode} />}
        {/* qr코드 보여주기하면 */}
        {isQrcode && <SellQrCodeGen setIsModal={setIsQrcode} />}
        </div>
    )
}