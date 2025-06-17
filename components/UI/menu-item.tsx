import { globalStyles } from "@/constants/styles";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  item: { id: number; label: string };
  isActive?: boolean;
  onPress: (id: number) => void;
};

export default function MenuItem({ item, isActive, onPress }: Props) {
  return (
    <Pressable
      style={[styles.menuItemButton, isActive && styles.menuItemButtonActive]}
      onPress={() => onPress(item.id)}
    >
      <Text
        style={[
          styles.menuItemButtonText,
          isActive && styles.menuItemButtonTextActive
        ]}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItemButton: {
    flex: 1,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: "#D6E9FC"
  },
  menuItemButtonActive: {
    borderBottomColor: globalStyles.primaryColor
  },
  menuItemButtonText: {
    color: "#303131",
    fontWeight: 500,
    textAlign: "center"
  },
  menuItemButtonTextActive: {
    color: globalStyles.primaryColor
  }
});
