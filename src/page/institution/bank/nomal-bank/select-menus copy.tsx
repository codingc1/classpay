


//select-menus 두줄(설명, 실렉트)
export default function SelectMenus({options,selectedOption, handleSelectChange}:{
    options:string[],selectedOption:string, 
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}) {

 const defaultOption = options[0]||'';
  return (
    <div>
    <label htmlFor="SelectMenus" className="block text-sm font-medium leading-6 text-gray-900">
      방법
    </label>
    {/* id="location" */}
    <select
      name="SelectMenus"
      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
