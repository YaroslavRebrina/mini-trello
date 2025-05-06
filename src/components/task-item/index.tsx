import { FC } from "react"
import Button from "../btn"
import styles from './index.module.scss'

export interface Task {
    id: string
    label: string
}

const TaskItem: FC<Task> = ({ label }) => {
    return <div className={styles.taskItemContainer}>
        <div className={styles.taskItemInfoContianer}>
            <p>{label}</p>
        </div>
        <div className={styles.taskItemBtnsWrapper}>
            <Button text="Edit" type="button" />
            <Button text="Delete" type="button" isDanger />
        </div>
    </div>
}

export default TaskItem