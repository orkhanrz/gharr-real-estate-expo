import CategoriesList from "@/components/CategoriesList";
import SearchInput from "@/components/UI/SearchInput";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
	{ id: 1, label: "Recommended" },
	{ id: 2, label: "Top Rates" },
	{ id: 3, label: "Best Offers" },
	{ id: 4, label: "Most Recent" },
];

export default function Home() {
	return (
		<SafeAreaView style={styles.screen}>
			<ScrollView alwaysBounceVertical={false}>
				<View style={styles.screenTop}>
					<View style={styles.screentTopLeft}>
						<Text style={styles.screenTopLeftTitle}>Let's Find your</Text>
						<Text style={styles.screenTopLeftSpecialText}>Favorite Home</Text>
					</View>

					<Image
						source={require("../../assets/images/profile-img.jpg")}
						style={styles.screenTopImage}
					/>
				</View>

				<SearchInput />

				<CategoriesList items={categories} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,

		paddingTop: 24,
	},
	screenTop: {
		paddingHorizontal: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 24,
	},
	screentTopLeft: {},
	screenTopLeftTitle: {
		color: "#8997A9",
		fontSize: 18,
		marginBottom: 10,
	},
	screenTopLeftSpecialText: {
		color: "#122D4D",
		fontSize: 20,
		fontWeight: "800",
	},
	screenTopImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
		objectFit: "cover",
	},
});
