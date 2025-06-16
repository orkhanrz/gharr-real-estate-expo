import { FlatList, StyleProp, ViewStyle } from "react-native";
import Property from "./property";

const properties = [
	{
		id: 1,
		image: require("@/assets/images/house.jpg"),
		title: "Lorem House",
		price: 340,
		address: "Avenue, West Side",
		isFavorite: false,
	},
	{
		id: 2,
		image: require("@/assets/images/house.jpg"),
		title: "Lorem House",
		price: 340,
		address: "Avenue, West Side",
		isFavorite: false,
	},
	{
		id: 3,
		image: require("@/assets/images/house.jpg"),
		title: "Lorem House",
		price: 340,
		address: "Avenue, West Side",
		isFavorite: false,
	},
	{
		id: 4,
		image: require("@/assets/images/house.jpg"),
		title: "Lorem House",
		price: 340,
		address: "Avenue, West Side",
		isFavorite: false,
	},
	{
		id: 5,
		image: require("@/assets/images/house.jpg"),
		title: "Lorem House",
		price: 340,
		address: "Avenue, West Side",
		isFavorite: false,
	},
];

type Props = {
	styles?: StyleProp<ViewStyle>;
	propertyStyles?: StyleProp<ViewStyle>;
	columns?: number;
	scrollEnabled?: boolean;
	direction?: "horizontal" | "vertical";
};

export default function PropertiesList({
	styles,
	propertyStyles,
	scrollEnabled = true,
	direction = "vertical",
	columns = 1,
}: Props) {
	return (
		<FlatList
			horizontal={direction == "horizontal"}
			showsHorizontalScrollIndicator={false}
			scrollEnabled={scrollEnabled}
			contentContainerStyle={styles}
			data={properties}
			numColumns={columns}
			renderItem={({ item }) => (
				<Property
					id={item.id}
					title={item.title}
					price={item.price}
					address={item.address}
					image={item.image}
					containerStyles={propertyStyles}
				/>
			)}
			keyExtractor={({ id }) => id.toString()}
		/>
	);
}
