import { globalStyles } from "@/constants/styles";
import { ActivityIndicator, View } from "react-native";

export default function LoadingScreen() {
	return (
		<View>
			<ActivityIndicator size={"large"} color={globalStyles.primaryColor} />
		</View>
	);
}
