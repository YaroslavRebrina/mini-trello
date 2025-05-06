import { FC } from "react"
import TaskItem, { Task } from "../task-item"
import styles from './index.module.scss'


interface TasksListProps {
    tasks: Task[]
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
    return (
        <div className={styles.tasksList}>
            {tasks.map(t => <TaskItem key={t.id} {...t} />)}
        </div>
    )
}

export default TasksList