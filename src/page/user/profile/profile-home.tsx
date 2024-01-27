import { useState } from "react"
import BaseBgGray from "../../../components/layout/basic-component/base-bggray"
import ProductBase from "../../../components/layout/basic-component/product-base"
import { TitleAndLine } from "../../../components/title/title-line"
import { useWindowSizeTrans } from "../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../func/html/width-contain/css-contain"
import { useMe } from "../../../hooks/user/useMe"
import { ProfilePasswordInput } from "./profile-password-input"
import { CreateAccPassword } from "./create-acc-password"
import { CreateButton } from "../../../components/button/create-button"



export const ProfileHome=()=>{ 
    const {data:meDate} = useMe()
    const [isPassModi, setIsPassModi] = useState(false)
    const [oriPassword, setOriPassword] = useState('')
    const [password, setPassword] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [passMsg, setPassMsg] = useState('')
  //password check 숫자만으로도 가능..하게

  const submit=()=>{

  }

    const {transWidth} = useWindowSizeTrans()
    return(
        // <ProductBase>
        <BaseBgGray>
         {/* <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className="py-5 max-w-sm  rounded-xl shadow-xl  flex flex-col items-center" //bg-slate-200 
            style={{width:transWidth(CSS_LEN.basic_wide), minHeight:'500px'}}> */}
            <div className="w-full mt-3 px-3">
                <TitleAndLine title="내 정보" />
                {/* 1.25rem */}
                <div className="" style={{fontSize: '1rem'}}>
                    <div className="flex py-2">
                        <div className="mr-2">번호 :</div>
                        <div>{meDate?.cp_me.number||0}번</div>
                    </div>
                    <div className="flex py-2">
                        <div className="mr-2">이름 :</div>
                        <div>{meDate?.cp_me.name||''}</div>
                    </div>
                    {/* <div className="w-12 mt-2 text-center text-xs ">{el.number}번</div> */}
                    <div className="py-2">id : {meDate?.cp_me.mainId||''}</div>
                    <div className="flex py-2 items-center">
                        <div className="mr-2">비밀번호 : </div>
                        <div className="p-2 border-2  text-base rounded-lg cursor-pointer" onClick={()=> setIsPassModi(!isPassModi)}>비밀번호 바꾸기</div>
                    </div>
                    {isPassModi && <div className="w-full">
                    <ProfilePasswordInput password={oriPassword} setPassword={setOriPassword} />
                    <CreateAccPassword password={password} passwordTwo={passwordTwo} setPassword={setPassword} setPasswordTwo={setPasswordTwo} passMsg={passMsg} setPassMsg={setPassMsg} 
                        isModifyMode={true} />
                        <div className="mt-3"></div>
                        <CreateButton submit={submit} actionText={"비밀번호 변경"}  />
                    </div>}
                </div>
                {/* <div><div className="text-xl font-bold ">송금하기</div></div> */}
                
                {/* <div className="mt-5 flex text-lg ">
                    <div>보유금액:</div>
                    <div className="flex-1 px-2 font-semibold">{meData?addCommaMan(meData.cp_me.money):0}{moneyUnit}</div>
                </div>
                <div className="mt-2 flex h-10 items-center ">
                    <div className="text-lg ">받는 사람 :</div>
                    <div className="ml-3 h-10 flex-1 flex justify-center items-center  rounded-md shadow-xl font-semibold border-2 cursor-pointer  " onClick={()=>setIsStudentModal(true)}>
                        {student.name?student.number +'. '+ student.name:''}
                    </div>
                </div>
                <div className="mt-2"></div>
                <NomadInputPrice value={money}  onChange={moneychange} label="보낼 금액" name="price" isHideZeoro={true} options={{focusColor:'c_input_blue'}} moneyUnit={moneyUnit}/>
                <div className="  flex mt-3" >
                        <NomadCssButton text={"보내기"} onClick={submit} large={true} option={{cls:'c_btn_red'}} />
                </div> */}
            </div>
        {/* </ProductBase> */}
        {/* </div>
             {isStudentModal && <StudentListContent setIsModal={setIsStudentModal} />}
         </div> */}
        </BaseBgGray>
    )
}