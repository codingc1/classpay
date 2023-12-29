import { IoIosArrowDropup,IoIosArrowDropdown  } from "react-icons/io";



//숫자입력 +-막기 https://velog.io/@support/styled-components-Input-%EC%88%AB%EC%9E%90-%EC%9E%85%EB%A0%A5-jbskjgya


//https://nomadcoders.co/carrot-market/lectures/3541
interface InputProps {
  label: string;
  value:number;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  oneChange:(num:number)=>void;
  name: string;
  required?: boolean;
  isHideZeoro?:boolean;
}

export default function NomadInputCount({
  label,value, onChange,oneChange, name,    required=true, isHideZeoro, ...rest
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
          {/* <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm"></span>
          </div> */}
          <div className="px-2"  onClick={()=>oneChange(-1)}><IoIosArrowDropdown size={'1.25rem'} /></div>
          <input
            id={name}
            name={name}
            value={(isHideZeoro&&value===0)?'':value}
            onChange={onChange}
            required={required}
            {...rest}
            type={'number'}
            className="appearance-none pl-7 flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
            focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-center text-lg"
          />
          {/* absolute right-0 pointer-events-none pr-3 flex items-center */}
          <div className="px-1 right-0 pointer-events-none  flex items-center">
            <span className="text-gray-500">개</span>
          </div>
          <div className="px-2" onClick={()=>oneChange(1)}><IoIosArrowDropup size={'1.25rem'} /></div>
        </div>

    </div>
  );
}