import { useEffect, useState } from "react"
import { useWindowSizeTrans } from "../../../../func/html/useWidthTrans"
import { CSS_LEN } from "../../../../func/html/width-contain/css-contain"
import { CP_ME_QUERY, useMe } from "../../../../hooks/user/useMe"
import { addCommaMan } from "../../../../func/basic/number/addComma"
import { useMutation, useReactiveVar } from "@apollo/client"
import { cpPayVar } from "../../../../stores/cp-pay-store"
import NomadInputPrice from "../../../../components/input/nomad-input/nomad-input-price"
import NomadCssButton from "../../../../components/button/nomad-css-btn"
import { StudentListContent } from "./sendmoney/student-list-content"
import { cpStudentsVar, editStudentsVar } from "../../../../stores/cp-students-store"
import { cpStudentFn } from "../../../../stores/sub-store-fn/cp-student-fn"
import useErrorShow from "../../../../func/sys/err/useErrShow"
import { CP_INDIVIDUAL_SENDMONEY_MUTATION } from "../../../../hooks/cp-pay/institution/bankbook/cp-bankbook"
import { individual_sendMoneyMutationMutation, individual_sendMoneyMutationMutationVariables } from "../../../../hooks/cp-pay/institution/bankbook/cp-bankbook.generated"
import { client } from "../../../../apollo"
import { useBankBookMu } from "../../../../hooks/cp-pay/institution/bankbook/useBankBookMu"
import { useNavigate } from "react-router-dom"
import { TitleAndLine } from "../../../../components/title/title-line"
import { checkMoney } from "../../../../utils/institution/chk-sendmoney"
import { cls } from "../../../../func/basic/string/cls"
import { InlineInputLable } from "../../../../components/input/inline-input-lable"




//개인이 개인에게 송금하기
export default function BankBookSendMoney() {
    let navigate = useNavigate();
    const {data:meData} =useMe()
    const student = useReactiveVar(cpStudentsVar).student;
    const moneyUnit = useReactiveVar(cpPayVar).cppay.moneyUnit;
    const numberOfDigits = useReactiveVar(cpPayVar).cppay.numberOfDigits;
    const [note, setNote] = useState('') //비고

    useEffect(()=>{
        editStudentsVar.setStudent(cpStudentFn.store.student)
        return ()=>editStudentsVar.setStudent(cpStudentFn.store.student)
    },[])

    
    const [money, setMoney] = useState(0)
    const [isStudentModal, setIsStudentModal] = useState(true)
    const moneychange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const num = Number(e.target.value)
        if(isNaN(num) ||num < 0)return
        setMoney(num)
    }

    const onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setNote(e.target.value)      
    }
    
    const [handleError] = useErrorShow()
    const { billMutation,loading:bankbookloading } = useBankBookMu({})//setData:setNowBook,setIsLoading:setIsLoading
    const [individual_sendMoneyhMutation, { loading,  }] = useMutation<individual_sendMoneyMutationMutation, individual_sendMoneyMutationMutationVariables>(CP_INDIVIDUAL_SENDMONEY_MUTATION, {async onCompleted (data){
        const res = data.individual_sendMoney;
        if(res.ok){
            await client.refetchQueries({
                include: [CP_ME_QUERY, ],//cppay list refech
                });
            //backbook refetch - 이번 달 데이터만 refetch
                const date = new Date()
                const year = date.getFullYear()
                const month = date.getMonth()+1
                billMutation(year, month) //이번 달 데이터만 refetch
            setMoney(0)
            alert('송금하였습니다.')
            navigate(-1)
        }else if(res.error){
            alert('송금에 실패하였습니다.'+res.error)
        }

        }, onError: (err) => {
        handleError(err, '송금에 실패하였습니다.')
        // setIsLoading(false)
        } });
    const submit=()=>{
        //check
        if(!meData)return;
        const {error} = checkMoney.cpCheckSendMoney(meData.cp_me, student, money)
        if(error){
            alert(error); return;
        }
        if(loading)return;
        const isConfirm = confirm(`${student.name}에게 ${money}를 보내겠습니까?`)
        if(!isConfirm)return;
        individual_sendMoneyhMutation({
            variables: { //year:newYear, month:newMonth
                cp_sendMoneyIndivisualInput: { receiver_id:student.id, money, desciption:note?note:'송금' }, //cppay_id:Number(payid),
            },
            });
    }
    const {transW400,chk} = useWindowSizeTrans()
    const marginT3 = chk.w.md ? 'mt-3' : '' //md보다 작으면 mt-5
    return( 
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
        <div className="py-5 max-w-sm  rounded-xl shadow-xl  flex flex-col items-center" //bg-slate-200
        //mt-5 ,height:'500px' //490px 
        //w-[40px] h-[50px]
            style={{width:transW400(CSS_LEN.basic_wide), minHeight:'500px'}}>
        <div className={cls(marginT3,"w-full mt-3 px-3")}>
            <TitleAndLine title="송금하기" />
            {/* <div><div className="text-xl font-bold ">송금하기</div></div> */}
            
            <div className="mt-5 flex text-lg ">
                <div>보유금액:</div>
                <div className="flex-1 px-2 font-semibold">{meData?addCommaMan(meData.cp_me.money,numberOfDigits):0}{moneyUnit}</div>
            </div>
            <div className="mt-2 flex h-10 items-center ">
                <div className="text-lg ">받는 사람 :</div>
                <div className="ml-3 h-10 flex-1 flex justify-center items-center  rounded-md shadow-xl font-semibold border-2 cursor-pointer  " onClick={()=>setIsStudentModal(true)}>
                    {student.name?student.number +'. '+ student.name:''}
                </div>
            </div>
            <div className="mt-2"></div>
            <NomadInputPrice value={money}  onChange={moneychange} label="보낼 금액" name="price" isHideZeoro={true} options={{focusColor:'c_input_blue'}} moneyUnit={moneyUnit}/>

            <InlineInputLable label={'비고'} name={'note'} placeholder={'내용(선택)'} value={note} onChangeValue={onChange} />
            
            <div className="  flex mt-3" >
                    <NomadCssButton text={"보내기"} onClick={submit} large={true} option={{cls:'c_btn_red'}} />
            </div>
        </div>

        </div>
            {isStudentModal && <StudentListContent setIsModal={setIsStudentModal} />}
        </div>
    )
}