import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type Props<T extends FieldValues> = {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: TextInputProps["textContentType"];
	icon?: keyof typeof Ionicons.glyphMap;
	rightIcon?: keyof typeof Ionicons.glyphMap;
	onRightIconClick?: () => void;
};

export default function Input<T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type,
	icon,
	rightIcon,
	onRightIconClick,
}: Props<T>) {
	const {
		field,
		fieldState: { error },
	} = useController({ control, name });

	const [isFocused, setIsFocused] = useState(false);

	const handleBlur = () => {
		field.onBlur();
		setIsFocused(false);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<View
				style={[
					styles.inputContainer,
					isFocused && styles.inputContainerFocused,
					error && styles.errorContainer,
				]}
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
					placeholder={isFocused ? "" : placeholder}
					placeholderTextColor={globalStyles.inputPlaceholderColor}
					value={field.value}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChangeText={field.onChange}
				/>
				{rightIcon && (
					<Ionicons
						style={styles.rightIcon}
						name={rightIcon}
						size={24}
						onPress={onRightIconClick}
						color={
							isFocused
								? globalStyles.primaryColor
								: globalStyles.inputPlaceholderColor
						}
					/>
				)}
			</View>

			{error && <Text style={styles.errorText}>{error.message}</Text>}
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
	errorContainer: {
		borderColor: globalStyles.redColor,
	},
	errorText: {
		fontSize: 14,
		marginTop: 5,
		color: globalStyles.redColor,
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
		paddingLeft: 12,
		color: globalStyles.inputPlaceholderColor,
	},
	inputFocused: {
		color: globalStyles.blackColor,
	},
});
