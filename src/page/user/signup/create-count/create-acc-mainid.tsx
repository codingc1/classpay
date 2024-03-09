import {  useMutation } from "@apollo/client";
import { useCallback, useRef } from "react"
import { FormErrorLight } from "../../../../components/bundle/signup/form-error-light";
import { FormErrorXsLingtColorRedBlue } from "../../../../components/bundle/signup/form-error-xs-light-redblue";
import { chkCpUser } from "../../../../utils/check-create/cp-id-password-check";
import { CP_CHECK_EXISTID_MUTATION } from "./cp_checkExistId";
import { cp_checkExistIdMutationMutation, cp_checkExistIdMutationMutationVariables } from "./cp_checkExistId.generated";
import useErrorShow from "../../../../func/sys/err/useErrShow";


interface ITdProps {
    mainId:string; 
    setMainId: React.Dispatch<React.SetStateAction<string>>;
    isMainIdMsgObj:{isMainIdMsg: string;isMainIdError: boolean;};
    setIsMainIdMsgObj:React.Dispatch<React.SetStateAction<{isMainIdMsg: string; isMainIdError: boolean; }>>
  }
// additionalSenMenu, setAdditionalSenMenu
// :{mainId:string, setMainId: React.Dispatch<React.SetStateAction<string>>,isMainIdMsgObj,setIsMainIdMsgObj:React.Dispatch<React.SetStateAction<{
//     isMainIdMsg: string; isMainIdError: boolean; }>>}
export const CreateAccMainId: React.FC<ITdProps>=({mainId, setMainId,isMainIdMsgObj, setIsMainIdMsgObj})=>{
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null) 


    const [handleError] = useErrorShow()
     const [checkPossibleIdMutation, { loading,  }] = useMutation<cp_checkExistIdMutationMutation, cp_checkExistIdMutationMutationVariables>(CP_CHECK_EXISTID_MUTATION, {
        onCompleted(data) {
            if(data.cp_checkExistId?.ok === true){
            setIsMainIdMsgObj({isMainIdMsg:'사용가능합니다', isMainIdError:false})
            }else if(data.cp_checkExistId?.error){
            setIsMainIdMsgObj({isMainIdMsg:data.cp_checkExistId.error, isMainIdError:true}) //'사용할 수 없는 아이디입니다'
            }else{
                alert('error')
            }
        }, onError: (err) => {
            handleError(err, 'useChecks')
          } });

    //useCallback, login실제 구현
    //https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
    const onChangeMainId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newMainId = e.target.value
        setMainId(newMainId)
        if (chkCpUser.mainIdErrMsg(newMainId)) {  //이전 !mainIdRegex.test(newMainId)
            setIsMainIdMsgObj({isMainIdMsg:chkCpUser.mainIdErrMsg(newMainId), isMainIdError:true})
        } else {
            setIsMainIdMsgObj({isMainIdMsg:"", isMainIdError:false}) //일단은 오료 메세지 없앰
            if (timerRef.current) { 
                clearTimeout(timerRef.current);
              }
            timerRef.current = setTimeout(async () => {
              if(loading)return;
            checkPossibleIdMutation({
                variables: {
                        checkPossibleIdInput: { mainId:newMainId, },
                        },
                });
              }, 800);
            
        }
      }, [])
    // const onChangeMainId=(e: { target: { value: SetStateAction<string> } })=>{
    //     setMainId(e.target.value)
    //     // setIsMainIdMsgObj({isMainIdError:false})
    // }
   
    const checkMainSubmit  = () => { //아이디 유효 조회 버튼 눌렀을 때
        //에러 있으면 리턴
        if(mainId===''){
            setIsMainIdMsgObj({isMainIdMsg:'id를 입력해 주세요', isMainIdError:true})
            return
        }
        //chkCpUser.mainIdErrMsg(mainId)
        if(isMainIdMsgObj.isMainIdError || loading || isMainIdMsgObj.isMainIdMsg.length !== 0 ){
            console.log(isMainIdMsgObj,'err')
            return
        }
        //1초도 안되고 또 조회 안됨
        // const dateDiffSec = Math.floor((new Date().getTime()-lastRequestTime.getTime())/(1000)); //floor버림 //.ceil 올림
        // if(dateDiffSec < 1){
        //   console.log('checkid', new Date())
        //   return
        // }
        checkPossibleIdMutation({
            variables: {
            checkPossibleIdInput: { mainId, },
            },
        });
        }
        const makeMarginBottom=()=>{
            if( isMainIdMsgObj.isMainIdMsg.length>0 ){
                return ''
            }else{
                return 'mb-3'
            }
        }

    return( //error = false msg = '사용가능합니다' 가 되어야 함
    // w-80 
    <div className={`w-full ${makeMarginBottom()} `}>
        <div className="w-full flex" >
          <label className="w-1/4 flex justify-center items-center text-center">ID</label >
          <input className="w-full input-lime" placeholder="id"
            value={mainId} onChange={onChangeMainId}/>

            {/* <button onClick={checkMainSubmit}
              className="btn py-2 text-base font-normal w-10" >
              조회
            </button> */}
        </div>
        {isMainIdMsgObj.isMainIdError && <FormErrorLight errorMessage={isMainIdMsgObj.isMainIdMsg} />}
        {!isMainIdMsgObj.isMainIdError && isMainIdMsgObj.isMainIdMsg.length>0 &&
            (<FormErrorXsLingtColorRedBlue errorMessage={isMainIdMsgObj.isMainIdMsg} isError={isMainIdMsgObj.isMainIdError} />)}            
    </div>
    )
}

{/* <div className=" mb-2 w-full flex ">
    <label className=" w-1/3 flex justify-center items-center text-center">학급명</label >
    <input className="w-full input-lime " name={'className'} placeholder="이름" value={className} onChange={onChangeClassName}/>
</div> */}