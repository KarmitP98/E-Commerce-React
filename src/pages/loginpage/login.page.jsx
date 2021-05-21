import React from 'react';
import Register from '../../components/register/register';
import SignIn from '../../components/signin/signin';
import './login.scss';

const LoginPage = () => (
  <div className = 'login'>
    <SignIn/>
    <Register/>
  </div>
);

export default LoginPage;
