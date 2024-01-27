import { cls } from "../../func/basic/string/cls";

import "../../styles/button/button-color.css";


interface ButtonProps {
  large?: boolean;
  width?: string;
  text: string;
  [key: string]: any;
  option?: {cls:string}
}

export default function NomadCssButton({
  large = false,
  width = '100%',
  onClick,
  text,
  option,
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
        "  text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2  focus:outline-none ",
        large ? "py-3 text-lg" : "py-2 text-sm ",option?option.cls: "c_btn_blue",
      )}
    >
      {text}
    </button>
  );
}