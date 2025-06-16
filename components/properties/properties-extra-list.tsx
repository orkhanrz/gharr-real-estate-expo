import { properties } from "@/constants/data";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import PropertyExtra from "./property-extra";

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
