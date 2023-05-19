import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginView from '../view/LoginView';
import { setAuth } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';

const LoginPresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(username, password);
      // store the token in the Redux store
      dispatch(setAuth(data.access));
      console.log(data)

      // navigate to the dashboard after successful login
      navigate('/');

    } catch (err) {
      setError(err.data);
    }

    setIsLoading(false);
  };

  const handleRegisterClick = () => {
    navigate('/register')
  }

  

  return (
    <LoginView
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
      onRegisterClick={handleRegisterClick}
    />
  );
};

export default LoginPresenter;