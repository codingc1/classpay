import { cls } from "../../../func/basic/string/cls";





//https://nomadcoders.co/carrot-market/lectures/3541
interface InputProps {
  label: string;
  value:string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  name: string;
  required?: boolean;
  option?:{width?:number, height?:number, }
}

export default function NomadInputText({
  label,value, onChange, name,    required=true,option,  ...rest }: InputProps) {
  return (
    <div className={cls(" box-border",option&&option.width?option.width+'px':'w-full')} >
      {/* block */}
      <label
        className="mb-1  text-lg font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {/* relative */}
      {/* <div className=" rounded-md  flex flex-1 items-center shadow-sm"> */}
      <div>
        <input
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            {...rest}
            type={'test'}
          className=" w-full appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
          focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-lg box-border"
          // style={{boxSizing:'bo  rder-box'}}
        />
      </div>



    </div>
  );
}