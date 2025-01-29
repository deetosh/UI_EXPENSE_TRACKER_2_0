import React from 'react';
import './auth.css';
const Register = ({ className, onLoginClick }) => (
    <form className={`signUp ${className}`}>
      <h3>Create Your Account</h3>
      <input className="w100" type="name" placeholder="Name" required autoComplete="off" />
      <input className="w100" type="email" placeholder="Email" required autoComplete="off" />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button className="form-btn sx log-in" type="button" onClick={onLoginClick}>
        Log In
      </button>
      <button className="form-btn dx" type="submit">Sign Up</button>
    </form>
  );

export default Register;