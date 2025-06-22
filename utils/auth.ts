import { BackendError } from "@/models/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, AxiosResponse } from "axios";
import { router, Router } from "expo-router";
import { showToast } from "./toast";

export const getToken = async () => {
	const token = await AsyncStorage.getItem("token");

	return token;
};

export const saveToken = async (token: string) => {
	await AsyncStorage.setItem("token", token);
};

export const removeToken = async () => {
	await AsyncStorage.removeItem("token");
};

export const removeTokenAndLogOut = async () => {
	await removeToken();
	router.navigate("/auth/signin");
};

export const successHandler = async (res: AxiosResponse, router: Router) => {
	const token = res.data.token;

	await saveToken(token);

	router.replace("/main/home");
};

export const errorHandler = (error: Error) => {
	const err = error as AxiosError<BackendError>;

	if (err.response) {
		showToast("error", err.response.data.message);
	}
};
