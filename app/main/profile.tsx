import Button from "@/components/UI/button";
import IconButton from "@/components/UI/icon-button";
import SettingItem from "@/components/UI/setting-item";
import TopBar from "@/components/UI/top-bar";
import { removeToken } from "@/utils/auth";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
	const router = useRouter();

	const handleSettingPress = () => {};

	const handleLogOut = async () => {
		await removeToken();

		router.replace("/auth/signin");
	};

	return (
		<SafeAreaView edges={["top", "left", "right"]}>
			<ScrollView>
				<TopBar
					text="My Profile"
					leftIcon="arrow-back"
					rightIcon="settings-outline"
				/>

				<View style={styles.container}>
					<View style={styles.profileInfo}>
						<View style={styles.imageWrapper}>
							<Image
								source={require("@/assets/images/profile-img.jpg")}
								style={styles.image}
							/>
							<IconButton
								icon="camera-outline"
								iconColor="black"
								iconSize={12}
								buttonStyles={styles.profileBtn}
							/>
						</View>
						<View style={styles.userDetails}>
							<Text style={styles.userName}>Sabrina Aryan</Text>
							<Text style={styles.userEmail}>sabrina@gmail.com</Text>
							<Button style={styles.editProfile}>Edit Profile</Button>
						</View>
					</View>

					<View style={styles.settingItems}>
						<SettingItem
							icon="heart-outline"
							text="Favorites"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="download-outline"
							text="Downloads"
							onPress={handleSettingPress}
						/>

						<View style={styles.line}></View>

						<SettingItem
							icon="language-outline"
							text="Languages"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="location-outline"
							text="Location"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="play-outline"
							text="Subscription"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="desktop-outline"
							text="Display"
							onPress={handleSettingPress}
						/>

						<View style={styles.line}></View>

						<SettingItem
							icon="trash-outline"
							text="Clear Cache"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="time-outline"
							text="Clear History"
							onPress={handleSettingPress}
						/>

						<SettingItem
							icon="exit-outline"
							text="Log Out"
							onPress={handleLogOut}
						/>

						<View style={styles.line}></View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingBlock: 10,
	},
	profileInfo: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginBottom: 60,
	},
	profileBtn: {
		backgroundColor: "white",
		width: 25,
		height: 25,
		borderRadius: 100,
		position: "absolute",
		bottom: 0,
		right: 0,
	},
	imageWrapper: {
		width: 81,
		height: 81,
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		overflow: "hidden",
		borderRadius: 100,
	},
	userDetails: {},
	userName: {
		color: "#122D4D",
		fontSize: 20,
		fontWeight: "800",
		marginBottom: 2,
	},
	userEmail: {
		color: "#8997A9",
		fontSize: 16,
		marginBottom: 10,
	},
	editProfile: {
		borderRadius: 5,
		paddingVertical: 4,
		paddingHorizontal: 8,
		width: 112,
	},
	settingItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	settingItemLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 48,
		marginBottom: 24,
	},
	settingItemText: {
		fontSize: 16,
		fontWeight: 500,
	},
	line: {
		width: "100%",
		height: 1,
		backgroundColor: "black",
	},
	settingItems: {
		gap: 24,
	},
});
