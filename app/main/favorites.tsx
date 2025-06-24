import CategoriesList from "@/components/categories-list";
import PropertyDetailed from "@/components/property/property-detailed";
import { GridList } from "@/components/UI/grid-list";
import LoadingScreen from "@/components/UI/loading-screen";
import TopBar from "@/components/UI/top-bar";
import { useGetUserFavorites } from "@/services/user";
import { getTokenDecoded } from "@/utils/auth";
import { useEffect, useState } from "react";
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
  const [userId, setUserId] = useState<null | string>(null);

  useEffect(() => {
    (async function () {
      const token = await getTokenDecoded();

      if (token) {
        const userId = token.id;

        setUserId(userId);
      }
    })();
  }, []);

  const { data: properties, isLoading } = useGetUserFavorites(userId as string);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
              id={item._id}
              title={item.title}
              price={item.price}
              address={item.location.address}
              imageUrl={item.imageUrl}
              category={item.category}
              bedrooms={item.bedrooms}
              rating={item.rating}
              reviews={item.reviews}
            />
          )}
          keyExtractor={(item) => item._id}
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
