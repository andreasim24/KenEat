import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
        placeholder="Search"
        styles={styles.googlePlace}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.text}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  googlePlace: {
    textInput: {
      backgroundColor: "#eee",
      borderRadius: 20,
      fontWeight: "700",
      marginTop: 7
    },
    textInputContainer: {
      backgroundColor: "#eee",
      borderRadius: 50,
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10
    }
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30
  }
});
