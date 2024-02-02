import { useWindowSizeTrans } from "../../../func/html/useWidthTrans";
import { CSS_LEN } from "../../../func/html/width-contain/css-contain";




//컴포넌트에서 다른 컴포넌트를 담기
// const ProductBase = (props:any) => { //https://ko.legacy.reactjs.org/docs/composition-vs-inheritance.html


//     const {transWidth} = useWindowSizeTrans()
//     return (
//         <div className="w-full min-h-screen flex flex-col items-center bg-white">
//             <div className="py-5 max-w-sm  rounded-xl shadow-xl bg-slate-200 flex flex-col items-center" 
//             //mt-5 ,height:'500px' //490px
//             style={{width:transWidth(CSS_LEN.basic_wide), minHeight:'500px'}}>
//                {props.children}
//         </div>
//         </div>
//     );
// }



// export default ProductBase;
interface ProductBaseProps { //chat gpt https://chat.openai.com/c/b9210f57-c161-4cac-af96-4056ca1d7d5c
    children: React.ReactNode;
    backgroundColor?: string;
}
const ProductBase: React.FC<ProductBaseProps>= ({ children, backgroundColor = 'bg-slate-200' }) => {
    const { transW400 } = useWindowSizeTrans();

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-white">
            <div
                className={`py-5 max-w-sm rounded-xl shadow-xl ${backgroundColor} flex flex-col items-center`}
                style={{ width: transW400(CSS_LEN.basic_wide), minHeight: '500px' }}
            >
                {children}
            </div>
        </div>
    );
};

export default ProductBase;