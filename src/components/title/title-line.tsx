import { useNavigate } from "react-router-dom";




export const TitleAndLine = ({title}:{title:string}) => {
    let navigate = useNavigate();


    return(
        <section className="px-1 w-full flex justify-between items-center bg-white " style={{borderBottom:'1px solid #C0C0C0',height:'3.1rem'}}>
            <div className=" h-full flex justify-center items-center cursor-pointer rounded-t-xl" style={{height:'2.5rem'}}
                onClick={()=>navigate(-1)}>&#60;</div>
            <div>{title}</div>
            <div className="rounded-t-xl" style={{height:'2.5rem'}}></div>
        </section>
    )
}