import TabBarIcon from "@/components/UI/tab-bar-icon";
import { globalStyles } from "@/constants/styles";
import { Tabs } from "expo-router";

export default function MainLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				sceneStyle: {
					backgroundColor: globalStyles.lightBgColor,
				},
				tabBarStyle: {
					backgroundColor: globalStyles.whiteColor,
					height: 63,
				},
				tabBarActiveTintColor: globalStyles.tabBarActiveIconColor,
				tabBarInactiveTintColor: globalStyles.tabBarInactiveIconColor,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarIcon
							name="home"
							size={20}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="map"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarIcon
							name="location-outline"
							size={20}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="favorites"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarIcon
							name="heart-outline"
							size={20}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ color, size, focused }) => (
						<TabBarIcon
							name="person-outline"
							size={20}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
