import React from 'react'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'

const Login = () => {

    const { register, handleSubmit } = useForm({})

    const onSubmit = (data) => {
        console.log(data)
        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: raw,
            redirect: 'follow'
        };
        fetch("https://dev-api.conqt.com/api/vendor/Vendor-Details", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className={styles.loginBody}>
            <div className={styles.loginForm}>
                <h1 className={styles.loginTitle}>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="username">UserName: </label>
                        <input
                            {...register('user_name', { required: true })}
                            className={styles.formInput}
                            type="text"
                            placeholder="Username"
                            id="username"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="password">Password: </label>
                        <input
                            {...register('password', { required: true })}
                            className={styles.formInput}
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                        />
                    </div>

                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login