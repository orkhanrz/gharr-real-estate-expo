import { globalStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
	containerStyles?: StyleProp<ViewStyle>;
	currentPage: number;
	length: number;
	onNextPage: () => void;
};

export default function NavigationBar({
	currentPage,
	length,
	containerStyles,
	onNextPage,
}: Props) {
	const router = useRouter();

	function handlePreviousPage() {
		router.back();
	}

	const dots = () => {
		let content = [];

		for (let i = 1; i <= length; i++) {
			content.push(
				<View
					key={i}
					style={[styles.dot, i == currentPage && styles.dotFocused]}
				></View>
			);
		}

		return content;
	};

	return (
		<View style={[styles.container, containerStyles]}>
			<Pressable
				style={[
					styles.button,
					styles.buttonBack,
					currentPage == 1 && styles.buttonBackInvisible,
				]}
				onPress={handlePreviousPage}
			>
				<Ionicons name="arrow-back" size={24} color={globalStyles.primaryColor} />
			</Pressable>

			<View style={styles.dotsContainer}>{dots()}</View>

			<Pressable style={styles.button} onPress={onNextPage}>
				<Ionicons
					name="arrow-forward"
					size={24}
					backgroundColor={globalStyles.primaryColor}
					color={globalStyles.whiteColor}
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "auto",
	},
	dotsContainer: {
		flexDirection: "row",
		gap: 10,
	},
	dot: {
		width: 11,
		height: 11,
		borderRadius: 100,
		backgroundColor: globalStyles.extraLightPrimaryColor,
	},
	dotFocused: {
		width: 15,
		height: 15,
		backgroundColor: globalStyles.primaryColor,
	},
	button: {
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: globalStyles.primaryColor,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonBack: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: globalStyles.primaryColor,
	},
	buttonBackInvisible: {
		opacity: 0,
	},
});
