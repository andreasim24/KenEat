import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../apis/firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
  }, []);

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"
      }
    ]
  });

  const { items, restaurantName } = useSelector(
    state => state.cartReducer.selectedItems
  );

  const total = items
    .map(item => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD"
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* green checkmark */}
      <View style={styles.container}>
        <LottieView
          style={{
            height: 200,
            marginBottom: 20
          }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />

        <Text style={styles.text}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>

        <FlatList
          data={lastOrder.items}
          renderItem={({ item }) => (
            <MenuItems food={item} hideCheckbox={true} marginLeft={10} />
          )}
          keyExtractor={(item, index) => `key-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: "#eee",
            marginTop: 20
          }}
        />

        <LottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.text}>Transaction Success</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1
  },
  container: {
    alignSelf: "center",
    alignItems: "center",
    flex: 1,
    padding: 40
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
