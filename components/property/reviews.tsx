import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

function ReviewItem() {
  return (
    <View style={styles.reviewItem}>
      <View style={styles.reviewTop}>
        <View style={styles.reviewTopLeft}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/71.jpg" }}
            style={styles.reviewTopImage}
          />
          <Text style={styles.reviewTopUsername}>Sandeep S.</Text>
        </View>

        <Text style={styles.reviewTopDate}>2 months ago</Text>
      </View>

      <Text style={styles.reviewText}>
        Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply
        dummy text of the printing.
      </Text>

      <View style={styles.reviewStarsAndIcons}>
        <View style={styles.reviewStarsContainer}>
          <View style={styles.reviewStars}>
            <Ionicons name="star" size={16} color={"#EEA651"} />
            <Ionicons name="star" size={16} color={"#EEA651"} />
            <Ionicons name="star" size={16} color={"#EEA651"} />
            <Ionicons name="star" size={16} color={"#EEA651"} />
            <Ionicons name="star" size={16} color={"#EEA651"} />
          </View>

          <Text style={styles.reviewStarsText}>5.0</Text>
        </View>

        <View style={styles.reviewHelpful}>
          <Text style={styles.reviewHelpfulText}>Helpful?</Text>

          <View style={styles.reviewThumbs}>
            <View style={styles.reviewThumbsItem}>
              <Ionicons name="thumbs-up-outline" size={18} />
              <Text>1</Text>
            </View>

            <View style={styles.reviewThumbs}>
              <Ionicons name="thumbs-down-outline" size={18} />
              <Text>2</Text>
            </View>
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
}

export default function Reviews() {
  return (
    <View>
      <Text style={styles.reviewsScreenTitle}>Review</Text>

      <View>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviews: {
    flex: 1
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 20
  },
  reviewsScreenTitle: {
    color: "#2A2B3F",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    paddingHorizontal: 20
  },
  reviewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10
  },
  reviewTopLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  reviewTopImage: {
    width: 38,
    height: 38,
    borderRadius: 100
  },
  reviewTopUsername: {
    fontSize: 11,
    fontWeight: 700
  },
  reviewTopDate: {
    fontSize: 12,
    color: "#5F5F5F"
  },
  reviewText: {
    fontSize: 11,
    color: "#7A7A7A",
    marginBottom: 10
  },
  reviewStarsAndIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  reviewStarsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  reviewStars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  reviewStarsText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#8997A9"
  },
  reviewHelpful: {
    flexDirection: "row",
    alignItems: "center"
  },
  reviewHelpfulText: {
    marginRight: 5,
    fontSize: 12,
    fontWeight: 500
  },
  reviewThumbs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11
  },
  reviewThumbsItem: {
    flexDirection: "row",
    alignItems: "center"
  }
});
