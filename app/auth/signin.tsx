import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.screen}>
			<Image
				style={styles.image}
				source={require("../../assets/images/gharr-logo.png")}
			/>

			<View>
				<Text style={styles.title}>Sign In</Text>

				<Input label="Username" type="name" icon="person-outline" />

				<Input
					label="Password"
					type="password"
					icon="key-outline"
					rightIcon="eye-off-outline"
				/>

				<Button style={{ height: 46, marginBottom: 20 }}>Sign in</Button>

				<Text style={styles.accountText}>
					Don't have an account?{" "}
					<Text
						style={styles.accountTextSpecial}
						onPress={() => router.push("/auth/signup")}
					>
						Sign up instead.
					</Text>
				</Text>

				<View style={styles.continueWith}>
					<View style={styles.continueWithLine}></View>
					<Text style={styles.continueWithText}>Or continue with</Text>
					<View style={styles.continueWithLine}></View>
				</View>

				<View style={styles.socialIcons}>
					<Pressable>
						<Ionicons name="logo-google" size={20} color={"#616161"} />
					</Pressable>
					<Pressable>
						<Ionicons name="logo-apple" size={20} color={"#616161"} />
					</Pressable>
					<Pressable>
						<Ionicons name="logo-facebook" size={20} color={"#616161"} />
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingHorizontal: 25,
	},
	image: {
		margin: "auto",
		width: 260,
		height: 65,
		marginBottom: 60,
	},
	title: {
		fontSize: 18,
		fontWeight: 600,
		marginBottom: 20,
	},
	accountText: {
		fontSize: 14,
		marginBottom: 20,
	},
	accountTextSpecial: {
		fontSize: 14,
		color: globalStyles.primaryColor,
		fontWeight: 600,
	},
	continueWith: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		gap: 10,
	},
	continueWithText: {
		fontSize: 12,
		color: "#616161",
		textAlign: "center",
	},
	continueWithLine: {
		flex: 1,
		height: 1,
		width: "100%",
		backgroundColor: "#616161",
	},
	socialIcons: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 20,
	},
});
