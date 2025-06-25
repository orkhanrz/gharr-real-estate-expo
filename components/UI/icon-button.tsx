import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  iconSize: number;
  iconColor: string;
  buttonStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function IconButton({
  icon,
  iconSize,
  iconColor,
  buttonStyles,
  onPress
}: Props) {
  return (
    <Pressable style={[styles.button, buttonStyles]} onPress={onPress}>
      <Ionicons name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: globalStyles.primaryColor,
    width: 52,
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: globalStyles.blackColor,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 }
  }
});
