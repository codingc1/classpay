

// 연월일을 표시하는 컴포넌트
export const ThDayHead = ({currentDate, isLoading, handleMinusButtonClick,handlePlusButtonClick, loading}:{
    currentDate:{year:number, month:number, day:number},
    handleMinusButtonClick:()=>void,
    handlePlusButtonClick:()=>void,
    loading:boolean,
    isLoading:boolean
}) => {


    return(
    <div className="flex justify-between items-center  " style={{height:'3.5rem',borderTop:'1px solid #C0C0C0', borderBottom:'1px solid #C0C0C0'}}>
        {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
            <div className="cursor-pointer text-center" style={{width:'3rem'}} onClick={handleMinusButtonClick}>&#9001;</div>}
        <div className="text-lg">{currentDate.year}.{currentDate.month}.{currentDate.day}</div>
        {(loading||isLoading) ?<div className="text-center"style={{width:'3rem'}}>..</div>:
            <div className=" text-center cursor-pointer" style={{width:'3rem'}} onClick={handlePlusButtonClick}>&#9002;</div>}
    </div>
    )
}