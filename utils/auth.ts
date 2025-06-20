import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
	try {
		const token = await AsyncStorage.getItem("token");

		return token;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export const saveToken = async (token: string) => {
	try {
		await AsyncStorage.setItem("token", token);
	} catch (err) {
		console.log(err);
		return null;
	}
};
