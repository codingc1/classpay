import { useRef } from "react"


//디바운스 => 일정 시간이 지나면 함수 실행
export const useDebounceFunction =()=>{
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null) 
    

    const debounceFn =(func:any, debounceTime?:number)=>{
        const awaitTime = debounceTime? debounceTime : 800

        if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        timerRef.current = setTimeout(async () => {
            func()
          }, awaitTime);
    }


    return [debounceFn]
}

//   function myFunc(callback:any, args:IHangStudent[]) { //apply방식 - 함수를 매개 변수로 전달
//       //http://daplus.net/javascript-javascript-%ED%95%A8%EC%88%98%EB%A5%BC-%EB%A7%A4%EA%B0%9C-%EB%B3%80%EC%88%98%EB%A1%9C-%EC%A0%84%EB%8B%AC/
//       //@ts-ignore
//       callback.apply(this , args);
//     //   debounceFn(test)
//   }