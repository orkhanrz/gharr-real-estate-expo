import CategoriesList from "@/components/categories-list";
import PropertyDetailed from "@/components/property/property-detailed";
import { GridList } from "@/components/UI/grid-list";
import TopBar from "@/components/UI/top-bar";
import { properties } from "@/constants/data";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: 1, label: "All" },
  { id: 2, label: "House" },
  { id: 3, label: "Villa" },
  { id: 4, label: "Apartment" },
  { id: 5, label: "Mansion" },
  { id: 6, label: "Condo" }
];

export default function FavoritesScreen() {
  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <ScrollView>
        <TopBar text="Favorites" leftIcon="arrow-back" rightIcon="search" />

        <CategoriesList
          categories={categories}
          styles={[styles.categoriesList, styles.container]}
        />

        <GridList
          columns={1}
          contentContainerStyle={[styles.container, { paddingBottom: 10 }]}
          scrollEnabled={false}
          gap={18}
          data={properties}
          renderItem={(item) => (
            <PropertyDetailed
              id={item.id}
              title={item.title}
              price={item.price}
              address={item.location.address}
              image={item.image}
              category={item.category}
              comfort={item.comfort}
              rating={item.rating}
              reviews={item.reviews}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  categoriesList: {
    gap: 10,
    paddingBlock: 10,
    justifyContent: "center"
  }
});
