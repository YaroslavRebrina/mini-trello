import { FC } from "react"
import styles from './index.module.scss'


interface ButtonProps {
    type: "submit" | "reset" | "button"
    text: string
    isDanger?: boolean
    onClick: () => void
}

const Button: FC<ButtonProps> = ({ type, text, isDanger, onClick }) => {
    return <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClick() }}
        type={type}
        className={`${styles.btn} 
     ${isDanger && styles.btnDanger}`}> {text}</button >
}

export default Button