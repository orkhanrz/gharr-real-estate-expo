import Map from "@/components/map";
import IconButton from "@/components/UI/icon-button";
import LoadingScreen from "@/components/UI/loading-screen";
import { globalStyles } from "@/constants/styles";
import { useGetSingleProperty } from "@/services/properties";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Location() {
	const router = useRouter();
	const insets = useSafeAreaInsets();
	const id = useLocalSearchParams().id as string;

	const { data: property, isLoading } = useGetSingleProperty(id);

	const goBack = () => {
		router.back();
	};

	if (!property || isLoading) {
		return <LoadingScreen />;
	}

	return (
		<View style={styles.container}>
			<IconButton
				icon="arrow-back-outline"
				iconSize={24}
				iconColor={globalStyles.blackColor}
				buttonStyles={[styles.navigationBtn, { marginTop: insets.top }]}
				onPress={goBack}
			/>

			<Map properties={[property]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	navigationBtn: {
		width: 40,
		height: 40,
		backgroundColor: globalStyles.whiteColor,
		borderRadius: 50,
		position: "absolute",
		left: 20,
		zIndex: 100,
	},
});
