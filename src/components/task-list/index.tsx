import { FC } from "react"
import TaskItem, { Task } from "../task-item"
import styles from './index.module.scss'


interface TasksListProps {
    tasks: Task[]
    onAction: (loading: boolean) => void;
}

const TasksList: FC<TasksListProps> = ({ tasks, onAction }) => {

    return (
        <div className={styles.tasksList}>
            {tasks.map(t => <TaskItem key={t._id}  {...t} onAction={onAction} />)}
        </div>
    )
}

export default TasksList