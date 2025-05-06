'use client'
import Button from '../btn'
import Input from '../input'
import styles from './index.module.scss'

const TaskForm = () => {
    return <div className={styles.taskFormContainer}>
        <form className={styles.taskForm} onSubmit={() => console.log(2)}>
            <Input type="task" name="task" id="text" placeholder="Example: get a job" />
            <Button type="submit" text='Create Task' />
        </form>
    </div >
}

export default TaskForm