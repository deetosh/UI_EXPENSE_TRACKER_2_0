import React, { useState } from 'react';
import './auth.css';

const Login = ({ className, onBackClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check if email is valid
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    // Check if password meets length requirement
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    // If errors exist, update state and prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with login 
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
      {errors.email && <p className="error">{errors.email}</p>}

      {/* Password Input */}
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <button className="form-btn sx back" type="button" onClick={onBackClick}>Back</button>
      <button className="form-btn dx" type="submit">Log In</button>
    </form>
  );
};

export default Login;