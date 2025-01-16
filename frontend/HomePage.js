import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="container">
            <div className="left-panel">
                <div className="logo">
                    <img
                        src="/images/logo.png" 
                        alt="Logo"
                        className="logo-image"
                    />
                </div>
            </div>

            <div className="right-panel">
                <h2>Welcome</h2>
                <p className="login-text">Please login to admin dashboard.</p>
                <input type="text" placeholder="USERNAME" className="input" required/>
                <input
                    type="password"
                    placeholder="PASSWORD"
                    className="input" required
                />
                <button className="button">Login</button>
            </div>
        </div>
    );
};

export default HomePage;
