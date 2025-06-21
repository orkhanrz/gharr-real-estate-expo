import { globalStyles } from "@/constants/styles";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle
} from "react-native";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: "contained" | "outlined";
  isPending?: boolean;
  onPress?: () => void;
};

export default function Button({
  children,
  style,
  isPending,
  type = "contained",
  onPress
}: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        type == "outlined" && styles.buttonOutlined,
        style
      ]}
      onPress={onPress}
      disabled={isPending}
    >
      <Text style={[styles.text, type == "outlined" && styles.textOutlined]}>
        {isPending ? (
          <ActivityIndicator
            size={"small"}
            color={
              type == "outlined"
                ? globalStyles.primaryColor
                : globalStyles.whiteColor
            }
          />
        ) : (
          children
        )}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 60,
    backgroundColor: globalStyles.primaryColor
  },
  text: {
    color: globalStyles.whiteColor,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: globalStyles.primaryColor,
    backgroundColor: globalStyles.lightBgColor
  },
  textOutlined: {
    color: globalStyles.primaryColor
  }
});
