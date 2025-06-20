import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import { signInDefaultValues, signInValidationSchema } from "@/constants/auth";
import { globalStyles } from "@/constants/styles";
import { UserSignIn } from "@/models/user";
import { useSignIn } from "@/services/auth";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	ActivityIndicator,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
	const router = useRouter();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const { mutate, isPending } = useSignIn();

	const { control, handleSubmit } = useForm<UserSignIn>({
		defaultValues: signInDefaultValues,
		resolver: yupResolver(signInValidationSchema),
	});

	const handlePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const handleSignIn = (formBody: UserSignIn) => {
		mutate(formBody);
	};

	return (
		<SafeAreaView style={styles.screen}>
			<Image
				style={styles.image}
				source={require("@/assets/images/gharr-logo.png")}
			/>

			<View>
				<Text style={styles.title}>Sign In</Text>

				<Input
					label="Username"
					placeholder="Username"
					name="username"
					control={control}
					type="name"
					icon="person-outline"
					containerStyles={styles.inputStyles}
				/>

				<Input
					label="Password"
					placeholder="Password"
					name="password"
					control={control}
					type={isPasswordVisible ? "newPassword" : "password"}
					icon="key-outline"
					containerStyles={styles.inputStyles}
					rightIcon={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
					onRightIconClick={handlePasswordVisibility}
				/>

				<Button
					style={{ height: 46, marginBottom: 20 }}
					onPress={handleSubmit(handleSignIn)}
				>
					{isPending ? (
						<ActivityIndicator size="small" color={"white"} />
					) : (
						"Sign in"
					)}
				</Button>

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
