import React, { useState } from 'react';

import { loginUser, useAuthState, useAuthDispatch } from '../../Context';
import styles from './login.module.css';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { errorMessage } = useAuthState();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { email, password });
			if (!response.user) return;
			props.history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={{ width: 200 }}>
				<h1>Login Page</h1>
				{errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
				<form>
					<div className={styles.loginForm}>
						<div className={styles.loginFormItem}>
							<label htmlFor='email'>Email: marcus@gmail.com</label>
							<input
								type='text'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className={styles.loginFormItem}>
							<label htmlFor='password'>Password: 123</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<button onClick={handleLogin} >
						login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
