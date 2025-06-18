import CategoriesList from "@/components/categories-list";
import Property from "@/components/property/property";
import PropertyDetailed from "@/components/property/property-detailed";
import { GridList } from "@/components/UI/grid-list";
import SearchInput from "@/components/UI/search-input";
import { properties } from "@/constants/data";
import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  const enableSearch = () => {
    setIsSearchEnabled(true);
  };

  const disableSearch = () => {
    setIsSearchEnabled(false);
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView alwaysBounceVertical={false}>
        {isSearchEnabled ? (
          <View style={styles.screenTopSearch}>
            <Pressable
              onPress={disableSearch}
              style={styles.screenTopSearchIcon}
            >
              <Ionicons
                name="arrow-back"
                color={globalStyles.blackColor}
                size={24}
              />
            </Pressable>

            <Text style={styles.screenTopSearchTitle}>Search</Text>
          </View>
        ) : (
          <View style={styles.screenTop}>
            <View style={styles.screentTopLeft}>
              <Text style={styles.screenTopLeftTitle}>Let's Find your</Text>
              <Text style={styles.screenTopLeftSpecialText}>Favorite Home</Text>
            </View>

            <Image
              source={require("@/assets/images/profile-img.jpg")}
              style={styles.screenTopImage}
            />
          </View>
        )}

        <View style={styles.inputWrapper}>
          <SearchInput
            onPress={enableSearch}
            placeholder="Search by Address, City, or ZIP"
            icon="search"
          />
        </View>

        {isSearchEnabled ? (
          <GridList
            scrollEnabled={false}
            data={properties}
            renderItem={(item) => (
              <Property
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                address={item.location.address}
                small={true}
              />
            )}
            keyExtractor={(item) => item.id}
            columns={2}
            gap={18}
            contentContainerStyle={styles.properties}
          />
        ) : (
          <View>
            <CategoriesList styles={styles.categories} />

            <GridList
              direction="horizontal"
              scrollEnabled={true}
              data={properties}
              renderItem={(item) => (
                <Property
                  id={item.id}
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  address={item.location.address}
                  containerStyles={{ width: 223 }}
                />
              )}
              keyExtractor={(item) => item.id}
              gap={18}
              contentContainerStyle={styles.properties}
            />

            <View style={styles.near}>
              <View style={styles.nearHeader}>
                <Text style={styles.nearYou}>Near You</Text>
                <Text style={styles.nearMore}>More</Text>
              </View>
            </View>

            <GridList
              data={properties}
              renderItem={(item) => (
                <PropertyDetailed
                  id={item.id}
                  address={item.location.address}
                  category={item.category}
                  comfort={item.comfort}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.reviews}
                  title={item.title}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              gap={10}
              contentContainerStyle={styles.propertiesExtra}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  screenTopSearch: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 21,
    position: "relative"
  },
  screenTopSearchIcon: {
    position: "absolute",
    left: 30,
    zIndex: 100,
    padding: 10
  },
  screenTopSearchTitle: {
    color: "#122D4D",
    fontSize: 18,
    fontWeight: 700,
    flex: 1,
    textAlign: "center"
  },
  screenTop: {
    marginTop: 24,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24
  },
  screentTopLeft: {},
  screenTopLeftTitle: {
    color: "#8997A9",
    fontSize: 18,
    marginBottom: 10
  },
  screenTopLeftSpecialText: {
    color: "#122D4D",
    fontSize: 20,
    fontWeight: "800"
  },
  screenTopImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    objectFit: "cover"
  },
  inputWrapper: {
    paddingHorizontal: 30,
    marginBottom: 24
  },
  categories: {
    gap: 10,
    marginBottom: 24,
    paddingHorizontal: 30
  },
  properties: {
    paddingHorizontal: 30,
    marginBottom: 24,
    gap: 16
  },
  near: {
    paddingHorizontal: 30,
    marginBottom: 10
  },
  nearHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18
  },
  nearYou: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#122D4D"
  },
  nearMore: {
    fontSize: 12,
    color: "#989898",
    fontWeight: "bold"
  },
  propertiesExtra: {
    gap: 10,
    paddingHorizontal: 30,
    marginBottom: 10
  }
});
