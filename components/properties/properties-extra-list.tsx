import { FlatList, StyleProp, ViewStyle } from "react-native";
import PropertyExtra from "./property-extra";

const properties = [
	{
		id: 1,
		image: require("@/assets/images/house.jpg"),
		rating: 4.9,
		category: "Apartment",
		title: "Woodland Apartment",
		address: "1012 Ocean avanue, New yourk, USA",
		reviews: 1.225,
		comfort: 3.0,
		price: 340,
	},
	{
		id: 2,
		image: require("@/assets/images/house.jpg"),
		rating: 4.9,
		category: "Apartment",
		title: "Woodland Apartment",
		address: "1012 Ocean avanue, New yourk, USA",
		reviews: 1.225,
		comfort: 3.0,
		price: 340,
	},
	{
		id: 3,
		image: require("@/assets/images/house.jpg"),
		rating: 4.9,
		category: "Apartment",
		title: "Woodland Apartment",
		address: "1012 Ocean avanue, New yourk, USA",
		reviews: 1.225,
		comfort: 3.0,
		price: 340,
	},
	{
		id: 4,
		image: require("@/assets/images/house.jpg"),
		rating: 4.9,
		category: "Apartment",
		title: "Woodland Apartment",
		address: "1012 Ocean avanue, New yourk, USA",
		reviews: 1.225,
		comfort: 3.0,
		price: 340,
	},
	{
		id: 5,
		image: require("@/assets/images/house.jpg"),
		rating: 4.9,
		category: "Apartment",
		title: "Woodland Apartment",
		address: "1012 Ocean avanue, New yourk, USA",
		reviews: 1.225,
		comfort: 3.0,
		price: 340,
	},
];

type Props = {
	styles?: StyleProp<ViewStyle>;
};

export default function PropertiesExtraList({ styles }: Props) {
	return (
		<FlatList
			contentContainerStyle={styles}
			data={properties}
			scrollEnabled={false}
			renderItem={({ item }) => (
				<PropertyExtra
					id={item.id}
					address={item.address}
					category={item.category}
					comfort={item.comfort}
					image={item.image}
					price={item.price}
					rating={item.rating}
					reviews={item.reviews}
					title={item.title}
				/>
			)}
			keyExtractor={({ id }) => id.toString()}
		/>
	);
}
