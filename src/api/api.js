import axios from 'axios';
import store from '../redux/store';

const api = axios.create({
  baseURL: '/api/',
});

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