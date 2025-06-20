import { getToken } from "@/utils/auth";
import axios from "axios";
import { config } from "./config";

const baseApi = axios.create({
	baseURL: config.backendUrl,
});

baseApi.interceptors.request.use(async (config) => {
	const token = await getToken();

	console.log(token);

	config.headers.Authorization = token;

	return config;
});

export default baseApi;
