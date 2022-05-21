import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>{totalUSD}</Text>
          </View>
          <View style={styles.confirmChekoutContainer}>
            <TouchableOpacity
              style={styles.confirmCheckoutBtn}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.checkoutText}>Checkout</Text>
              <Text style={styles.totalText}>{total ? totalUSD : ""}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.viewCartContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <TouchableOpacity
              style={styles.viewCartBtn}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)"
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10
  },
  confirmChekoutContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  confirmCheckoutBtn: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative"
  },
  checkoutText: {
    color: "white",
    fontSize: 20
  },
  totalText: {
    position: "absolute",
    right: 20,
    color: "white",
    fontSize: 15,
    top: 17
  },
  viewCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 50,
    backgroundColor: "green"
  },
  viewCartBtn: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 15,
    width: 200,
    position: "relative"
  },
  loadingContainer: {
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
});
