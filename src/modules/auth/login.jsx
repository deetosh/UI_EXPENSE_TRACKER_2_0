import React, { useState } from 'react';
import './auth.css';
import { callAPI } from '../../services/ApiHelper'

const Login = ({ className, onBackClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let validationErrors = {};
    setErrors('');

    // Check if email is valid
    if (!email.trim()) {
      // validationErrors.email = "Email is required";
      setErrors('Email is required');
      return;
    } else if (!isValidEmail(email)) {
      // validationErrors.email = "Invalid email format";
      setErrors('Invalid email format');
      return;
    }

    // Check if password meets length requirement
    if (!password.trim()) {
      // validationErrors.password = "Password is required";
      setErrors('Password is required');
      return;
    } else if (password.length < 6) {
      // validationErrors.password = "Password must be at least 6 characters";
      setErrors('Password must be at least 6 characters');
      return;
    }

    const response = await callAPI('/signin', 'POST', { email:email, password:password });
    if(!response.error){
      localStorage.setItem('name', response.data.firstName); // Example: Store token
      window.location.href = '/app';
      setErrors('');
    }
    else{
      setErrors(response.error);
    }

  };

  return (
    <form className={`signIn ${className}`} onSubmit={handleSubmit}>
      <h3>Welcome<br />Back !</h3>
      
      <button type="button" className="login-with-google-btn" >
        Sign in with Google
      </button>
      <p className={`or_hi`}>- or -</p>

      {/* Email Input */}
      <input 
        type="email" 
        placeholder="Email" 
        autoComplete="off" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      

      {/* Password Input */}
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {errors && <p className="error">{errors}</p>}

      <button className="form-btn sx back" type="button" onClick={onBackClick}>Back</button>
      <button className="form-btn dx" type="submit">Log In</button>
    </form>
  );
};

export default Login;