import { FC } from "react"
import styles from './index.module.scss'


interface ButtonProps {
    type: "submit" | "reset" | "button"
    text: string
}

const Button: FC<ButtonProps> = ({ type, text }) => {
    return <button type={type} className={styles.taskFormBtn}>{text}</button>
}

export default Button