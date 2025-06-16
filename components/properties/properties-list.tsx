import { properties } from "@/constants/data";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import Property from "./property";

type Props = {
	styles?: StyleProp<ViewStyle>;
	propertyStyles?: StyleProp<ViewStyle>;
	columnGap?: number;
	columns?: number;
	scrollEnabled?: boolean;
	direction?: "horizontal" | "vertical";
};

export default function PropertiesList({
	styles,
	propertyStyles,
	columnGap = 0,
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
			renderItem={({ item, index }) => (
				<Property
					id={item.id}
					title={item.title}
					price={item.price}
					address={item.address}
					image={item.image}
					small={columns > 1}
					containerStyles={[
						propertyStyles,
						{
							marginRight:
								columns &&
								columnGap &&
								index != properties.length - 1 &&
								index % columns == 0
									? columnGap
									: 0,
						},
					]}
				/>
			)}
			keyExtractor={({ id }) => id.toString()}
		/>
	);
}
