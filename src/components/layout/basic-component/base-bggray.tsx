import { useWindowSizeTrans } from "../../../func/html/useWidthTrans";
import { CSS_LEN } from "../../../func/html/width-contain/css-contain";





// export default ProductBase;
interface ProductBaseProps { //chat gpt https://chat.openai.com/c/b9210f57-c161-4cac-af96-4056ca1d7d5c
    children: React.ReactNode;
    backgroundColor?: string;
    outterBackgroundColor?: string;
}
const BaseBgGray: React.FC<ProductBaseProps>= ({ children, 
    outterBackgroundColor='bg-slate-200', backgroundColor = 'bg-white' }) => {
    const { transWidth } = useWindowSizeTrans();

    return (
        <div className={`w-full py-2 min-h-screen flex flex-col items-center ${outterBackgroundColor}`}>
        <div className={` py-2 max-w-sm rounded-xl shadow-xl ${backgroundColor} flex flex-col items-center`}
            style={{ width: transWidth(CSS_LEN.basic_wide), minHeight: CSS_LEN.min_height+'px' }}>
                {children}
            </div>
        </div>
    );
};

export default BaseBgGray;