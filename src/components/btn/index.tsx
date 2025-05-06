import { FC } from "react"
import styles from './index.module.scss'


interface ButtonProps {
    type: "submit" | "reset" | "button"
    text: string
    isDanger?: boolean
}

const Button: FC<ButtonProps> = ({ type, text, isDanger }) => {
    return <button type={type} className={`${styles.btn} ${isDanger && styles.btnDanger}`}>{text}</button>
}

export default Button