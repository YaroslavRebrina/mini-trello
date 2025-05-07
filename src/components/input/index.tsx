import React, { Dispatch, FC, SetStateAction } from "react"
import styles from './index.module.scss'

interface InputProps {
    type: React.HTMLInputTypeAttribute
    name: string
    id: string
    placeholder: string
    onChange: Dispatch<SetStateAction<string>>
    value: string
}
const Input: FC<InputProps> = ({ type, id, name, placeholder, onChange, value }) => {
    return <input className={styles.input} type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
}

export default Input