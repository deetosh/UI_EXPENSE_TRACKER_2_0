import React, { useState } from 'react';
import './auth.css';
import Register from './register';
import Login from './login';
import Loader from '../../molecules/Loader';

const AuthPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if(isLoading){
    return <Loader/>
  }

  return (
    // <div className='auth_container'>

      <div className="container">
        <Register
          className={isLoginActive ? 'inactive-sx' : 'active-sx'}
          onLoginClick={() => setIsLoginActive(true)}
          onSuccess={() => setIsLoginActive(true)}
          setIsLoading={setIsLoading}
        />
        <Login
          className={isLoginActive ? 'active-dx' : 'inactive-dx'}
          onBackClick={() => setIsLoginActive(false)}
          setIsLoading={setIsLoading}
        />
      {/* </div> */}
    </div>
  );
};

export default AuthPage;