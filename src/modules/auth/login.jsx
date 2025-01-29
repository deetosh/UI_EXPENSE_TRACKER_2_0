// AuthPage.js
import React, { useState } from 'react';
import './auth.css';

const Login = ({ className, onBackClick }) => (
  <form className={`signIn ${className}`}>
    <h3>Welcome<br />Back !</h3>
    <button className="fb" type="button">Log In With Google</button>
    <p>- or -</p>
    <input type="email" placeholder="Email" autoComplete="off" required />
    <input type="password" placeholder="Password" required />
    <button className="form-btn sx back" type="button" onClick={onBackClick}>Back</button>
    <button className="form-btn dx" type="submit">Log In</button>
  </form>
);

export default Login;