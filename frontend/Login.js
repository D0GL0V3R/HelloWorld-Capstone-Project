import React, { useState } from 'react';
import styles from "./Login.module.css";
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login to admin dashboard
                alert('Login successful!');
                window.location.href = '/membersPage'; 
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again later.');
        }
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.login_left_panel}>
                <div className={styles.login_logo}>
                    <img
                        src="/images/logo.png" 
                        alt="Logo"
                        className="logo-image"
                    />
                </div>
            </div>

            <div className={styles.login_right_panel}>
                <h2>Welcome</h2>
                <p className={styles.login_text}>Please login to admin dashboard.</p>
                {error && <p className={styles.error_text}>{error}</p>}
                <input type="text" placeholder="USERNAME" className={styles.input} required value={username}
                    onChange={(e) => setUsername(e.target.value)}/> 
            
                <input
                    type="password"
                    placeholder="PASSWORD"
                    className={styles.input} required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                
                <button className={styles.button} onClick={handleLogin}>Login</button>
                
            </div>
        </div>
    );
};

export default Login;
