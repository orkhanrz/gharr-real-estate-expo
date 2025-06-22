import { globalStyles } from "@/constants/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

export default function RootLayout() {
	const theme = "light";
	let bgColor = globalStyles.lightBgColor;

	if (theme != "light") {
		bgColor = globalStyles.darkBgColor;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: bgColor },
					gestureEnabled: false,
				}}
			/>

			<Toast />
		</QueryClientProvider>
	);
}
