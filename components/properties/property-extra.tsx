import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type Props = {
	id: number;
	image: ImageSourcePropType;
	rating: number;
	category: string;
	title: string;
	address: string;
	reviews: number;
	comfort: number;
	price: number;
};

export default function PropertyExtra({
	id,
	image,
	rating,
	category,
	title,
	address,
	reviews,
	comfort,
	price,
}: Props) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />

			<View style={styles.info}>
				<View style={styles.infoTop}>
					<View style={styles.rating}>
						<Ionicons
							style={styles.ratingIcon}
							name="star"
							size={13}
							color={"#EEA651"}
						/>
						<Text style={styles.ratingText}>{rating}</Text>
					</View>

					<Text style={styles.category}>{category}</Text>
				</View>

				<Text style={styles.title}>{title}</Text>

				<View style={styles.address}>
					<Ionicons
						style={styles.addressIcon}
						name="location"
						size={10}
						color={"#415770"}
					/>
					<Text style={styles.addressText}>{address}</Text>
				</View>

				<View style={styles.bottom}>
					<View style={styles.bottomLeft}>
						<View style={styles.bottomLeftItem}>
							<Ionicons
								style={styles.bottomLeftItemIcon}
								size={10}
								name="cash"
								color={"#122D4D"}
							/>
							<Text style={styles.bottomLeftItemText}>{reviews}</Text>
						</View>
						<View style={styles.bottomLeftItem}>
							<Ionicons
								style={styles.bottomLeftItemIcon}
								size={10}
								name="bed"
								color={"#122D4D"}
							/>
							<Text style={styles.bottomLeftItemText}>{comfort}</Text>
						</View>
					</View>

					<Text style={styles.price}>${price}/month</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: globalStyles.whiteColor,
		padding: 10,
		borderRadius: 10,
		elevation: 1,
		shadowColor: "#3D3D3D",
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 2 },
	},
	image: {
		width: 89,
		height: 89,
		borderRadius: 10,
		marginRight: 10,
	},
	info: {
		flex: 1,
	},
	infoTop: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 9,
	},
	rating: {
		flexDirection: "row",
		alignItems: "center",
	},
	ratingIcon: {
		marginRight: 5,
	},
	ratingText: {
		fontSize: 12,
		color: "#8997A9",
	},
	category: {
		fontSize: 10,
		color: "#478FF1",
		backgroundColor: "#F4F6F9",
		padding: 5,
		borderRadius: 5,
	},
	title: {
		fontSize: 17,
		fontWeight: 600,
		color: "#122D4D",
		marginBottom: 7,
	},
	address: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 9,
	},
	addressIcon: {
		marginRight: 3,
	},
	addressText: {
		fontSize: 10,
	},
	bottom: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomLeft: {
		flexDirection: "row",
		alignItems: "center",
	},
	bottomLeftItem: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 12,
	},
	bottomLeftItemIcon: {
		marginRight: 4,
	},
	bottomLeftItemText: {
		fontSize: 10,
		color: "#122D4D",
	},
	price: {
		fontSize: 11,
		fontWeight: 600,
		color: "#0066FF",
	},
});
