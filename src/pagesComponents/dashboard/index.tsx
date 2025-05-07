'use client';

import { useEffect, useState } from 'react';
import TaskForm from "@/components/task-form";
import TasksList from "@/components/task-list";
import { Task } from "@/components/task-item";
import clientStorage from "@/utils/clientStorage";
import axios from "axios";
import styles from './index.module.scss';

function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const email = clientStorage.get('email');
                const token = clientStorage.get('token');

                if (!email || !token) {
                    return;
                }

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BE_URI}/api/todo`, {
                    params: { email },
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setTasks(response.data);
            } catch {
                return
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, [loading]);



    return (
        <div className={styles.page}>
            <TaskForm onTaskCreated={() => setLoading(true)} />
            <TasksList tasks={tasks} onAction={() => setLoading(true)} />
        </div>
    );
}

export default Dashboard;
