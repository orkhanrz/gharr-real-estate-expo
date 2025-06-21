import { globalStyles } from "@/constants/styles";
import { IImage } from "@/models/property";
import { Image, StyleSheet, Text, View } from "react-native";
import { GridList } from "../UI/grid-list";

type Props = {
	images: IImage[];
};

export default function Gallery({ images }: Props) {
	return (
		<View style={styles.gallery}>
			<Text style={styles.galleryText}>
				Gallery <Text style={styles.galleryTextSpecial}>({images.length})</Text>
			</Text>

			<View style={styles.images}>
				<GridList
					data={images}
					renderItem={(item) => (
						<Image source={{ uri: item.imageUrl }} style={styles.image} />
					)}
					columns={2}
					gap={10}
					keyExtractor={(item) => item.imageUrl}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	gallery: {
		flex: 1,
		paddingHorizontal: 20,
	},
	galleryText: {
		color: "#2A2B3F",
		fontSize: 14,
		fontWeight: 700,
		marginBottom: 10,
	},
	galleryTextSpecial: {
		color: globalStyles.primaryColor,
	},
	images: {
		marginBottom: 25,
	},
	image: {
		width: "100%",
		height: 155,
		objectFit: "cover",
		borderRadius: 5,
	},
});
