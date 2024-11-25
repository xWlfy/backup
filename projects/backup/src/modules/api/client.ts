import axios from 'axios';
import { API_URL, API_KEY } from '@env';
import { Alert } from 'react-native';

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  console.log("Request Config:", config);
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response Data:", response.data);
    return response;
  },
  (error) => {
    console.error("Axios Error:", error);
    Alert.alert("Axios Error", JSON.stringify(error));
    return Promise.reject(error);
  }
);
