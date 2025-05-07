'use client'
import { FC, useState } from 'react';
import Button from '../btn'
import Input from '../input'
import styles from './index.module.scss'
import axios from 'axios';
import clientStorage from '@/utils/clientStorage';

export interface Todo {
    label: string
    email: string
};

interface TaskFormProps {
    onTaskCreated: (loading: boolean) => void;
}

async function createTodo(task: string, onTaskCreated: (loading: boolean) => void): Promise<Todo> {
    const email = clientStorage.get('email')
    const token = clientStorage.get('token')
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_URI}/api/todo`, { label: task, email: email }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    onTaskCreated(true)
    return response.data;
}

const TaskForm: FC<TaskFormProps> = ({ onTaskCreated }) => {
    const [task, setTask] = useState<string>('')

    return <div className={styles.taskFormContainer}>
        <form className={styles.taskForm}>
            <Input value={task} onChange={setTask} type="task" name="task" id="text" placeholder="Example: get a job" />
            <Button type="button" text='Create Task' onClick={async () => await createTodo(task, onTaskCreated)} />
        </form>
    </div >
}

export default TaskForm