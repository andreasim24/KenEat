import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up"
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks"
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items"
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods"
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals"
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea"
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts"
  }
];

export default function Categories() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20
  },
  container: {
    alignItems: "center",
    marginRight: 30
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain"
  },
  text: {
    fontSize: 13,
    fontWeight: "900"
  }
});
