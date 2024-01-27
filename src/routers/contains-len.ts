


//server : hangColumnLength
export const CP_PRODUCT_COLUMN ={ //https://choewy.tistory.com/157
    //price<0 || price>2100000000||qty<0 || qty>2100000000||price<0 || price>2100000000
        //javascript maxInt 9007,1992,5474,0991
        maxPrice: 2100000000, //21억 //mysql 21,4748,3647 //msql bigint 9223,3720,3685,477,5807
        maxPriceHangul: '21억',
    } as const

