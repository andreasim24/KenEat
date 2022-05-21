import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9
  }
];

const RestaurantImage = props => {
  return (
    <>
      <Image
        source={{
          uri: props.image
        }}
        style={styles.restaurantImage}
      />
      <TouchableOpacity style={styles.heartButton}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = props => (
  <View style={styles.restaurantInfoContainer}>
    <View>
      <Text style={styles.restaurantName}>{props.name}</Text>
      <Text style={styles.restaurantRange}>30-45 • min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{props.rating}</Text>
      <Ionicons name="star" style={{ color: "black", marginLeft: 3 }} />
    </View>
  </View>
);

export default function RestaurantItem({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories
            })
          }
        >
          <View style={styles.container}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  heartButton: {
    position: "absolute",
    top: 20,
    right: 20
  },
  restaurantImage: {
    width: "100%",
    height: 180
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: "bold"
  },
  restaurantRange: {
    fontSize: 13,
    color: "gray"
  },
  restaurantInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  rating: {
    backgroundColor: "#eee",
    height: 30,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15
  },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white"
  }
});
