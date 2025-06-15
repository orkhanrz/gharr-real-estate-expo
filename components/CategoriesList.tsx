import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CategoryItem, { ICategoryItem } from "./UI/CategoryItem";

type Props = {
	items: ICategoryItem[];
};

export default function CategoriesList({ items }: Props) {
	const [activeId, setActiveId] = useState(1);

	function handleSelect(id: number) {
		setActiveId(id);
	}

	return (
		<ScrollView
			horizontal
			style={styles.categoryItems}
			showsHorizontalScrollIndicator={false}
		>
			{items.map((item, index) => (
				<CategoryItem
					active={activeId == item.id}
					id={item.id}
					key={item.id}
					label={item.label}
					containerStyles={
						index != items.length - 1
							? { marginRight: 10 }
							: { marginRight: 30 }
					}
					onSelect={handleSelect}
				/>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	categoryItems: {
		paddingLeft: 30,
	},
});
