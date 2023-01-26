import React, { useCallback, useState } from "react";

type UseChecksResult = [string, JSX.Element]

//page user login하단에 들어감
export const useInputStr= (): UseChecksResult => {
  const [strValue, setStrValue] = useState('')
 
  // index 번째 체크 상태를 반전시킨다
  const onChangeMemberNum = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStrValue( e.target.value)
  }, [])
 
//   const isAllChecked = checkList.every((x) => x)

const inputElement = 
  // <div></div>
    <div>
        <ul>
          <label>
            <input className="w-24 mb-1 text-center" placeholder="id"  value={strValue} onChange={onChangeMemberNum}/>

            {/* &nbsp;자동 로그인 */}
          </label>

    </ul>
    </div>
  

  return [strValue, inputElement]
} 