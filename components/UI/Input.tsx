import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type Props = {
	label: string;
	type?: TextInputProps["textContentType"];
	icon?: keyof typeof Ionicons.glyphMap;
	rightIcon?: keyof typeof Ionicons.glyphMap;
};

export default function Input({ type, label, icon, rightIcon }: Props) {
	const [isFocused, setIsFocused] = useState(false);

	const handlePress = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<View
				style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}
			>
				{icon && (
					<Ionicons
						style={styles.icon}
						name={icon}
						size={24}
						color={
							isFocused
								? globalStyles.primaryColor
								: globalStyles.inputPlaceholderColor
						}
					/>
				)}
				<TextInput
					style={[styles.input, isFocused && styles.inputFocused]}
					secureTextEntry={type === "password"}
					textContentType={type}
					placeholder={isFocused ? "" : label}
					placeholderTextColor={globalStyles.inputPlaceholderColor}
					onFocus={handlePress}
					onBlur={handleBlur}
				/>
				{rightIcon && (
					<Ionicons
						style={styles.rightIcon}
						name={rightIcon}
						size={24}
						color={
							isFocused
								? globalStyles.primaryColor
								: globalStyles.inputPlaceholderColor
						}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	label: {
		fontSize: 14,
		fontWeight: 500,
		marginBottom: 12,
		color: globalStyles.inputLabelColor,
	},
	inputContainer: {
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		borderColor: globalStyles.inputBorderColor,
		borderWidth: 1,
		borderRadius: 10,
		overflow: "hidden",
	},
	inputContainerFocused: {
		borderColor: globalStyles.primaryColor,
	},
	icon: {
		paddingLeft: 20,
	},
	rightIcon: {
		paddingRight: 28,
	},
	input: {
		flex: 1,
		height: "100%",
		paddingLeft: 20,
		color: globalStyles.inputPlaceholderColor,
	},
	inputFocused: {
		color: globalStyles.blackColor,
	},
});
