import { globalStyles } from "@/constants/styles";
import { IProperty } from "@/models/property";
import { getCurrentLocation } from "@/utils/location";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import MapView, {
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  Region
} from "react-native-maps";

type Props = {
  properties?: IProperty[];
};

type Marker = {
  coordinates: LatLng;
  id?: string;
  image?: string;
};

export default function Map({ properties }: Props) {
  const router = useRouter();
  const [location, setLocation] = useState<Region>();
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    (async function () {
      if (!properties) {
        let location = (await getCurrentLocation()) as Location.LocationObject;

        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        });

        setMarkers([
          {
            coordinates: {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }
          }
        ]);
      }

      if (properties && properties.length > 1) {
        let location = (await getCurrentLocation()) as Location.LocationObject;

        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        });

        setMarkers(
          properties.map((p) => ({
            id: p.id,
            coordinates: {
              latitude: p.location.lat,
              longitude: p.location.lng
            },
            image: p.image
          }))
        );
      }

      if (properties && properties.length == 1) {
        setLocation({
          latitude: properties[0].location.lat,
          longitude: properties[0].location.lng,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });

        setMarkers(
          properties.map((p) => ({
            id: p.id,
            coordinates: {
              latitude: p.location.lat,
              longitude: p.location.lng
            },
            image: p.image
          }))
        );
      }
    })();
  }, [properties, getCurrentLocation]);

  const navigateTo = (id: string) => {
    router.push(`/properties/${id}`);
  };

  if (properties && markers.length == 0) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size={"large"} color={globalStyles.primaryColor} />
      </View>
    );
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={location}
      style={styles.map}
      showsUserLocation
    >
      {markers.map(({ coordinates, id, image }) => (
        <Marker
          key={`${coordinates.latitude}_${coordinates.longitude}`}
          coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude
          }}
          onPress={() => id && navigateTo(id)}
        >
          <View style={styles.markerContainer}>
            <Image source={{ uri: image }} style={styles.markerImage} />
          </View>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyles.lightBgColor
  },
  map: {
    width: "100%",
    height: "100%"
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#eee",
    borderRadius: 25,
    elevation: 5
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover"
  }
});
