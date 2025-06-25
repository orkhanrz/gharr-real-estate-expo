import Map from "@/components/map";
import IconButton from "@/components/UI/icon-button";
import { globalStyles } from "@/constants/styles";
import { useGetProperties } from "@/services/properties";
import { getCurrentCity } from "@/utils/location";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function MapScreen() {
  const router = useRouter();

  const [city, setCity] = useState<string | null>();

  useEffect(() => {
    (async () => {
      const currentCity = await getCurrentCity();
      setCity(currentCity);
    })();
  }, []);

  const goBack = () => {
    router.back();
  };

  const { data: properties, isLoading } = useGetProperties(
    city ? { city } : {}
  );

  if (isLoading) {
    return <Map properties={[]} />;
  }

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-back-outline"
        iconSize={24}
        iconColor={globalStyles.blackColor}
        buttonStyles={[styles.navigationBtn]}
        onPress={goBack}
      />

      <Map properties={properties} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  navigationBtn: {
    width: 40,
    height: 40,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: 50,
    position: "absolute",
    left: 12,
    top: 51,
    zIndex: 100
  }
});
