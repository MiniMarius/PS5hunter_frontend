import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import LoginView from '../view/LoginView';
import { setAuth } from "../redux/actions";
import { useNavigate } from 'react-router-dom';

const LoginPresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/auth/token/', {
        username,
        password,
      });

      // store the token in the Redux store
      dispatch(setAuth(response.data.access));
      console.log(response.data)

      // navigate to the dashboard after successful login
      navigate('/');

    } catch (err) {
      setError(err.response.data);
    }

    setIsLoading(false);
  };

  return (
    <LoginView
      onSubmit={handleLogin}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default LoginPresenter;