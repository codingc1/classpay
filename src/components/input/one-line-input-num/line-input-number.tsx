


//숫자입력 +-막기 https://velog.io/@support/styled-components-Input-%EC%88%AB%EC%9E%90-%EC%9E%85%EB%A0%A5-jbskjgya


//https://nomadcoders.co/carrot-market/lectures/3541
interface InputProps {
  label: string;
  value:number;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  name: string;
  required?: boolean;
  isHideZeoro?:boolean;
  unit?:string;
}

export default function OneLineInputNumber({
  label,value, onChange, name,required=true, isHideZeoro,unit='', ...rest
}: InputProps) {
  return (
    <div className="w-full flex items-center">
      <label
        className="mb-1 text-lg font-medium text-gray-700 mr-2"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex-1 rounded-md relative flex  items-center shadow-sm">
        {/* <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
          <span className="text-gray-500 text-sm">&#8361;</span>
        </div> */}
        <input
          id={name}
          name={name}
          value={(isHideZeoro&&value===0)?'':value}
          onChange={onChange}
          required={required}
          {...rest}
          type={'number'}
          className="appearance-none w-24  px-3 py-1  border-gray-300 rounded-md shadow-sm placeholder-gray-400 
          focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-lg text-center border"
        />
        <div className=" right-0 pointer-events-none px-1 pr-3 flex items-center ">
          <span className="text-gray-500">{unit}</span>
        </div>
      </div>

    </div>
  );
}