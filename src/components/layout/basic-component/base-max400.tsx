



// export default ProductBase;
interface ProductBaseProps { //chat gpt https://chat.openai.com/c/b9210f57-c161-4cac-af96-4056ca1d7d5c
    children: React.ReactNode;
    backgroundColor?: string;
    bgInner?: string;
}
const BaseMax400: React.FC<ProductBaseProps>= ({ children, backgroundColor = 'bg-slate-200', bgInner='bg-white' }) => {

    return ( //md:mt-10 lg:mt-20
    <div className={`w-full h-screen flex flex-col items-center ${backgroundColor}` }>
        <div className={`rounded-xl shadow-xl  max400width md:mt-5 lg:mt-10 ${bgInner}`} >
                {children}
        </div>
    </div>
    );
};

export default BaseMax400;