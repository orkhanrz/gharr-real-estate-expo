import { globalStyles } from "@/constants/styles";
import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

type Props = {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	type?: "contained" | "outlined";
	onPress?: () => void;
};

export default function Button({ children, style, type = "contained", onPress }: Props) {
	return (
		<Pressable
			style={[styles.button, type == "outlined" && styles.buttonOutlined, style]}
			onPress={onPress}
		>
			<Text style={[styles.text, type == "outlined" && styles.textOutlined]}>
				{children}
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
		backgroundColor: globalStyles.primaryColor,
	},
	text: {
		color: globalStyles.whiteColor,
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
	},
	buttonOutlined: {
		borderWidth: 1,
		borderColor: globalStyles.primaryColor,
		backgroundColor: globalStyles.lightBgColor,
	},
	textOutlined: {
		color: globalStyles.primaryColor,
	},
});
