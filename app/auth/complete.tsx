import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Select from "@/components/UI/Select";
import {
	completeSignUpDefaultValues,
	completeSignUpValidationSchema,
} from "@/constants/auth";
import { UserComplete } from "@/models/user";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const countries = [
	{
		label: "Azerbaijan",
		value: "az",
	},
	{
		label: "Russia",
		value: "ru",
	},
	{
		label: "Turkey",
		value: "tr",
	},
	{
		label: "Georgia",
		value: "ge",
	},
	{
		label: "Armenia",
		value: "ar",
	},
];

export default function CompleteProfile() {
	const router = useRouter();

	const signUpFormData = useLocalSearchParams();

	const { control, handleSubmit } = useForm<UserComplete>({
		defaultValues: completeSignUpDefaultValues,
		resolver: yupResolver(completeSignUpValidationSchema),
	});

	const handleFormSubmit = (completeFormData: UserComplete) => {
		const formData = { ...signUpFormData, ...completeFormData };

		// handle sign up
		router.push("/main/home");
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : undefined}
				keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 64}
			>
				<ScrollView
					contentContainerStyle={styles.screen}
					keyboardShouldPersistTaps="handled"
					alwaysBounceVertical={false}
				>
					<View style={styles.screenTop}>
						<Text style={styles.screenTitle}>Complete Your Profile</Text>

						<Text style={styles.screenText}>
							Don’t worry, only you can see your personal data. No one else
							will be able to see it.
						</Text>

						<Ionicons
							style={styles.screenIcon}
							name="person-circle"
							size={119}
							color={"#000929"}
						/>
					</View>

					<Input
						label="Fullname"
						placeholder="Fullname"
						type="name"
						icon="person-outline"
						name="fullname"
						control={control}
						containerStyles={styles.inputStyles}
					/>

					<Input
						label="Phone number"
						placeholder="+994505050505"
						type="telephoneNumber"
						icon="phone-portrait-outline"
						name="phoneNumber"
						control={control}
						containerStyles={styles.inputStyles}
					/>

					<Select
						label="Country"
						placeholder="Country"
						icon="earth-outline"
						data={countries}
						name="country"
						control={control}
						containerStyles={styles.inputStyles}
					/>

					<Button
						style={{ height: 46, marginBottom: 40 }}
						onPress={handleSubmit(handleFormSubmit)}
					>
						Complete Profile
					</Button>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingHorizontal: 25,
		paddingTop: 64,
	},
	screenTop: {
		alignItems: "center",
	},
	screenTitle: {
		color: "#000929",
		fontSize: 26,
		fontWeight: 600,
		marginBottom: 8,
	},
	inputStyles: {
		marginBottom: 20,
	},
	screenText: {
		color: "#616161",
		fontSize: 12,
		textAlign: "center",
		marginBottom: 30,
	},
	screenIcon: {
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: 600,
		marginBottom: 20,
	},
});
