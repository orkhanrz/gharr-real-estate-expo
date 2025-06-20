import Button from "@/components/UI/button";
import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/splash-screen-img.png")}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("@/assets/images/gharr-logo.png")}
          />
        </View>

        <Button
          type="contained"
          style={{ height: 50 }}
          onPress={() => router.replace("/boarding/1")}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  imageContainer: {
    width: 600,
    height: "80%",
    transform: [
      { rotate: "15deg" },
      { translateY: "-20%" },
      { translateX: "-15%" }
    ]
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  },
  bottomContainer: {
    marginHorizontal: "auto",
    width: "80%",
    transform: [{ translateY: -72 }]
  },
  logoContainer: {
    height: 72,
    width: "100%",
    marginBottom: 32
  }
});
