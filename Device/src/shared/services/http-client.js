import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    const token = localStorage.getItem('ACCESS_TOKEN') || '';

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export { axiosInstance };