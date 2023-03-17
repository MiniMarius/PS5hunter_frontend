import axios from 'axios';
import store from '../redux/store';

const api = axios.create({
  baseURL: '/api/',
});

export const loginApi = axios.create({
  baseURL: '/api/auth',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // delete the token from local storage
      localStorage.removeItem('token');

      // navigate to login page
      window.location = '/login';
    }

    return Promise.reject(error);
  }
);

// Add a request interceptor to include the JWT token in the Authorization header
api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProductData = async () => {
  try {
    const response = await api.get('/product/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const runScraper = async () => {
  try {
    const response = await api.post('/scraper/run/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await loginApi.post('/token/', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await loginApi.post('/register/', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};