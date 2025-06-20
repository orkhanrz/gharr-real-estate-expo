import { config } from "@/constants/config";
import { BackendError } from "@/models/error";
import { UserSignIn, UserSignUpRequestBody } from "@/models/user";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

export const signUp = async (reqBody: UserSignUpRequestBody) => {
	const response = await axios.post(`${config.backendUrl}/auth/signup`, reqBody);

	return response;
};

export const useSignUp = () => {
	return useMutation({ mutationFn: signUp });
};

export const signIn = async (reqBody: UserSignIn) => {
	const response = await axios.post(`${config.backendUrl}/auth/signin`, reqBody);

	return response;
};

export const useSignIn = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: signIn,
		onSuccess: (res) => {
			router.replace("/main/home");
		},
		onError: (error: Error) => {
			const err = error as AxiosError<BackendError>;

			if (err.response?.data.message) {
				Alert.alert(err.response.data.message);
			}
		},
	});
};
