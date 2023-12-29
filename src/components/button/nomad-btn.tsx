import { cls } from "../../func/basic/string/cls";




interface ButtonProps {
  large?: boolean;
  width?: string;
  text: string;
  [key: string]: any;
}

export default function NomadButton({
  large = false,
  width = '100%',
  onClick,
  text,
  ...rest
}: ButtonProps) {
  // const addCss=()=>{
  //   let css = ''
  //   if(large){
  //     css='py-3 text-lg'
  //   }else{
  //     css='py-2 text-sm'
  //   }
  //   if(width)
  // }
  return (
    <button
      {...rest}
      onClick={onClick}
      style={{ width: width }}
      className={cls(
        " bg-orange-500 hover:bg-orange-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none",
        large ? "py-3 text-lg" : "py-2 text-sm ",
      )}
    >
      {text}
    </button>
  );
}