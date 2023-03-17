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
      navigate('/login');

    } catch (err) {
      setError(err.response.data);
    }

    setIsLoading(false);
  };

  return (
    <RegisterView
      onSubmit={handleRegister}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default RegisterPresenter;