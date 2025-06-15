import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type TabBarIconProps = {
	name: keyof typeof Ionicons.glyphMap;
	size: number;
	color: string;
	focused?: boolean;
};

export default function TabBarIcon({ name, size, color, focused }: TabBarIconProps) {
	return (
		<View style={styles.container}>
			<Ionicons style={styles.icon} name={name} size={size} color={color} />
			{focused && <View style={styles.dot}></View>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	icon: {
		width: 20,
		height: 20,
	},
	dot: {
		width: 6,
		height: 6,
		backgroundColor: globalStyles.tabBarActiveIconColor,
		borderRadius: 100,
		position: "absolute",
		left: 10,
		bottom: -6,
		transform: [{ translateX: "-50%" }, { translateY: "50%" }],
	},
});
