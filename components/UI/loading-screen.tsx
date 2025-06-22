import { globalStyles } from "@/constants/styles";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function LoadingScreen() {
	return (
		<View style={styles.screen}>
			<ActivityIndicator size={"large"} color={globalStyles.primaryColor} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
