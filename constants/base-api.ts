import { getToken } from "@/utils/auth";
import axios from "axios";
import { config } from "./config";

const baseApi = axios.create({
	baseURL: config.backendUrl,
});

baseApi.interceptors.request.use(async (config) => {
	const token = await getToken();

	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

baseApi.interceptors.response.use(
	(response) => response,
	async (err) => {}
);

export default baseApi;
