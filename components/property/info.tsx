import { config } from "@/constants/config";
import { globalStyles } from "@/constants/styles";
import { IProperty } from "@/models/property";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GridList } from "../UI/grid-list";
import PropertyInfoItem from "../UI/property/facility-item";

type Props = {
  property: IProperty;
};

export default function Info({ property }: Props) {
  const id = useLocalSearchParams().id;
  const router = useRouter();

  const handleOpenMap = () => {
    router.navigate(`/properties/${id}/location`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoItems}>
        <PropertyInfoItem
          data={property?.area}
          text="sqft"
          icon="cash-outline"
        />
        <PropertyInfoItem
          data={property?.bedrooms}
          text="Bedrooms"
          icon="bed-outline"
        />
        <PropertyInfoItem
          data={property?.bathrooms}
          text="Bathrooms"
          icon="water-outline"
        />
        <PropertyInfoItem
          data={property?.safetyRank}
          text="Safety Rank"
          icon="checkbox-outline"
        />
      </View>

      <View style={styles.agentSection}>
        <Text style={styles.sectionTitle}>Listing Agent</Text>

        <View style={styles.agentContainer}>
          <View style={styles.agentContainerLeft}>
            <Image
              source={{ uri: property?.agent.image }}
              style={styles.agentImage}
            />

            <View style={styles.agentContainerRight}>
              <Text style={styles.agentName}>{property?.agent.fullName}</Text>
              <Text style={styles.agentRelation}>{property?.agent.type}</Text>
            </View>
          </View>

          <View style={styles.agentIcons}>
            <Ionicons name="mail" size={24} color={globalStyles.primaryColor} />
            <Ionicons name="call" size={24} color={globalStyles.primaryColor} />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.sectionTitle}>Facilities</Text>

        <GridList
          data={property?.facilities || []}
          renderItem={(item) => (
            <PropertyInfoItem icon={item.icon} text={item.name} />
          )}
          keyExtractor={(item) => item.id.toString()}
          columns={4}
          gap={10}
          scrollEnabled={false}
          contentContainerStyle={styles.facilities}
        />
      </View>

      <View>
        <View style={styles.mapTop}>
          <Text style={[styles.sectionTitle, styles.mapTopTitle]}>Address</Text>
          <Pressable onPress={handleOpenMap}>
            <Text style={styles.mapTopText}>View on Map</Text>
          </Pressable>
        </View>

        <View>
          <View style={styles.mapAddress}>
            <Ionicons
              name="location-outline"
              size={15}
              color={"#2A2B3F"}
              style={styles.mapAddressIcon}
            />
            <Text style={styles.mapAddressText}>
              {property?.location.address}
            </Text>
          </View>

          <Pressable onPress={handleOpenMap}>
            <Image
              style={styles.mapImage}
              source={{
                uri: `https://maps.googleapis.com/maps/api/staticmap?center=${property?.location.latitude},${property?.location.longitude}&zoom=17&size=600x300&markers=color:red%7C${property?.location.latitude},${property?.location.longitude}&key=${config.googleApiKey}`
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
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
  facilities: {
    marginBottom: 20
  },
  mapTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: 10,
    marginBottom: 10
  },
  mapTopTitle: {
    marginBottom: 0
  },
  mapTopText: {
    color: globalStyles.primaryColor,
    fontSize: 12,
    fontWeight: 500
  },
  mapAddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10
  },
  mapAddressIcon: {},
  mapAddressText: {
    fontSize: 13
  },
  mapImage: {
    height: 201,
    borderRadius: 20,
    marginBottom: 35
  }
});
