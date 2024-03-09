import { useReactiveVar } from "@apollo/client"
import { client } from "../../../../apollo"
import useError from "../../../../func/sys/err/useErr"
import { cp_payUpdateInfoMutationDocument } from "../../../../hooks/cp-pay/basic/createClassPay.generated"
import { cpPayVar, editCpPayVar } from "../../../../stores/cp-pay-store"
import { logoutFunc } from "../../../../func/sys/auth/logout-func"




export const useSettingSubmit = () => {
  const cppay = useReactiveVar(cpPayVar).cppay;
  
  const [handleError] = useError()
    const submit = ( {setLastSettingMutationTime, numberOfDigits, isTrade, moneyUnit, objKey}:{
      setLastSettingMutationTime:React.Dispatch<React.SetStateAction<Date>>,
      numberOfDigits?:number,
      moneyUnit?:string,
      isTrade?:boolean,
      objKey:string  
    } ) => {
      
      // if(!isCheckPossibleMutation()){
      //     alert('업데이트에 실패하였습니다 다시 시도해 주세요.')
      //     return
      // }
      const inMoneyUnit = moneyUnit || cppay.moneyUnit;
      const inNumberOfDigits = numberOfDigits || cppay.numberOfDigits;
      const inIsTrade = isTrade === undefined ? !cppay.isTrade : isTrade;
    
      const inputObj = {schoolName:cppay.className, classTh:cppay.classTh, classNum:cppay.classNum, moneyUnit:inMoneyUnit, 
        numberOfDigits:inNumberOfDigits, isTrade:inIsTrade, code:'',}
      // const isConfirm = window.confirm(' 학급페이를 삭제하시겠습니까? ')
      // if(!isConfirm)return
      client.mutate({ //https://www.youtube.com/watch?v=cYIhx8dusa4
          mutation:cp_payUpdateInfoMutationDocument,
          variables:{
            cp_payInfoEditInput:{objKey, ...inputObj}
          }
        })
        .then(async({data})=>{
          if(data &&data.cp_payUpdateInfo.ok  && data.cp_payUpdateInfo.result){
            alert('업데이트 하였습니다.')
            // editCpPayVar.setPayID(0) 
            editCpPayVar.cppay.set(data.cp_payUpdateInfo.result)
              // await client.refetchQueries({
              //     include: [CP_PAYS_QUERY, CP_PAY_INFO_QUERY],//cppay list refech
              //   });
            // alert('삭제하였습니다. 계정이 존재하지 않으므로 아용하시려면 다시 생성하여야 합니다.')
            // logoutFunc()
            // navigate('/')
          }else if(data?.cp_payUpdateInfo.error){
            alert(data.cp_payUpdateInfo.error)
          }
        })
        .finally(()=>{
          setLastSettingMutationTime(new Date())
          logoutFunc()
          window.location.reload();
        })
        .catch(e => handleError(e, 'cp_LoginMutation'))
  }


  return {  submit}


}

