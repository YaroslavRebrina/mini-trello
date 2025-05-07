'use client'
import { useState } from 'react'
import Button from '../btn'
import Input from '../input'
import styles from './index.module.scss'
import axios from 'axios'
import clientStorage from '@/utils/clientStorage'
import { redirect } from 'next/navigation'

interface UserData {
    token: 'string'
    user: { id: "681b1f7f7dfadc424d899311", email: "asdsa@gmail.com" }
}

async function login(email: string): Promise<void> {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_URI}/api/user/login`, { email: email });
    const data = response.data as UserData
    if (response.data) {
        clientStorage.set("token", data.token)
        clientStorage.set('email', email)
        redirect('/dashboard')
    }
}

const AuthForm = () => {
    const [email, setEmail] = useState<string>('')
    return <div className={styles.loginFormContainer}>
        <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}  >
            <Input value={email} onChange={setEmail} id='email' name='email' type="email" placeholder='"user@devocean.com..." ' />
            <Button onClick={async () => await login(email)} type="button" text='Log in' ></Button>
        </form>
    </div >
}

export default AuthForm