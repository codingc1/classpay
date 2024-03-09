import { useState } from "react"



export const useCheckboxAndText = ({text, size=''}:{
    text:string; size?:string;
}) => {
    const [checked, setChecked] = useState(false)
    const handleCheckClick = () => {
        setChecked(!checked)
    }
    const content =(
    <div>
        <ul className={size}>
            <label>
                <input
                type='checkbox'
                checked={checked}
                onChange={ handleCheckClick}
                />
                &nbsp;{text}
            </label>
        </ul>
    </div>
    )

    return [ content, checked,]
}