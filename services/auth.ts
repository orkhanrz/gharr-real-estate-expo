import { config } from "@/constants/config";
import { UserSignIn, UserSignUpRequestBody } from "@/models/user";
import { store } from "@/store";
import { logIn } from "@/store/user/user-slice";
import { errorHandler, removeTokenAndLogOut, saveToken } from "@/utils/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const signUp = async (reqBody: UserSignUpRequestBody) => {
  const response = await axios.post(
    `${config.backendUrl}/auth/signup`,
    reqBody
  );

  return response;
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onError: errorHandler
  });
};

export const signIn = async (reqBody: UserSignIn) => {
  const response = await axios.post(
    `${config.backendUrl}/auth/signin`,
    reqBody
  );

  return response;
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${config.backendUrl}/auth/refresh-token`
    );

    if (response.status == 200) {
      const { token, user } = response.data;

      await saveToken(token);
      store.dispatch(logIn({ token, user }));

      return;
    }

    await removeTokenAndLogOut();
  } catch (err) {
    await removeTokenAndLogOut();
  }
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
    onError: errorHandler
  });
};
