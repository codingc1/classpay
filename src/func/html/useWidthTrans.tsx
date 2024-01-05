import { useWindowSize } from "../../utils/use/useWindowSize"
import { windowSizeTrans } from "./widthTrans"





export const useWindowSizeTrans=()=>{


    const windowSize = useWindowSize()

    //500px를 기준으로 기기에 따라 width를 조정
    //400px보다 작다면(ex iphone 12:390px) transWidth(500)으로 조정
    //크다면 그대로 사용
    const transWidth = (width:number) => {
        if(windowSize.width > 500)return width;

        const ratio = windowSizeTrans.width(windowSize.width)
        return width*ratio
    }
    // const transHeight = (height:number) => {
    //     const ratio = widthTrans(windowSize.width)
    //     return height*ratio
    // }


    return {transWidth}

}