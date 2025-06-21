import PropertyGallery from "@/components/property/gallery";
import PropertyDescription from "@/components/property/info";
import Reviews from "@/components/property/reviews";
import Button from "@/components/UI/button";
import LoadingScreen from "@/components/UI/loading-screen";
import MenuItem from "@/components/UI/menu-item";
import PropertyTopBar from "@/components/UI/property/top-bar";
import { globalStyles } from "@/constants/styles";
import { useGetSingleProperty } from "@/services/properties";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface IMenuItem {
	id: number;
	label: string;
}

const menuItems: IMenuItem[] = [
	{ id: 1, label: "Description" },
	{ id: 2, label: "Gallery" },
	{ id: 3, label: "Reviews" },
];

export default function PropertyDetails() {
	const { id } = useLocalSearchParams();
	const [activemenuItemId, setActivemenuItemId] = useState(1);

	const setActiveMenu = (id: number) => {
		setActivemenuItemId(id);
	};

	const { data: property, isLoading } = useGetSingleProperty(id as string);

	if (!property || isLoading) {
		return <LoadingScreen />;
	}

	let content = <PropertyDescription property={property} />;

	if (activemenuItemId == 1) {
		content = <PropertyDescription property={property} />;
	} else if (activemenuItemId == 2) {
		content = <PropertyGallery images={property.images} />;
	} else {
		content = <Reviews />;
	}

	return (
		<ScrollView alwaysBounceVertical={false}>
			<View style={styles.imageWrapper}>
				<PropertyTopBar />

				<Image source={{ uri: property.imageUrl }} style={styles.imageStyles} />
			</View>

			<View style={styles.container}>
				<View style={styles.reviews}>
					<View style={styles.reviewsLeft}>
						<Ionicons name="star" color="orange" size={16} />
						<Text style={styles.reviewsText}>
							{property.rating} ({property.reviews.length} reviews)
						</Text>
					</View>

					<Text style={styles.reviewsCategory}>{property.category}</Text>
				</View>

				<Text style={styles.title}>{property.title}</Text>
				<Text style={styles.address}>{property.location.address}</Text>
			</View>

			<View style={styles.menuItems}>
				{menuItems.map((item) => (
					<MenuItem
						key={item.id}
						item={item}
						isActive={activemenuItemId == item.id}
						onPress={setActiveMenu}
					/>
				))}
			</View>

			<View>{content}</View>

			<View style={styles.bookNow}>
				<View>
					<Text style={styles.totalPriceTitle}>Total Price</Text>
					<Text style={styles.totalPriceAmount}>
						${property.price}
						<Text style={styles.totalPriceMonth}> /month</Text>
					</Text>
				</View>

				<View>
					<Button style={styles.bookNowBtn}>Book Now</Button>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	imageWrapper: {
		height: 380,
		position: "relative",
		marginBottom: 15,
	},
	imageStyles: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	container: {
		paddingHorizontal: 20,
	},
	reviews: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 15,
	},
	reviewsLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	reviewsText: {
		fontSize: 12,
		color: "#8997A9",
	},
	reviewsCategory: {
		fontSize: 13,
		color: "#478FF1",
		backgroundColor: "#F4F6F9",
		borderRadius: 3,
		paddingHorizontal: 10,
		paddingVertical: 7,
		fontWeight: 500,
	},
	title: {
		fontSize: 20,
		fontWeight: 700,
		color: "#2A2B3F",
		marginBottom: 12,
	},
	address: {
		fontSize: 13,
		color: "#8C8C8C",
		marginBottom: 20,
	},
	menuItems: {
		flexDirection: "row",
		marginBottom: 30,
	},
	bookNow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingBottom: 30,
		paddingTop: 15,
		borderTopWidth: 1,
		borderTopColor: "rgba(0, 0, 0, 0.1)",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	totalPriceTitle: {
		fontSize: 14,
		fontWeight: 700,
		color: "#2A2B3F",
		marginBottom: 6,
	},
	totalPriceAmount: {
		fontSize: 22,
		fontWeight: 500,
		color: globalStyles.primaryColor,
	},
	totalPriceMonth: {
		fontSize: 13,
		fontWeight: "700",
		color: "#8C8C8C",
	},
	bookNowBtn: {
		paddingBlock: 15,
		paddingHorizontal: 40,
	},
});
