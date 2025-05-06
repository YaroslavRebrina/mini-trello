import { FC } from "react"

export interface Task {
    id: string
    label: string
}

const TaskItem: FC<Task> = ({ id, label }) => {
    return <div>
        <p>{label}</p>
        <button>edit</button>
        <button>delete</button>
    </div>
}

export default TaskItem