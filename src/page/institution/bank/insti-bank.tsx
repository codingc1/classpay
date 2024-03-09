


// {setSleectPermissionNum}:{
//     setSleectPermissionNum:React.Dispatch<React.SetStateAction<number>>
// }

import { useState } from "react"
import SelectMenuOneLine from "./nomal-bank/select-menus-oneline"
import { ServerStudents } from "./nomal-bank/send-server-students";
import { SendOneStudent } from "./nomal-bank/send-one-student";


//계좌조회, 계좌입금, 계좌출금
//일반 은행
export const InstitutionBank=()=>{
    const options = ['1인 송금', '여러명에게 보내기', '여러명을 한명에게'];
    const [selectedOption, setSelectedOption] = useState('1인 송금');

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  //
    return(
        <div className="w-full mt-3 px-3">
            {/* <header className="w-full flex ">
                <button className="w-24 h-12 flex justify-center items-center bg-gray-200 rounded-sm text-white
                        cursor-pointer" >
                        <div>1인</div>  
                </button>
                <button className="w-24 h-12 flex justify-center items-center bg-gray-200 rounded-sm text-white
                        cursor-pointer" >
                        <div>여러명에게,의</div>  
                </button>
            </header> */}
            <div style={{width:'80%'}}>
                <SelectMenuOneLine options={options} selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
            </div>
            {selectedOption==='여러명에게 보내기' && <ServerStudents />}
            {selectedOption==='1인 송금' && <SendOneStudent />}
            {selectedOption==='여러명을 한명에게' && <div className="mt-3">준비중입니다.</div>}
        </div>
    )
}