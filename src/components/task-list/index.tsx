import { FC } from "react"
import { Task } from "../task-item"


interface TasksListProps {
    tasks: Task[]
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
    return (
        tasks.map(t => <TaskItem {...t} />)
    )
}

export default TasksList