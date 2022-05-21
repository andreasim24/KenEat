import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants
} from "../components/home/RestaurantItems";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "JypbyxAyHCOTfZwoqzElVERgY2pZR3Bko6T_htUW5oyomUTVd6WIm8t4DKpZT9dX83bIhD0wSSsXUVq4JsNl9-7YUVuSIKY6ReIFKtvazUjkcWPkl0xqAK1vnpxBYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantDataFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    };

    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();

    return setRestaurantData(json.businesses);
  };

  useEffect(() => {
    getRestaurantDataFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 30 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
