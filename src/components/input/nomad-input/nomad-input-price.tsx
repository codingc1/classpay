


//숫자입력 +-막기 https://velog.io/@support/styled-components-Input-%EC%88%AB%EC%9E%90-%EC%9E%85%EB%A0%A5-jbskjgya

import { cls } from "../../../func/basic/string/cls";
import "../../../styles/button/button-color.css";

//https://nomadcoders.co/carrot-market/lectures/3541
interface InputProps {
  label: string;
  value:number;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  name: string;
  required?: boolean;
  isHideZeoro?:boolean;
  moneyUnit:string;
  options?: {focusColor?:string,};
}

export default function NomadInputPrice({
  label,value, onChange, name,    required=true, isHideZeoro,moneyUnit, ...rest
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-lg font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
        <div className="rounded-md relative flex  items-center shadow-sm">
        {/* &#8361; */}
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm"></span>
          </div>
          <input
            id={name}
            name={name}
            value={(isHideZeoro&&value===0)?'':value}
            onChange={onChange}
            required={required}
            {...rest}
            type={'number'}
            // focus:ring-orange-500 focus:border-orange-500
            //rest.options?.focusColor?rest.options?.focusColor:'focus:ring-orange-500 focus:border-orange-500'
            className={cls("appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  text-center text-lg",
              rest.options?.focusColor?rest.options?.focusColor:"focus:ring-orange-500 focus:border-orange-500")}
              
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">{moneyUnit}</span>
          </div>
        </div>

    </div>
  );
}