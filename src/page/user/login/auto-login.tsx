import React, { useState } from "react";

type UseChecksResult = [boolean, () => JSX.Element]

//page user login하단에 들어감
export const useAutoLogin = (): UseChecksResult => {
  const [checked, setChecked] = useState(false)
 
  // index 번째 체크 상태를 반전시킨다
  const handleCheckClick = () => {
    // setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)))
    setChecked(!checked)
  }
 
//   const isAllChecked = checkList.every((x) => x)
const isChecked = checked
const renderChecks = () => (
  // <div></div>
    <div>
        <ul>
          <label>
            <input
              type='checkbox'
              checked={checked}
              // onClick={ handleCheckClick}
              onChange={ handleCheckClick}
            />
            &nbsp;자동 로그인
          </label>

    </ul>
    </div>
  )

  return [isChecked, renderChecks]
} 