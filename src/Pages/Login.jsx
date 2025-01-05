import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
    // State hooks to manage email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault(); 

        
        const validUsers = [
            { email: "engineer.com", password: "123" },
            { email: "admin.com", password: "admin" }
        ];

        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

       
        const user = validUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            
            window.location.href = "home.html"; 
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    const handleSignIn = () => {
        window.location.href = "sign_in.html"; 
    };

    
    useEffect(() => {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        
        const intervalId = setInterval(nextSlide, 3000);

        
        showSlide(currentSlide);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <div id="form-container">
                <img src="/images/Logo.jpg" id="logo" alt="Logo" />
                <input 
                    type="text" 
                    id="mail" 
                    placeholder="Learner ID/Email ID" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <a href="forgot.html" id="forget-password">Forgot Password?</a>
                
                <button id="login" onClick={handleLogin}>Login</button>
                <button id="sign-in" onClick={handleSignIn}>Sign in</button>
            </div>

            <div id="image">
                <div className="slider-container">
                <img src="/images/Image1.jpg" className="slide" alt="Image 1" />
                <img src="/images/Image2.jpg" className="slide" alt="Image 2" />
                <img src="/images/Image3.jpg" className="slide" alt="Image 3" />

                </div>
            </div>
        </div>
    );
};

export default Login;
