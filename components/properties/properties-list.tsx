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
};

export default function PropertiesList({ styles }: Props) {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles}
			data={properties}
			renderItem={({ item }) => (
				<Property
					key={item.id}
					title={item.title}
					price={item.price}
					address={item.address}
					image={item.image}
				/>
			)}
		></FlatList>
	);
}
