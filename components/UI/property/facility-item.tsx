import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  data?: number;
  text: string;
  containerStyles?: StyleProp<ViewStyle>;
};

export default function PropertyInfoItem({
  icon,
  data,
  text,
  containerStyles
}: Props) {
  return (
    <View style={[styles.container, containerStyles]}>
      <Ionicons
        name={icon}
        size={24}
        color={globalStyles.primaryColor}
        style={styles.icon}
      />
      {data && <Text style={styles.title}>{data}</Text>}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.whiteColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    shadowColor: "#6B6B6B",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 8
    }
  },
  icon: {
    marginBottom: 4
  },
  title: {
    textAlign: "center",
    color: globalStyles.primaryColor,
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 4
  },
  text: {
    color: "#6B6B6B",
    textAlign: "center",
    fontSize: 10,
    fontWeight: 500
  }
});
