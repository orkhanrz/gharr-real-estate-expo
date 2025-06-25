import { globalStyles } from "@/constants/styles";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IconButton from "../icon-button";

type Props = {
  isFavorite: boolean;
  onHandleFavorite: () => void;
};

export default function PropertyTopBar({
  isFavorite,
  onHandleFavorite
}: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={[styles.navigation, { paddingTop: insets.top }]}>
      <IconButton
        icon="arrow-back-outline"
        iconSize={24}
        iconColor={globalStyles.blackColor}
        buttonStyles={styles.navigationBtn}
        onPress={goBack}
      />

      <View style={styles.navigationRight}>
        <IconButton
          icon="share-social"
          iconSize={24}
          iconColor={globalStyles.blackColor}
          buttonStyles={styles.navigationBtn}
        />
        <IconButton
          icon={isFavorite ? "heart" : "heart-outline"}
          iconSize={24}
          iconColor={globalStyles.blackColor}
          buttonStyles={styles.navigationBtn}
          onPress={onHandleFavorite}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  navigationRight: {
    flexDirection: "row",
    gap: 10
  },
  navigationBtn: {
    width: 40,
    height: 40,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: 50
  }
});
