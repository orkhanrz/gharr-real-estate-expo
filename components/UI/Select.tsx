import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Data = {
	label: string;
	value: string;
};

type Props = {
	label: string;
	placeholder?: string;
	icon?: keyof typeof Ionicons.glyphMap;
	value: string;
	data: Data[];
	onSelect: (value: string) => void;
};

type ItemProps = {
	item: Data;
	onSelect: (value: string) => void;
	onBlur: () => void;
};

function DropdownItem({ item, onSelect, onBlur }: ItemProps) {
	function handleSelect() {
		console.log(item.value);
		onSelect(item.value);
		onBlur();
	}

	return (
		<Pressable style={styles.dropdownItem} onPress={handleSelect}>
			<Text style={styles.dropdownItemText}>{item.label}</Text>
		</Pressable>
	);
}

export default function Select({
	label,
	placeholder,
	icon,
	value,
	data,
	onSelect,
}: Props) {
	const [isFocused, setIsFocused] = useState(false);

	const handlePress = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const selectedLabel = data.find((item) => item.value == value)?.label;

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
					onFocus={handlePress}
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
				/>

				{isFocused && (
					<View style={styles.dropdown}>
						<FlatList
							data={data}
							renderItem={({ item }) => (
								<DropdownItem
									item={item}
									onSelect={onSelect}
									onBlur={handleBlur}
								/>
							)}
							keyExtractor={(item) => item.value}
							scrollEnabled={false}
						/>
					</View>
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
		position: "relative",
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
