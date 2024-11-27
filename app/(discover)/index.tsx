import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import Colors from "@/constants/checkoutColors";
import Destinations from "@/constants/placesdata";
import FoodsDestinations from "@/constants/foodsdata";

type foodDestinationProps = {
  id: number;
  blog_title: string;
  fullname: string;
  avatar: string;
  read_count: number;
  background: string;
};

type destinationTypes = {
  id: number;
  place: string;
  rating: number;
  image: any;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function index() {
  const menuItems = [
    {
      title: "Flights",
      iconURL: require("../../assets/images/discover/flight.png"),
    },
    {
      title: "Hotels",
      iconURL: require("../../assets/images/discover/hotels.png"),
    },
    {
      title: "Food",
      iconURL: require("../../assets/images/discover/food.png"),
    },
    {
      title: "More",
      iconURL: require("../../assets/images/discover/more.png"),
    },
  ];

  const PlacesContainer = ({ place, rating, image }: destinationTypes) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "flex-start",
        }}
      >
        <Image
          source={{ uri: `${image}` }}
          contentFit="cover"
          style={{ width: 360, height: 220, borderRadius: 10 }}
          placeholder={{ blurhash }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ gap: 4 }}>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 20 }}>
              {place}
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                source={require("../../assets/images/discover/Rating.svg")}
                style={{ height: 18, width: 100 }}
                contentFit="contain"
                placeholder={{ blurhash }}
              />
              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  fontSize: 18,
                  opacity: 0.6,
                }}
              >
                {rating} Reviews
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(116, 116, 128, 0.08)",
              padding: 10,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="heart" size={24} color={Colors.heart} />
          </View>
        </View>
      </View>
    );
  };

  const FoodsContainer = ({
    blog_title,
    fullname,
    avatar,
    read_count,
    background,
  }: foodDestinationProps) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          alignSelf: "flex-start",
          maxWidth: 300,
        }}
      >
        <Image
          source={{ uri: `${background}` }}
          contentFit="cover"
          style={{
            width: 300,
            height: 220,
            borderRadius: 10,
          }}
          placeholder={{ blurhash }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View style={{ gap: 10 }}>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 20 }}>
              {blog_title}
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <View
                style={{
                  backgroundColor: "rgba(116, 116, 128, 0.08)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 40,
                  padding: 5,
                }}
              >
                <Image
                  source={{ uri: `${avatar}` }}
                  style={{
                    height: 36,
                    width: 36,
                  }}
                  contentFit="contain"
                  placeholder={{ blurhash }}
                />
              </View>
              <View style={{ gap: 2 }}>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 16,
                  }}
                >
                  {fullname}
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter_400Regular",
                    fontSize: 16,
                  }}
                >
                  {read_count} People
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Discover</Text>
          <FontAwesome6 name="circle-user" size={32} color="black" />
        </View>
        <View style={styles.menuItems}>
          {menuItems.map((menuItem, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", gap: 32, alignItems: "center" }}
            >
              <Pressable
                onPress={() => console.log("Pressed")}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={styles.menuIcon}
                  source={menuItem.iconURL}
                  contentFit="contain"
                  transition={300}
                />
                <Text style={styles.menuTitle}>{menuItem.title}</Text>
              </Pressable>
              {index !== menuItems.length - 1 ? (
                <View
                  style={{
                    width: 1,
                    height: 59,
                    backgroundColor: Colors.textDark,
                    opacity: 0.3,
                  }}
                ></View>
              ) : (
                <></>
              )}
            </View>
          ))}
        </View>

        <ScrollView>
          {/* Places and Landmarks */}
          <View style={styles.placeLandmarkContainer}>
            <Text style={styles.placesLandmarksTitle}>Place & Landmarks</Text>
            <Pressable>
              <Text style={styles.placesLandmarkSeaAll}>See All</Text>
            </Pressable>
          </View>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={Destinations}
              renderItem={({ item }) => PlacesContainer(item)}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 16 }}></View>}
              contentContainerStyle={{ paddingHorizontal: "5%" }}
            />
          </View>

          {/* Places and Landmarks */}
          <View style={styles.placeLandmarkContainer}>
            <Text style={styles.placesLandmarksTitle}>Food & Restaurant</Text>
            <Pressable>
              <Text style={styles.placesLandmarkSeaAll}>See All</Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              data={FoodsDestinations}
              renderItem={({ item }) => FoodsContainer(item)}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 16 }}></View>}
              contentContainerStyle={{ paddingHorizontal: "5%" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 42,
  },
  menuItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
    alignItems: "center",
  },
  menuIcon: {
    height: 28,
    width: 28,
    marginVertical: 16,
  },
  menuTitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  placeLandmarkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    // marginTop: 30,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    paddingVertical: 14,
  },
  placesLandmarksTitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 28,
  },
  placesLandmarkSeaAll: {
    fontFamily: "Inter_400Regular",
    fontSize: 20,
  },
});
