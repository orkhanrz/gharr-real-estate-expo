import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type Props = {
	icon?: keyof typeof Ionicons.glyphMap;
	buttonStyles?: StyleProp<ViewStyle>;
};

export default function IconButton({ buttonStyles }: Props) {
	return (
		<Pressable style={[styles.button, buttonStyles]}>
			<Ionicons name="filter" size={24} color={globalStyles.whiteColor} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: globalStyles.lightPrimaryColor,
		width: 52,
		height: 52,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
