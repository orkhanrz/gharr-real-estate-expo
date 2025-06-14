import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Data = {
	label: string;
	value: string;
};

type Props<T extends FieldValues> = {
	label: string;
	placeholder?: string;
	icon?: keyof typeof Ionicons.glyphMap;
	data: Data[];
	name: Path<T>;
	control: Control<T>;
};

type ItemProps = {
	item: Data;
	onSelect: (selectedValue: string) => void;
};

function DropdownItem({ item, onSelect }: ItemProps) {
	function handleSelect() {
		onSelect(item.value);
	}

	return (
		<Pressable style={styles.dropdownItem} onPress={handleSelect}>
			<Text style={styles.dropdownItemText}>{item.label}</Text>
		</Pressable>
	);
}

export default function Select<T extends FieldValues>({
	label,
	placeholder,
	icon,
	data,
	control,
	name,
}: Props<T>) {
	const [isFocused, setIsFocused] = useState(false);

	const {
		field: { value, onChange },
		fieldState: { error },
	} = useController({ control, name });

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleSelect = (selectedValue: string) => {
		onChange(selectedValue);
		setIsFocused(false);
	};

	const selectedLabel = data.find((item: Data) => item.value == value)?.label;

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
					placeholder={placeholder}
					placeholderTextColor={globalStyles.inputPlaceholderColor}
					value={selectedLabel}
				/>

				<Ionicons
					style={styles.rightIcon}
					name={
						isFocused
							? "caret-up-circle-outline"
							: "caret-down-circle-outline"
					}
					size={24}
					color={
						isFocused
							? globalStyles.primaryColor
							: globalStyles.inputPlaceholderColor
					}
					onPress={handleFocus}
				/>

				{isFocused && (
					<View style={styles.dropdown}>
						<FlatList
							data={data}
							renderItem={({ item }) => (
								<DropdownItem item={item} onSelect={handleSelect} />
							)}
							keyExtractor={(item) => item.value}
							scrollEnabled={false}
						/>
					</View>
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
		position: "relative",
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
		paddingLeft: 20,
		color: globalStyles.inputPlaceholderColor,
	},
	inputFocused: {
		color: globalStyles.blackColor,
	},
	dropdown: {
		width: "100%",
		height: 210,
		paddingVertical: 10,
		position: "absolute",
		bottom: 60,
		backgroundColor: globalStyles.lightBgColor,
		borderColor: globalStyles.inputBorderColor,
		borderWidth: 1,
		borderRadius: 10,
		zIndex: 100,
	},
	dropdownItem: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	dropdownItemText: {},
});
