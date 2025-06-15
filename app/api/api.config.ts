import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response?.status === 404) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
