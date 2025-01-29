import React, { useState } from 'react';
import './auth.css';
import Register from './register';
import Login from './login';

const AuthPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <div className="container">
      <Register
        className={isLoginActive ? 'inactive-sx' : 'active-sx'}
        onLoginClick={() => setIsLoginActive(true)}
      />
      <Login
        className={isLoginActive ? 'active-dx' : 'inactive-dx'}
        onBackClick={() => setIsLoginActive(false)}
      />
    </div>
  );
};

export default AuthPage;