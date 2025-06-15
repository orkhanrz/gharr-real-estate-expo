import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import Input from "./Input";

export default function SearchInput() {
	const { control } = useForm();

	return (
		<View style={styles.searchInputContainer}>
			<View style={styles.searchInput}>
				<Input
					placeholder="Search by Address, City, or ZIP"
					icon="search"
					control={control}
					name="search"
				/>
			</View>

			<IconButton />
		</View>
	);
}

const styles = StyleSheet.create({
	searchInputContainer: {
		paddingHorizontal: 30,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginBottom: 24,
	},
	searchInput: {
		flex: 1,
	},
});
