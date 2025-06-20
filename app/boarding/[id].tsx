import NavigationBar from "@/components/UI/navigation-bar";
import { globalStyles } from "@/constants/styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    height: 288,
    width: "100%",
    marginBottom: 56,
    objectFit: "contain"
  },
  bottomContainer: {
    paddingHorizontal: 20,
    flex: 1
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 12
  },
  specialTitleText: {
    color: globalStyles.primaryColor
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: globalStyles.grayTextColor
  },
  navigationBar: {
    marginTop: "auto",
    marginBottom: 40
  },
  skipBtn: {
    marginLeft: "auto"
  },
  skipText: {
    color: globalStyles.primaryColor,
    fontSize: 14
  }
});

const boardingPages = [
  {
    id: 1,
    title: (
      <Text style={styles.title}>
        Welcome to <Text style={styles.specialTitleText}>YourApp</Text>
      </Text>
    ),
    text: (
      <Text style={styles.text}>
        Discover a smarter way to manage your daily tasks and stay organized
        with ease.
      </Text>
    ),
    image: require("@/assets/images/boarding-1.png")
  },
  {
    id: 2,
    title: (
      <Text style={styles.title}>
        Stay <Text style={styles.specialTitleText}>Connected</Text> & In Sync
      </Text>
    ),
    text: (
      <Text style={styles.text}>
        Real-time updates and cloud sync ensure your data is always safe and
        accessible.
      </Text>
    ),
    image: require("@/assets/images/boarding-2.png")
  },
  {
    id: 3,
    title: (
      <Text style={styles.title}>
        Get <Text style={styles.specialTitleText}>Started</Text> Today!
      </Text>
    ),
    text: (
      <Text style={styles.text}>
        Create your free account and take the first step toward a more
        productive life.
      </Text>
    ),
    image: require("@/assets/images/boarding-3.png")
  }
];

export default function Boarding() {
  const router = useRouter();
  const id = +useLocalSearchParams().id;

  function handleNextPage() {
    if (boardingPages.length == id) {
      router.replace("/auth/signin");
      return;
    }

    router.push(`/boarding/${id + 1}`);
  }

  function skipHandler() {
    router.replace(`/auth/signin`);
  }

  const boardingPage = boardingPages.find((page) => page.id == id);

  return (
    <SafeAreaView style={styles.screen}>
      <Image style={styles.image} source={boardingPage?.image} />

      <View style={styles.bottomContainer}>
        {boardingPage?.title}

        {boardingPage?.text}

        <NavigationBar
          containerStyles={styles.navigationBar}
          currentPage={id}
          length={boardingPages.length}
          onNextPage={handleNextPage}
        />

        <Pressable style={styles.skipBtn} onPress={skipHandler}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
