import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItems({ restaurantName, food, hideCheckbox }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue
      }
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <View>
      <View style={styles.menuItemStyle}>
        {/* Checkbox */}
        {hideCheckbox ? (
          <></>
        ) : (
          <BouncyCheckbox
            iconStyle={styles.checkbox}
            fillColor="green"
            isChecked={isFoodInCart(food, cartItems)}
            onPress={checkboxValue => selectItem(food, checkboxValue)}
          />
        )}

        {/* Food Info */}
        <View style={styles.foodInfo}>
          <Text style={styles.titleStyle}>{food.title}</Text>
          <Text>{food.description}</Text>
          <Text>{food.price}</Text>
        </View>

        {/* Food Image */}
        <View>
          <Image source={{ uri: food.image }} style={styles.foodImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600"
  },

  checkbox: {
    borderColor: "lightgray",
    borderRadius: 0
  },

  foodInfo: {
    width: 180,
    justifyContent: "space-evenly"
  },

  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 10
  }
});
