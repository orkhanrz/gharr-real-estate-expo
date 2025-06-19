import * as Location from "expo-location";
import { Alert } from "react-native";

const requestForLocationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permission to access location was denied");
    return false;
  }

  return true;
};

export async function getCurrentLocation() {
  const isGranted = await requestForLocationPermission();

  if (!isGranted) {
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});

  return location;
}

export async function getCurrentCity() {
  const isGranted = await requestForLocationPermission();

  if (!isGranted) {
    return null;
  }

  const { coords } = await Location.getCurrentPositionAsync({});
  const [address] = await Location.reverseGeocodeAsync({
    latitude: coords.latitude,
    longitude: coords.longitude
  });

  return address?.city || null;
}
