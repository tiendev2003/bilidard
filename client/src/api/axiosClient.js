import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  response => response,
  error => {
    // Handle error
    return Promise.reject(error);
  }
);

export default axiosClient;