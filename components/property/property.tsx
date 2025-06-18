import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";

type Props = {
  id: string;
  title: string;
  image: string;
  price: number;
  address: string;
  small?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
};

export default function Property({
  id,
  title,
  image,
  price,
  address,
  small,
  containerStyles
}: Props) {
  const router = useRouter();

  const navigate = () => {
    router.push(`/properties/${id}`);
  };

  return (
    <Pressable style={[styles.container, containerStyles]} onPress={navigate}>
      <Image
        style={[styles.image, small && styles.imageSmall]}
        source={{ uri: image }}
      />

      <View style={[styles.infoContainer, small && styles.infoContainerSmall]}>
        <Text style={[styles.title, small && styles.titleSmall]}>{title}</Text>

        <View style={styles.infoInnerContainer}>
          <View style={styles.info}>
            <Text style={[styles.price, small && styles.priceSmall]}>
              ${price}/month
            </Text>
            <View style={styles.addressWrapper}>
              <Ionicons
                name="location"
                size={small ? 8 : 12}
                color={"#B9B9B9"}
              />
              <Text style={[styles.address, small && styles.addressSmall]}>
                {address}
              </Text>
            </View>
          </View>

          <Pressable
            style={[styles.infoButton, small && styles.infoButtonSmall]}
          >
            <Ionicons name="heart" size={small ? 10 : 12} color={"#0066FF"} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: globalStyles.whiteColor,
    elevation: 1,
    shadowColor: "#3D3D3D",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 }
  },
  image: {
    width: "100%",
    height: 155,
    borderRadius: 15,
    marginBottom: 13
  },
  imageSmall: {
    height: 105,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 8
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 9
  },
  titleSmall: {
    fontSize: 12,
    marginBottom: 8
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15
  },
  infoContainerSmall: {
    paddingBottom: 8
  },
  infoInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {},
  priceSmall: {
    fontSize: 9,
    marginBottom: 4
  },
  price: {
    fontSize: 11,
    marginBottom: 9,
    color: "#0066FF"
  },
  addressSmall: {
    fontSize: 8
  },
  addressWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  address: {
    color: "#B9B9B9",
    fontSize: 11
  },
  infoButton: {
    width: 32,
    height: 32,
    backgroundColor: "#E5F0FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12
  },
  infoButtonSmall: {
    width: 22,
    height: 22
  }
});
