import { config } from "@/constants/config";
import { UserSignIn, UserSignUpRequestBody } from "@/models/user";
import {
	errorHandler,
	removeTokenAndLogOut,
	saveToken,
	successHandler,
} from "@/utils/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "expo-router";

export const signUp = async (reqBody: UserSignUpRequestBody) => {
	const response = await axios.post(`${config.backendUrl}/auth/signup`, reqBody);

	return response;
};

export const useSignUp = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: signUp,
		onSuccess: (res) => successHandler(res, router),
		onError: errorHandler,
	});
};

export const signIn = async (reqBody: UserSignIn) => {
	const response = await axios.post(`${config.backendUrl}/auth/signin`, reqBody);

	return response;
};

export const refreshToken = async () => {
	try {
		const response = await axios.post(`${config.backendUrl}/auth/refresh-token`);

		if (response.status == 200) {
			const newToken = response.data.token;

			await saveToken(newToken);

			return;
		}

		await removeTokenAndLogOut();
	} catch (err) {
		await removeTokenAndLogOut();
	}
};

export const useSignIn = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: signIn,
		onSuccess: (res) => successHandler(res, router),
		onError: errorHandler,
	});
};
