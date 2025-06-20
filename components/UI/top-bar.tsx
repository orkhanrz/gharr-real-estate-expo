import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  onLeftIconPress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
};

export default function TopBar({
  text,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress
}: Props) {
  return (
    <View style={[styles.topBar, styles.container]}>
      <View>
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={24}
            color={globalStyles.blackColor}
            onPress={onLeftIconPress}
          />
        )}
      </View>

      <Text style={styles.topBarTitle}>{text}</Text>

      <View>
        {rightIcon && (
          <Ionicons
            name={rightIcon}
            size={24}
            color={globalStyles.blackColor}
            onPress={onRightIconPress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#122D4D"
  }
});
