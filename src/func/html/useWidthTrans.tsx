import { useWindowSize } from "../../utils/use/useWindowSize"
import { windowSizeTrans } from "./widthTrans"





export const useWindowSizeTrans=()=>{


    const windowSize = useWindowSize()

    //500px를 기준으로 기기에 따라 width를 조정
    //400px보다 작다면(ex iphone 12:390px) transWidth(500)으로 조정
    //크다면 그대로 사용
    const wFull =()=>{
        if(windowSize.width>500){ return 500 }
        return windowSize.width
    }
    const transW500 = (width:number) => { //transWidth(480)이면 500일때 480비율
        if(windowSize.width > 500)return width;

        const ratio = windowSizeTrans.width(windowSize.width)
        const size= width*ratio
        //소수점 제거
        return Math.floor(size)
    }
    // const transHeight = (height:number) => {
    //     const ratio = widthTrans(windowSize.width)
    //     return height*ratio
    // }
    const wPer = (percent:number) => {
        //wFull 에서 percent만큼의 비율
        const ratio = windowSizeTrans.width(windowSize.width)
        const w = transW500
        return percent*wFull()
    }
    const chk={
        w:{
            // per:
            sm:windowSize.width>=640,
            md:windowSize.width>=768,
            lg:windowSize.width>=1024,
            xl:windowSize.width>=1280,
            xxl:windowSize.width>=1536,
        },
    }

    return {transW500, windowSize, chk}

}