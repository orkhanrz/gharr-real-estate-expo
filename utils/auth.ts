import { BackendError } from "@/models/error";
import { Token } from "@/models/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, AxiosResponse } from "axios";
import { router, Router } from "expo-router";
import { showToast } from "./toast";

export const getToken = async () => {
  const token = await AsyncStorage.getItem("token");

  return token;
};

export const getTokenDecoded = async (): Promise<Token | null> => {
  try {
    const token = await getToken();

    if (!token) {
      return null;
    }

    const payloadInBase64Url = token.split(".")[1];
    const payloadConvertedToBase64 = payloadInBase64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const payloadJsonFormatted = atob(payloadConvertedToBase64);
    const payloadParsed = JSON.parse(payloadJsonFormatted);
    return payloadParsed;
  } catch (err) {
    console.error("Failed to decode token!");
    return null;
  }
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

  if (err.message) {
    return showToast("error", err.message);
  }

  if (err.response) {
    showToast("error", err.response.data.message);
  }
};
