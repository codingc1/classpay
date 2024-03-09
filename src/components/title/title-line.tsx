import { useNavigate } from "react-router-dom";




export const TitleAndLine = ({title}:{title:string}) => {
    let navigate = useNavigate();
 

    return(
        <section className="px-1 w-full flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0',height:'3.2rem'}}>
            <div className="  w-5 h-full flex justify-center items-center cursor-pointer rounded-t-xl" style={{height:'2.5rem'}}
                onClick={()=>navigate(-1)}>&#60;</div>
            <div className="text-base">{title}</div>
            <div className="rounded-t-xl" style={{height:'2.5rem'}}></div>
        </section>
    )
}
{/* <section className="px-1 w-full h-[50px] flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0'}}>
<div className="w-[40px] h-full flex justify-center items-center cursor-pointer rounded-t-xl" onClick={()=>navigate(-1)}>&#60;</div>
<div>나의 통장</div>
<div className="w-[40px]  rounded-t-xl"></div>
</section> */}