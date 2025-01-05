import React, { useState } from 'react';
import './Forgot.css';

const Forgot = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Password reset link sent successfully!');
                setEmail('');
            } else {
                alert('Error sending reset link. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="main">
            
            <div className="reset-container">
                <h2>Reset Your Password</h2>
                <p>Please enter your email address to receive a password reset link.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="reset-btn">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgot;
