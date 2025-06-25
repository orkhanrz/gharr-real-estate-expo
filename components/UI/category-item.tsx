import { globalStyles } from "@/constants/styles";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle
} from "react-native";

export interface ICategoryItem {
  id: number;
  label: string;
}

type Props = {
  id: number;
  label: string;
  active: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  onSelect: (id: number) => void;
};

export default function CategoryItem({
  id,
  label,
  active,
  containerStyles,
  onSelect
}: Props) {
  return (
    <Pressable
      style={[styles.item, active && styles.itemActive, containerStyles]}
      onPress={() => onSelect(id)}
    >
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: globalStyles.categoryItemColor,
    borderRadius: 17,
    paddingVertical: 12,
    paddingHorizontal: 18
  },
  itemActive: {
    backgroundColor: globalStyles.categoryItemActiveColor
  },
  label: {
    color: globalStyles.categoryItemTextColor,
    fontSize: 10,
    fontWeight: 600
  },
  labelActive: {
    color: globalStyles.lightPrimaryColor
  }
});
