import { useMutation } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { client } from "../../../../apollo"
import NomadButton from "../../../../components/button/nomad-btn"
import NomadInputPrice from "../../../../components/input/nomad-input/nomad-input-price"
import NomadInputText from "../../../../components/input/nomad-input/nomad-input-text"
import PopupCenter from "../../../../components/popup/sm-center/popup-center"
import useError from "../../../../func/sys/err/useErr"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_CREATE_PRODUCT_MUTATION } from "../../../../hooks/cp-pay/products/createProduct"
import { cp_createProductMutationMutation,cp_createProductMutationMutationVariables } from "../../../../hooks/cp-pay/products/createProduct.generated"
import { CP_MY_PRODUCTS_QUERY } from "../../../../hooks/cp-pay/products/useCpProducts"

//화살표 함수형 컴포넌트 생성rsc
// const fast = fa


export const ProductCreatePopup=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>})=>{
    const {payid} = useParams(); 
    
    
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
        setProductNum({...productNum, [name]: Number(value)})
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
             alert(`불러오는데 실패하였습니다..\n${data.cp_createProduct.error}` );
           }
         }, onError: (err) => {
            handleError(err, '물품 만들기를 실패하였습니다.')
         } });
         const submit=()=>{
            const {name, desciption,imgurl} =productObj
            const {price,qty}=productNum
            if(loading)return;
            const isConfirm = window.confirm(name+'을 추가할까요? ')
            if(!isConfirm)return
           
           
            if(!payid){
                alert('물품 이름을 입력해 주세요');
                return;
            }
            if(name.length <1){
                alert('물품 이름을 입력해 주세요');
                return;
            }
            if(price < 1 || price >2000000000 || isNaN(Number(price))){
                alert('가격을 입력해 주세요');
                return;
            }
            cp_createProductMutation({
                variables: {
                    cp_createProductIdInput: { cppay_id:Number(payid),name,desciption,qty,price,imgurl },
                },
              });
         }

        const contents =(
            <div className="w-full p-12">
                <div className=" text-sm">
                    <NomadInputText value={productObj.name}  onChange={productOnchange} label="물품이름" name="name" />
                    <NomadInputPrice value={productNum.price}  onChange={productNumchange} label="가격" name="price" isHideZeoro={true} />
                    <NomadInputPrice value={productNum.qty}  onChange={productNumchange} label="보유 개수" name="qty"  />
                    
                    <br />

                </div>

                <NomadButton text={ loading ? "Loading..." :"등록하기"} onClick={submit}/>
                {/* <div className="mt-5 w-full h-12 flex justify-center items-center bg-slate-700 rounded-lg text-white
                    cursor-pointer" onClick={()=>setIsModal(true)}>
                    <div>판매물품 추가</div>  
                </div> */}
           </div>
        )
        
    return(
        <PopupCenter onClose={activePopupClose} contents={contents} />
    )
}