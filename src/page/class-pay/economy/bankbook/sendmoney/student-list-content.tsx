import { useWindowSizeTrans } from "../../../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../../../func/html/width-contain/css-contain"
import { useCpPayUserList } from "../../../../../hooks/cp-pay/cp-pay-user/useCpPayUserList"
import PopupCenterStudent from "../../../../../components/popup/center-h-custom/popup-center-student"
import { cpStudentsVar, editStudentsVar } from "../../../../../stores/cp-students-store"
import { useEffect } from "react"


export const StudentListContent=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const{data} = useCpPayUserList() 
    const studentList = data && data.cp_PayUserLists?data.cp_PayUserLists:[]
    
    
    const popupClose=()=>{ //닫기 - 그 데이터 삭제
        setIsModal(false)
        }
    //number array 1-50
    const numberArray = Array.from(Array(31), (_, i) => i + 1)

    const submit =() => {

    }
    const {transW400, windowSize} = useWindowSizeTrans()
    const transWFull = transW400(CSS_LEN.popup.wide)
    const innerPopupWidth = transWFull-CSS_LEN.popup.paddingX
    //화면 heigth를 측정하여 화면보다 100px작게, 화면이 크면 더작게70프로
    //{width:transWFull+'px',padding:'5px'

    
    const popupHeight=()=>{
        
        //3개 한줄 3rem(48px)
        const lineNumber = Math.ceil(studentList.length/3)
        const lineHeigth = lineNumber*50+50 //48
        if(lineHeigth<200)return 200
        if(windowSize.height-100>500 && lineHeigth > 500){ //화면이 500보다 크고, lineHeigth가 500보다 크면 500
            return 500
        }
        if(windowSize.height-100<=500 && lineHeigth > 500){ //화면이 500보다 작고, lineHeigth가 500보다 크면 화면보다 100작게
            return windowSize.height-100
        }
        return lineHeigth;
    }
    const contents =( //p-12 overflow-y-scroll
    //grid grid-cols-3 gap-x-2
    //borderColor: 'rgb(248 113 113)',
    <div className=" box-border" style={{width:transW400(CSS_LEN.popup.wide)+'px',}} >
        <div className=" mt-3 grid box-border  " style={{width:(transW400(CSS_LEN.popup.wide-20))+'px', height:`${(popupHeight()-30)+'px'}`, overflowY: 'scroll',
            gridTemplateColumns:'repeat(3, minmax(0, 1fr)',gap: '0.25rem'}}>
            {studentList.map((v,i)=>{
                return(
                <div key={'popupstu'+i} className="p-2   border-2 shadow-md rounded-md cursor-pointer flex justify-center items-center hover:bg-indigo-300" style={{height:'3rem'}}
                    onClick={()=>{
                        editStudentsVar.setStudent(v)
                        popupClose()
                    }}>
                    <div className=" font-bold text-lg" >{v.number}. {v.name}</div>
                </div>
                )}
            )}
        </div>
        {/* <div className="text-sm  box-border" style={{width:innerPopupWidth+'px',}}>
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
        </div> */}

   </div>
)

    
return(
    <PopupCenterStudent onClose={popupClose} contents={contents} option={{width:transW400(CSS_LEN.popup.wide), height:popupHeight()}} isTopClose={false} />
)
}