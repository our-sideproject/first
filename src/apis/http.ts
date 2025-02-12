import axios, { InternalAxiosRequestConfig } from 'axios';
import { CookieManager } from './cookie';

export const http = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ---------------request---------------------
const handleRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  const cookies = new CookieManager();
  const accessToken = cookies.getAccessToken();

  if (accessToken != null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};
http.interceptors.request.use(handleRequestFulfilled);
