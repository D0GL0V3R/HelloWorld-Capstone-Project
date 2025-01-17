import React, { useState } from 'react';
import './Login.css'; 

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
                window.location.href = '/dashboard'; 
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again later.');
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-left-panel">
                <div className="login-logo">
                    <img
                        src="/images/logo.png" 
                        alt="Logo"
                        className="logo-image"
                    />
                </div>
            </div>

            <div className="login-right-panel">
                <h2>Welcome</h2>
                <p className="login-text">Please login to admin dashboard.</p>
                {error && <p className="error-text">{error}</p>}
                <input type="text" placeholder="USERNAME" className="input" required value={username}
                    onChange={(e) => setUsername(e.target.value)}/> 
            
                <input
                    type="password"
                    placeholder="PASSWORD"
                    className="input" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                
                <button className="button" onClick={handleLogin}>Login</button>
                
            </div>
        </div>
    );
};

export default Login;
