import NavigationBar from "@/components/UI/NavigationBar";
import { globalStyles } from "@/constants/styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	image: {
		height: 288,
		width: "100%",
		marginBottom: 56,
		objectFit: "contain",
	},
	bottomContainer: {
		paddingHorizontal: 20,
		flex: 1,
	},
	title: {
		fontSize: 26,
		textAlign: "center",
		fontWeight: "600",
		marginBottom: 12,
	},
	specialTitleText: {
		color: globalStyles.primaryColor,
	},
	text: {
		fontSize: 16,
		textAlign: "center",
		color: globalStyles.grayTextColor,
	},
	navigationBar: {
		marginTop: "auto",
		marginBottom: 40,
	},
	skipBtn: {
		marginLeft: "auto",
	},
	skipText: {
		color: globalStyles.primaryColor,
		fontSize: 14,
	},
});

const boardingPages = [
	{
		id: 1,
		title: (
			<Text style={styles.title}>
				Lorem <Text style={styles.specialTitleText}>Ipsum is simply</Text> dummy
				text printing
			</Text>
		),
		text: (
			<Text style={styles.text}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</Text>
		),
		image: require("../../assets/images/boarding-1.png"),
	},
	{
		id: 2,
		title: (
			<Text style={styles.title}>
				Lorem <Text style={styles.specialTitleText}>Ipsum is simply</Text> dummy
				text printing
			</Text>
		),
		text: (
			<Text style={styles.text}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</Text>
		),
		image: require("../../assets/images/boarding-2.png"),
	},
	{
		id: 3,
		title: (
			<Text style={styles.title}>
				Lorem <Text style={styles.specialTitleText}>Ipsum is simply</Text> dummy
				text printing
			</Text>
		),
		text: (
			<Text style={styles.text}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</Text>
		),
		image: require("../../assets/images/boarding-3.png"),
	},
];

export default function Boarding() {
	const router = useRouter();
	const id = +useLocalSearchParams().id;

	function handleNextPage() {
		if (boardingPages.length == id) {
			return;
		}

		router.push(`/boarding/${id + 1}`);
	}

	function skipHandler() {
		router.push(`/signin`);
	}

	const boardingPage = boardingPages.find((page) => page.id == id);

	return (
		<SafeAreaView style={styles.screen}>
			<Image style={styles.image} source={boardingPage?.image} />

			<View style={styles.bottomContainer}>
				{boardingPage?.title}

				{boardingPage?.text}

				<NavigationBar
					containerStyles={styles.navigationBar}
					currentPage={id}
					length={boardingPages.length}
					onNextPage={handleNextPage}
				/>

				<Pressable style={styles.skipBtn} onPress={skipHandler}>
					<Text style={styles.skipText}>Skip</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}
