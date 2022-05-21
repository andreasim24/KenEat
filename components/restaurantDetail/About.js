import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View style={{ backgroundColor: "#eee" }}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantDescription: {
    marginTop: 5,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5
  },

  restaurantName: {
    fontSize: 29,
    fontWeight: "600",
    marginHorizontal: 15
  },

  image: {
    width: "100%",
    height: 180
  }
});
