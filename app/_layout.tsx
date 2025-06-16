import { globalStyles } from "@/constants/styles";
import { Stack } from "expo-router";

export default function RootLayout() {
	const theme = "light";
	let bgColor = globalStyles.lightBgColor;

	if (theme != "light") {
		bgColor = globalStyles.darkBgColor;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: bgColor },
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="boarding/[id]" />
		</Stack>
	);
}
