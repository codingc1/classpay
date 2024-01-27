


// {setSleectPermissionNum}:{
//     setSleectPermissionNum:React.Dispatch<React.SetStateAction<number>>
// }

//계좌조회, 계좌입금, 계좌출금
export const InstitutionBank=()=>{

    
    return(
        <div className="w-full mt-3 px-3">
            <header className="w-full flex ">
                <button className="w-24 h-12 flex justify-center items-center bg-gray-200 rounded-sm text-white
                        cursor-pointer" >
                        <div>1인</div>  
                </button>
                <button className="w-24 h-12 flex justify-center items-center bg-gray-200 rounded-sm text-white
                        cursor-pointer" >
                        <div>여러명</div>  
                </button>
            </header>

        </div>
    )
}