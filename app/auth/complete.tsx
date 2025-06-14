import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Select from "@/components/UI/Select";
import { UserComplete } from "@/models/user";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
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
	const accountDetails = useLocalSearchParams();

	const [formData, setFormData] = useState<UserComplete>({
		fullname: "",
		phoneNumber: "",
		country: "",
	});

	const handleInputChange = (text: string, inputKey: string) => {
		setFormData((prev) => ({ ...prev, [inputKey]: text }));
	};

	const handleFormSubmit = () => {
		console.log(formData);
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
						value={formData.fullname}
						onChangeText={(text) => handleInputChange(text, "fullname")}
					/>

					<Input
						label="Phone number"
						placeholder="+994505050505"
						type="telephoneNumber"
						icon="phone-portrait-outline"
						value={formData.phoneNumber}
						onChangeText={(text) => handleInputChange(text, "phoneNumber")}
					/>

					<Select
						label="Country"
						placeholder="Country"
						icon="earth-outline"
						data={countries}
						value={formData.country}
						onSelect={(value) => handleInputChange(value, "country")}
					/>

					<Button
						style={{ height: 46, marginBottom: 40 }}
						onPress={handleFormSubmit}
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
