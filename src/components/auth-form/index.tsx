'use client'
import Button from '../btn'
import Input from '../input'
import styles from './index.module.scss'

const AuthForm = () => {
    return <div className={styles.loginFormContainer}>
        <form className={styles.loginForm} onSubmit={() => console.log(2)}>
            <Input id='email' name='email' type="email" placeholder='"user@devocean.com..." ' />
            <Button type="submit" text='Log in' ></Button>
        </form>
    </div >
}

export default AuthForm