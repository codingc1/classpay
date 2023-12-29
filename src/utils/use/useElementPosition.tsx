import {  useEffect,  useState } from "react";


//elementRef: React.RefObject<HTMLElement>
//https://timetoprogram.com/get-position-of-element-react-js/
export const useElementPosition = (elementRef: React.RefObject<HTMLElement>|null,
   ) => {//

        // const elementRef = useRef(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });
      
        useEffect(() => {
          function handleResize() {
            const x = elementRef?.current?.offsetLeft||0;
            const y = elementRef?.current?.offsetTop||0;
            const width = elementRef?.current?.offsetWidth||0;
            const height = elementRef?.current?.offsetHeight||0;
            // console.log('x',x,'y',y,'wide',width,'height',height)
            setPosition({ x, y });
          }
      
          handleResize(); // initial call to get position of the element on mount
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, [elementRef, ]);

    return [position]
}