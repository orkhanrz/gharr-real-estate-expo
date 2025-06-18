import { ILocation } from "@/models/property";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

type Props = {
  markers?: ILocation[];
};

export default function Map({ markers }: Props) {
  return <MapView provider={PROVIDER_GOOGLE} style={styles.map}></MapView>;
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  }
});
