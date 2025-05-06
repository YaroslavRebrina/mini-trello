import TaskForm from "@/components/task-form"
import styles from './index.module.scss'
import TasksList from "@/components/task-list"

const Dashboard = () => {
    return <div className={styles.page}>
        <TaskForm />
        <TasksList />
    </div>
}

export default Dashboard