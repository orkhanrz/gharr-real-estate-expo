import CategoriesList from "@/components/categories-list";
import PropertiesExtraList from "@/components/properties/properties-extra-list";
import PropertiesList from "@/components/properties/properties-list";
import SearchInput from "@/components/UI/search-input";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
	return (
		<SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
			<ScrollView alwaysBounceVertical={false}>
				<View style={styles.screenTop}>
					<View style={styles.screentTopLeft}>
						<Text style={styles.screenTopLeftTitle}>Let's Find your</Text>
						<Text style={styles.screenTopLeftSpecialText}>Favorite Home</Text>
					</View>

					<Image
						source={require("@/assets/images/profile-img.jpg")}
						style={styles.screenTopImage}
					/>
				</View>

				<View style={styles.inputWrapper}>
					<SearchInput
						placeholder="Search by Address, City, or ZIP"
						icon="search"
					/>
				</View>

				<View>
					<CategoriesList styles={styles.categories} />
				</View>

				<View>
					<PropertiesList styles={styles.properties} />
				</View>

				<View style={styles.near}>
					<View style={styles.nearHeader}>
						<Text style={styles.nearYou}>Near You</Text>
						<Text style={styles.nearMore}>More</Text>
					</View>

					<View>
						<PropertiesExtraList styles={styles.propertiesExtra} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	screenTop: {
		paddingTop: 24,
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
	inputWrapper: {
		paddingHorizontal: 30,
		marginBottom: 24,
	},
	categories: {
		gap: 10,
		marginBottom: 24,
		paddingHorizontal: 30,
	},
	properties: {
		gap: 18,
		paddingHorizontal: 30,
		marginBottom: 24,
	},
	near: {
		paddingHorizontal: 30,
		marginBottom: 10,
	},
	nearHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 18,
	},
	nearYou: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#122D4D",
	},
	nearMore: {
		fontSize: 12,
		color: "#989898",
		fontWeight: "bold",
	},
	propertiesExtra: {
		gap: 10,
		flex: 1,
	},
});
