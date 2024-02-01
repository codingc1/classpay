



export default function SelectMenuOneLine({options,selectedOption, handleSelectChange}:{
    options:string[],selectedOption:string, 
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}) {

 const defaultOption = options[0]||'';
  return (
    <div className="flex items-center">
      <label htmlFor="SelectMenus" className="w-12   text-sm font-medium leading-6 text-gray-900  text-center" style={{height:'1.87rem'}}>
        방법
      </label>
      {/* id="location" */}
      <select
        name="SelectMenus"
        className=" flex-1  rounded-md border-0 py-1.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      //   defaultValue={defaultOption}
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
            <option key={index} value={option} className="py-2">
              {option}
            </option>
          ))}
      </select>
  </div>
  )
}
