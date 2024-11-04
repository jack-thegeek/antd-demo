// api.js
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://jsonplaceholder.typicode.com/',
  timeout: 10000,
});

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 在这里添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 在这里处理一些通用错误，如 401 未授权
    if (error.response && error.response.status === 401) {
      // 例如跳转到登录页面

    }
    return Promise.reject(error);
  }
);

export default api;