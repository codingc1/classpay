
import LocalStoragePopup from '../../../../api/token/localstorage-create-stu';
import PopupCenterHCustom from '../../../../components/popup/center-h-custom/popup-real-center';



export const ExplanAgreeStudent =({onClose}:{onClose:()=>void})=>{
    const isLocalStudentAgree = LocalStoragePopup.getStudentAgree()

    const confirm=()=>{
        LocalStoragePopup.setStudentAgree()
        onClose()
    }
    //한글파일 다운로드 할 수 있게
    //https://stackoverflow.com/questions/50694881/how-to-download-file-in-react-js
    const closeFunc=()=>{
        onClose()
    }
    const contents =(
    <div className='w-full h-full flex flex-col justify-center text-sm'>
        <div>수집 항목 : 학생 번호, 이름, 활동내역</div>
        <div>수집 목적 : 경제교육</div>
        <div>보유/이용 기간 : 2025년 2월 까지</div>
        <div className='mt-2'>※ 만 14세 미만의 경우, 법적대리인의 동의가 필요합니다.</div>
        <div>※ 개인정보 수집 및 이용, 제공에 동의 하지 않을 시 서비스 이용이 제한될 수 있습니다.</div>

        {/* <div>확인</div>
        <div>취소</div> */}
        
        <div className="w-full flex justify-center items-center">
            <div className="mt-3 block rounded-lg bg-slate-200 hover:bg-slate-300 texg-lg cursor-pointer" onClick={confirm}
                    style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px'}}>확인</div>
            <div className="mt-3 ml-2 block rounded-lg bg-slate-200 hover:bg-slate-300 texg-lg cursor-pointer" onClick={closeFunc}
                    style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px'}}>취소</div>
        </div>
        
    </div>
    )

    return(
        <div>
            {!isLocalStudentAgree && <PopupCenterHCustom onClose={closeFunc} contents={contents} option={{width:350, height:240}}/>}
        </div>

    )
}


  
