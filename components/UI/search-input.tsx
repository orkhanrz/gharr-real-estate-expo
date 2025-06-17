import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import IconButton from "./icon-button";

type Props = {
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  onBlur?: () => void;
};

export default function SearchInput({
  placeholder,
  icon,
  onPress,
  onBlur
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {icon && (
          <Ionicons
            name="search-outline"
            size={24}
            color={"#95A2B0"}
            style={styles.icon}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onPress={onPress}
          onBlur={onBlur}
        />
      </View>

      <IconButton
        icon="filter"
        iconSize={24}
        iconColor={globalStyles.whiteColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: globalStyles.whiteColor,
    borderRadius: 10,
    height: 51,
    flex: 1,
    paddingHorizontal: 20,
    elevation: 1,
    shadowColor: "#3D3D3D",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 }
  },
  icon: {
    marginRight: 8
  },
  input: {
    color: "#95A2B0",
    height: "100%",
    flex: 1
  }
});
