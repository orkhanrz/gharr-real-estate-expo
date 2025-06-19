import { useState } from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import CategoryItem from "./UI/category-item";

type Props = {
  categories: Category[];
  styles?: StyleProp<ViewStyle>;
};

type Category = {
  id: number;
  label: string;
};

export default function CategoriesList({ categories, styles }: Props) {
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
          label={item.label}
          onSelect={handleSelect}
        />
      )}
      keyExtractor={({ id }) => id.toString()}
    />
  );
}
