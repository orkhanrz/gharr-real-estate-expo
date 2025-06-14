import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function MainLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				sceneStyle: {
					backgroundColor: globalStyles.lightBgColor,
				},
				tabBarStyle: {
					backgroundColor: globalStyles.whiteColor,
				},
				tabBarActiveTintColor: globalStyles.tabBarActiveIconColor,
				tabBarInactiveTintColor: globalStyles.tabBarInactiveIconColor,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="location"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="location-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorites"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="heart-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-outline" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
