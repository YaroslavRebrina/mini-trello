import React, { FC } from "react"
import styles from './index.module.scss'

interface InputProps {
    type: React.HTMLInputTypeAttribute
    name: string
    id: string
    placeholder: string
}
const Input: FC<InputProps> = ({ type, id, name, placeholder }) => {
    return <input className={styles.input} type={type} name={name} id={id} placeholder={placeholder} />
}

export default Input