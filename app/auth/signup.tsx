import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { signUpDefaultValues, signUpValidationSchema } from "@/constants/auth";
import { globalStyles } from "@/constants/styles";
import { UserSignUp } from "@/models/user";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const router = useRouter();

	const { control, getValues, handleSubmit } = useForm<UserSignUp>({
		defaultValues: signUpDefaultValues,
		resolver: yupResolver(signUpValidationSchema),
	});

	const handlePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const handleSignUp = () => {
		router.push({
			pathname: "/auth/complete",
			params: {
				...getValues(),
			},
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
					name="username"
					control={control}
					containerStyles={styles.inputStyles}
				/>

				<Input
					label="Password"
					placeholder="Password"
					type={isPasswordVisible ? "newPassword" : "password"}
					icon="key-outline"
					rightIcon={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
					onRightIconClick={handlePasswordVisibility}
					name="password"
					control={control}
					containerStyles={styles.inputStyles}
				/>

				<Input
					label="Email Address"
					placeholder="Email Address"
					type="emailAddress"
					icon="mail-outline"
					name="email"
					control={control}
					containerStyles={styles.inputStyles}
				/>

				<Button
					style={{ height: 46, marginBottom: 20 }}
					onPress={handleSubmit(handleSignUp)}
				>
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
	inputStyles: {
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
