import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { globalStyles } from "@/constants/styles";
import { UserSignUp } from "@/models/user";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
	const router = useRouter();

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const [formData, setFormData] = useState<UserSignUp>({
		username: "",
		password: "",
		email: "",
	});

	const handlePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const handleInputChange = (text: string, inputKey: string) => {
		setFormData((prev) => ({ ...prev, [inputKey]: text }));
	};

	const handleSignUp = () => {
		router.push({
			pathname: "/auth/complete",
			params: {},
		});
	};

	return (
		<SafeAreaView style={styles.screen}>
			<Image
				style={styles.image}
				source={require("../../assets/images/gharr-logo.png")}
			/>

			<KeyboardAvoidingView>
				<Text style={styles.title}>Sign Up</Text>

				<Input
					label="Username"
					placeholder="Username"
					type="name"
					icon="person-outline"
					value={formData.username}
					onChangeText={(text) => handleInputChange(text, "username")}
				/>

				<Input
					label="Password"
					placeholder="Password"
					type={isPasswordVisible ? "newPassword" : "password"}
					icon="key-outline"
					rightIcon={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
					value={formData.password}
					onChangeText={(text) => handleInputChange(text, "password")}
					onRightIconClick={handlePasswordVisibility}
				/>

				<Input
					label="Email Address"
					placeholder="Email Address"
					type="emailAddress"
					icon="mail-outline"
					value={formData.email}
					onChangeText={(text) => handleInputChange(text, "email")}
				/>

				<Button style={{ height: 46, marginBottom: 20 }} onPress={handleSignUp}>
					Sign up
				</Button>

				<Text style={styles.accountText}>
					Don't have an account?{" "}
					<Text
						style={styles.accountTextSpecial}
						onPress={() => router.push("/auth/signin")}
					>
						Sign in instead.
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
			</KeyboardAvoidingView>
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
