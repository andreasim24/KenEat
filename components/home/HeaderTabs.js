import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  const HeaderButton = props => (
    <TouchableOpacity
      style={styles(props).headerButton}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={styles(props).headerText}>{props.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles(props).container}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      ></HeaderButton>
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      ></HeaderButton>
    </View>
  );
}

const styles = props =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 20
    },
    headerButton: {
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 36,
      borderRadius: 30
    },
    headerText: {
      color: props.activeTab == props.text ? "white" : "black",
      fontSize: 15,
      fontWeight: "900"
    }
  });
