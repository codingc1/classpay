import { LOGIN_ROUTE_NAME } from "../../routers/route-name-constants"


export const GoBackLogin =()=>{

    return(
        <a href={LOGIN_ROUTE_NAME} className="hover:underline text-lime-600">Go back login &rarr;</a>
    )
}