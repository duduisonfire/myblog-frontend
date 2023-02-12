import axios from 'axios';

export const backendConnection = axios.create({
  baseURL: 'http://localhost:5204/api/',
  timeout: 5000,
});
