import { useState } from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import CategoryItem from "./UI/category-item";

const categories = [
	{ id: 1, label: "Recommended" },
	{ id: 2, label: "Top Rates" },
	{ id: 3, label: "Best Offers" },
	{ id: 4, label: "Most Recent" },
];

type Props = {
	styles?: StyleProp<ViewStyle>;
};

export default function CategoriesList({ styles }: Props) {
	const [activeId, setActiveId] = useState(1);

	function handleSelect(id: number) {
		setActiveId(id);
	}

	return (
		<FlatList
			horizontal
			contentContainerStyle={styles}
			showsHorizontalScrollIndicator={false}
			data={categories}
			renderItem={({ item }) => (
				<CategoryItem
					active={activeId == item.id}
					id={item.id}
					key={item.id}
					label={item.label}
					onSelect={handleSelect}
				/>
			)}
			keyExtractor={({ id }) => id.toString()}
		></FlatList>
	);
}
