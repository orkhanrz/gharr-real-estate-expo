import { GridList } from "@/components/UI/grid-list";
import MenuItem from "@/components/UI/menu-item";
import PropertyInfoItem from "@/components/UI/property/facility-item";
import PropertyTopBar from "@/components/UI/property/top-bar";
import { properties } from "@/constants/data";
import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export interface IFacility {
  id: number;
  label: string;
  text?: string;
  image: keyof typeof Ionicons.glyphMap;
}

interface IMenuItem {
  id: number;
  label: string;
}

const menuItems: IMenuItem[] = [
  { id: 1, label: "Description" },
  { id: 2, label: "Gallery" },
  { id: 3, label: "Reviews" }
];

const facilities: IFacility[] = [
  { id: 1, label: "Car  Parking", image: "car" },
  { id: 2, label: "Swimming...", image: "water" },
  { id: 3, label: "Gym & Fit", image: "barbell" },
  { id: 4, label: "Restaurant", image: "restaurant" },
  { id: 5, label: "Wi-fi", image: "wifi" },
  { id: 6, label: "Pet Center", image: "paw" },
  { id: 7, label: "Sports Center", image: "person" },
  { id: 8, label: "Laundry", image: "basket" }
];

export default function Property() {
  const { id } = useLocalSearchParams();
  const [activemenuItemId, setActivemenuItemId] = useState(1);

  const setActiveMenu = (id: number) => {
    setActivemenuItemId(id);
  };

  const property = properties.find((property) => property.id == id);

  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.imageWrapper}>
        <PropertyTopBar />

        <Image source={{ uri: property?.image }} style={styles.imageStyles} />
      </View>

      <View style={styles.container}>
        <View style={styles.reviews}>
          <View style={styles.reviewsLeft}>
            <Ionicons name="star" color="orange" size={16} />
            <Text style={styles.reviewsText}>
              {property?.rating} (6.8K reviews)
            </Text>
          </View>

          <Text style={styles.reviewsCategory}>{property?.category}</Text>
        </View>

        <Text style={styles.title}>{property?.title}</Text>
        <Text style={styles.address}>{property?.address}</Text>
      </View>

      <View style={styles.menuItems}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isActive={activemenuItemId == item.id}
            onPress={setActiveMenu}
          />
        ))}
      </View>

      <View style={styles.container}>
        <View style={styles.infoItems}>
          <PropertyInfoItem title="1,225" text="sqft" icon="cash-outline" />
          <PropertyInfoItem title="3.0" text="Bedrooms" icon="bed-outline" />
          <PropertyInfoItem title="1.0" text="Bathrooms" icon="water-outline" />
          <PropertyInfoItem
            title="4,457"
            text="Safety Rank"
            icon="checkbox-outline"
          />
        </View>

        <View style={styles.agentSection}>
          <Text style={styles.sectionTitle}>Listing Agent</Text>

          <View style={styles.agentContainer}>
            <View style={styles.agentContainerLeft}>
              <Image
                source={{ uri: properties[0].image }}
                style={styles.agentImage}
              />

              <View style={styles.agentContainerRight}>
                <Text style={styles.agentName}>Sandeep S.</Text>
                <Text style={styles.agentRelation}>Partner</Text>
              </View>
            </View>

            <View style={styles.agentIcons}>
              <Ionicons
                name="mail"
                size={24}
                color={globalStyles.primaryColor}
              />
              <Ionicons
                name="call"
                size={24}
                color={globalStyles.primaryColor}
              />
            </View>
          </View>
        </View>

        <View style={styles.facilitiesSection}>
          <Text style={styles.sectionTitle}>Facilities</Text>

          <GridList
            data={facilities}
            renderItem={(item) => (
              <PropertyInfoItem
                icon={item.image}
                title={item.text}
                text={item.label}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            columns={4}
            gap={10}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: 380,
    position: "relative",
    marginBottom: 15
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  container: {
    paddingHorizontal: 20
  },
  reviews: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  reviewsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  reviewsText: {
    fontSize: 12,
    color: "#8997A9"
  },
  reviewsCategory: {
    fontSize: 13,
    color: "#478FF1",
    backgroundColor: "#F4F6F9",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontWeight: 500
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#2A2B3F",
    marginBottom: 12
  },
  address: {
    fontSize: 13,
    color: "#8C8C8C",
    marginBottom: 20
  },
  menuItems: {
    flexDirection: "row",
    marginBottom: 30
  },
  infoItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20
  },
  agentSection: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#2A2B3F",
    marginBottom: 10
  },
  agentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  agentContainerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  agentImage: {
    width: 45,
    height: 45,
    borderRadius: 100
  },
  agentContainerRight: {},
  agentName: {
    fontSize: 13,
    fontWeight: 700,
    color: "#2A2B3F"
  },
  agentRelation: {
    fontSize: 11,
    color: "#8C8C8C"
  },
  agentIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17
  },
  facilitiesSection: {
    marginBottom: 20
  }
});
