import Toast, { ToastType } from "react-native-toast-message";

export const showToast = (type: ToastType, title: string, text?: string) => {
  Toast.show({
    type,
    text1: title,
    text2: text,
    position: "top",
    topOffset: 64
  });
};
