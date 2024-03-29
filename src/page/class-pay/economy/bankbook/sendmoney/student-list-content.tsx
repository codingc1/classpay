import { useWindowSizeTrans } from "../../../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../../../func/html/width-contain/css-contain"
import PopupCenterStudent from "../../../../../components/popup/center-h-custom/popup-center-student"
import { cpStudentsVar, editStudentsVar } from "../../../../../stores/cp-students-store"
import { useReactiveVar } from "@apollo/client"

//학생리스트를 보여주는 팝업
export const StudentListContent=({setIsModal}:{setIsModal:React.Dispatch<React.SetStateAction<boolean>>}) => {

    const studentList = useReactiveVar(cpStudentsVar).students
    //studentList를 3번 반복
    // const dummy = studentList.concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList).concat(studentList)
    
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
        const lineNumber = Math.ceil(studentList.length/4) //올림 5명->2줄 50명->13줄
        const lineHeigth = lineNumber*50+60 //48 //13줄*48px+50px=674px
        // if(lineHeigth<200)return 200
        if(windowSize.height>650 && lineHeigth > 650){ //화면이 650보다 크고, lineHeigth가 650보다 크면 650
            return 650
        }
        if(windowSize.height<=650 ){ //화면이 740보다 작고, lineHeigth가 740보다 크면 화면보다 100작게
            return windowSize.height
        }
        return lineHeigth;
    }
    const contents =( //p-12 overflow-y-scroll
    //grid grid-cols-3 gap-x-2
    //borderColor: 'rgb(248 113 113)', 
    //gridTemplateColumns:'repeat(3, minmax(0, 1fr)',gap: '0.25rem'
    <div className=" box-border" style={{width:transW400(CSS_LEN.popup.wide)+'px',}} >
        {/* transW400(CSS_LEN.popup.wide-20) */}
        {/* width:(transW400(CSS_LEN.popup.wide-20))+'px',  */}
        <div className="px-2 grid box-border grid-cols-4 gap-x-1 " style={{height:`${(popupHeight()-40)+'px'}`, //overflowY: 'scroll',
            }}>
            {studentList.map((v,i)=>{
                return(
                    //style={{height:'3rem'}}
                <div key={'popupstu'+i} className="  border-2 shadow-md rounded-md cursor-pointer flex justify-center items-center hover:bg-indigo-300" 
                    onClick={()=>{
                        editStudentsVar.setStudent(v)
                        popupClose()
                    }}>
                    <div className=" font-semibold text-lg" >{v.number}.{v.name.slice(0,3)}</div>
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
    <PopupCenterStudent onClose={popupClose} title={'받는 사람'} contents={contents} option={{width:transW400(CSS_LEN.popup.wide), height:popupHeight()}} isTopClose={false} />
)
}