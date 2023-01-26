




//https://nomadcoders.co/carrot-market/lectures/3541
interface InputProps {
  label: string;
  value:string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  name: string;
  required?: boolean;
}

export default function NomadInputText({
  label,value, onChange, name,    required=true,  ...rest }: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="rounded-md relative flex  items-center shadow-sm">
        <input
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            {...rest}
            type={'test'}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>



    </div>
  );
}