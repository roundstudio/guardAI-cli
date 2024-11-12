import axios, { AxiosError } from "axios";
import { on_run } from "./onRun";

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}


const api = axios.create({
  baseURL: on_run,
  headers: {
    "Content-Type": "application/json",
  },
});

// اینترسپتور برای اضافه کردن توکن به همه درخواست‌ها
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("Access token is missing.");
  }
  return config;
});

// اینترسپتور برای هندل کردن خطاهای 401
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    
    // اگر خطای 401 داشتیم و قبلاً تلاش برای ریفرش نکرده بودیم
    if (originalRequest && error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // تلاش برای دریافت توکن جدید
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post(`${on_run}api/token/refresh/`, {
          refresh: refreshToken
        });
        
        const { access } = response.data;
        localStorage.setItem("access_token", access);
        
        // تنظیم توکن جدید در هدر درخواست اصلی
        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
        
      } catch (refreshError) {
        // اگر ریفرش توکن هم منقضی شده باشد
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
