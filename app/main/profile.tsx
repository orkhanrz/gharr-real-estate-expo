import Button from "@/components/UI/button";
import IconButton from "@/components/UI/icon-button";
import SettingItem from "@/components/UI/setting-item";
import TopBar from "@/components/UI/top-bar";
import { config } from "@/constants/config";
import { RootState } from "@/store";
import { logOut } from "@/store/user/user-slice";
import { removeToken } from "@/utils/auth";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [image, setImage] = useState<string | null>(null);

  const handleSettingPress = () => {};

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleLogOut = async () => {
    await removeToken();
    dispatch(logOut());
    router.navigate("/auth/signin");
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <ScrollView>
        <TopBar
          text="My Profile"
          leftIcon="arrow-back"
          rightIcon="settings-outline"
        />

        <View style={styles.container}>
          <View style={styles.profileInfo}>
            <View style={styles.imageWrapper}>
              <Image
                source={{
                  uri: `${config.backendUrl}/${user?.image}`
                }}
                style={styles.image}
              />
              <IconButton
                icon="camera-outline"
                iconColor="black"
                iconSize={12}
                buttonStyles={styles.profileBtn}
                onPress={pickImage}
              />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{user?.username}</Text>
              <Text style={styles.userEmail}>{user?.email}</Text>
              <Button style={styles.editProfile}>Edit Profile</Button>
            </View>
          </View>

          <View style={styles.settingItems}>
            <SettingItem
              icon="heart-outline"
              text="Favorites"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="download-outline"
              text="Downloads"
              onPress={handleSettingPress}
            />

            <View style={styles.line}></View>

            <SettingItem
              icon="language-outline"
              text="Languages"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="location-outline"
              text="Location"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="play-outline"
              text="Subscription"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="desktop-outline"
              text="Display"
              onPress={handleSettingPress}
            />

            <View style={styles.line}></View>

            <SettingItem
              icon="trash-outline"
              text="Clear Cache"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="time-outline"
              text="Clear History"
              onPress={handleSettingPress}
            />

            <SettingItem
              icon="exit-outline"
              text="Log Out"
              onPress={handleLogOut}
            />

            <View style={styles.line}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBlock: 10
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 60
  },
  profileBtn: {
    backgroundColor: "white",
    width: 25,
    height: 25,
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  imageWrapper: {
    width: 81,
    height: 81,
    position: "relative"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 100
  },
  userDetails: {},
  userName: {
    color: "#122D4D",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 2
  },
  userEmail: {
    color: "#8997A9",
    fontSize: 16,
    marginBottom: 10
  },
  editProfile: {
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 112
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 48,
    marginBottom: 24
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: 500
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "black"
  },
  settingItems: {
    gap: 24
  }
});
