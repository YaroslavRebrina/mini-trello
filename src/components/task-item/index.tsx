import { FC, useState } from "react";
import Button from "../btn";
import styles from './index.module.scss';
import clientStorage from "@/utils/clientStorage";
import { Todo } from "../task-form";
import axios from "axios";

export interface Task {
    _id: string;
    label: string;
    onAction: (loading: boolean) => void;
}

async function deleteTodo(_id: string): Promise<void> {
    const token = clientStorage.get('token');
    const email = clientStorage.get('email');

    await axios.delete(`${process.env.NEXT_PUBLIC_BE_URI}/api/todo/${_id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: { email }
    });
}

async function updateTodo(_id: string, newLabel: string): Promise<Todo> {
    const token = clientStorage.get('token');
    const email = clientStorage.get('email');

    const response = await axios.put(`${process.env.NEXT_PUBLIC_BE_URI}/api/todo/${_id}`, {
        label: newLabel,
        email
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data;
}

const TaskItem: FC<Task> = ({ label, _id, onAction }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newLabel, setNewLabel] = useState(label);


    const handleDelete = async () => {
        try {
            await deleteTodo(_id);
            onAction(true)
        } catch (error) {
            console.error("Failed to delete task", error);
        }
    };

    const handleEdit = async () => {
        try {
            const updatedTask = await updateTodo(_id, newLabel);
            setIsEditing(false);
            onAction(true)
            setNewLabel(updatedTask.label);
        } catch (error) {
            console.error("Failed to update task", error);
        }
    };

    return (
        <div className={styles.taskItemContainer}>
            <div className={styles.taskItemInfoContainer}>
                {isEditing ? (
                    <input
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                        onBlur={handleEdit}
                        autoFocus
                    />
                ) : (
                    <p>{label}</p>
                )}
            </div>
            <div className={styles.taskItemBtnsWrapper}>
                <Button
                    text={isEditing ? "Save" : "Edit"}
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                />
                <Button
                    onClick={handleDelete}
                    text="Delete"
                    type="button"
                    isDanger
                />
            </div>
        </div>
    );
};

export default TaskItem;
