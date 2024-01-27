

//sortbykey
export const sortArrayByKey =<T, K extends keyof T>( original:T[],  keyName: K ):T[]=>{ //th오름차순으로 정렬
    return original.sort((a, b) => {
        if(a[keyName] < b[keyName]) { return -1; }
        if(a[keyName] > b[keyName]) { return 1; }
        return 0;
    })
}