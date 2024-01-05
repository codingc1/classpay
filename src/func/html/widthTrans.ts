

//500px를 기준으로 현재의 width를 비율로 계산하여 반환
export const windowSizeTrans = {
    width:function(width:number){
        const ratio = width/500
        return ratio
    },
    // height:function(height:number){
    //     const ratio = height/500
    //     return ratio
    // }
}
