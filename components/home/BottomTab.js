import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = props => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={styles.icon} />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: 3,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between"
  }
});
