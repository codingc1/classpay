
//일주일간 열지 않기, 닫기 모음
export const PopuCenterCloseBtn=({ close}:{
  close:()=>void})=>{




    return(
        <div className="w-full flex justify-end items-center mt-2 text-xs">
                    {/* <div className="mr-2 cursor-pointer hover:text-blue-400"
                        onClick={()=>console.log('hi')}>text</div> */}
                    <div className="flex justify-center items-center w-12 p-1 border-white border-2 rounded cursor-pointer hover:border-blue-400"
                        onClick={()=>close()}>닫기</div>
                </div>
    )
}