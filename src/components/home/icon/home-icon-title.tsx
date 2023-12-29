import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';



export const HomeIconTitle=()=>{
    let navigate = useNavigate()
    const onClick=()=>{
        navigate('/')
    }

return(
    <div className="mr-2 cursor-pointer hover:text-blue-400" onClick={onClick}><IoHomeOutline /></div>
)
}