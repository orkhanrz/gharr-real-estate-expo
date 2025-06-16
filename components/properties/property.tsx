import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import {
	Image,
	ImageSourcePropType,
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from "react-native";

type Props = {
	id: number;
	title: string;
	image: ImageSourcePropType;
	price: number;
	address: string;
	containerStyles?: StyleProp<ViewStyle>;
};

export default function Property({
	id,
	title,
	image,
	price,
	address,
	containerStyles,
}: Props) {
	return (
		<View style={[styles.container, containerStyles]}>
			<Image style={styles.image} source={image} />

			<View style={styles.infoContainer}>
				<Text style={styles.title}>{title}</Text>

				<View style={styles.infoInnerContainer}>
					<View style={styles.info}>
						<Text style={styles.price}>${price}/month</Text>
						<View style={styles.addressWrapper}>
							<Ionicons name="location" size={12} color={"#B9B9B9"} />
							<Text style={styles.address}>{address}</Text>
						</View>
					</View>

					<Pressable style={styles.infoButton}>
						<Ionicons name="heart" size={12} color={"#0066FF"} />
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 242,
		borderRadius: 15,
		backgroundColor: globalStyles.whiteColor,
		elevation: 1,
		shadowColor: "#3D3D3D",
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 2 },
	},
	image: {
		width: "100%",
		height: 155,
		borderRadius: 15,
		marginBottom: 13,
	},
	title: {
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 9,
	},
	infoContainer: {
		paddingHorizontal: 10,
	},
	infoInnerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	info: {},
	infoButton: {
		width: 32,
		height: 32,
		backgroundColor: "#E5F0FF",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	price: {
		fontSize: 11,
		marginBottom: 9,
		color: "#0066FF",
	},
	addressWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	address: {
		color: "#B9B9B9",
		fontSize: 11,
	},
});
