import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress?: () => void;
};

export default function SettingItem({ icon, text, onPress }: Props) {
  return (
    <Pressable style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingItemLeft}>
        <Ionicons name={icon} size={24} />
        <Text style={styles.settingItemText}>{text}</Text>
      </View>

      <Ionicons name="arrow-forward" size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 48
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: 500
  }
});
