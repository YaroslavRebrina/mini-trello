import TaskForm from "@/components/task-form"
import styles from './index.module.scss'
import TasksList from "@/components/task-list"
import { Task } from "@/components/task-item"

const Dashboard = () => {

    const tasks: Task[] = [{ id: "0", label: "Go home" }, { id: "1", label: "Go home" }, { id: "2", label: "Go home" }, { id: "3", label: "Go home" }]
    return <div className={styles.page}>
        <TaskForm />
        <TasksList tasks={tasks} />
    </div>
}

export default Dashboard