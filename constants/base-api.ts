import { refreshToken } from "@/services/auth";
import { getToken } from "@/utils/auth";
import { showToast } from "@/utils/toast";
import axios from "axios";
import { config } from "./config";

const baseApi = axios.create({
  baseURL: config.backendUrl
});

baseApi.interceptors.request.use(async (config) => {
  const token = await getToken();

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

baseApi.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.status == 401 || err.response.status == 401) {
      refreshToken();
    }

    if (err.response.data.message) {
      console.log(err);
      showToast("error", err.response.data.message);
    }

    return Promise.reject(err);
  }
);

export default baseApi;
