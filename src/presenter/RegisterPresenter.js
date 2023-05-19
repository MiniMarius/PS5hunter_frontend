import React, { useState } from 'react';
import RegisterView from '../view/RegisterView';
import { register } from '../api/api';
import { useNavigate } from 'react-router-dom';
const RegisterPresenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await register(username, password);
      console.log(response)
      setIsLoading(false);
      navigate('/login');

    } catch (err) {
      setError(err.response.data);
    }

  };
  const handleGoBack = () => {
    navigate('/login');
  }

  return (
    <RegisterView
      onSubmit={handleRegister}
      isLoading={isLoading}
      error={error}
      onGoBack={handleGoBack}
    />
  );
};

export default RegisterPresenter;