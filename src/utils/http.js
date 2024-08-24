import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    };
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
  }

  const authToken = CookiesStorage.get(CookiesKey.AuthToken);

  config.headers = {
    ...config.headers,
    Authorization: authToken ? `Bearer ${authToken}` : "",
  };

  return config;
});

export default http;
