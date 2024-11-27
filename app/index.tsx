import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Href, Link } from "expo-router";
import Colors from "@/constants/checkoutColors";

type screenType = {
  id: number;
  path: string;
  title: string;
}

const screens: screenType[] = [
  {
    id: 1,
    path: "/signup",
    title: "Signup",
  },
  {
    id: 2,
    path: "/checkout",
    title: "Checkout",
  },
  {
    id: 3,
    path: "/(discover)",
    title: "Discover",
  },
  {
    id: 4,
    path: "/game",
    title: "Game",
  },
  {
    id: 5,
    path: "/welcomescreen",
    title: "Welcome Screen",
  },
];


export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {screens.map((screen, index) => (
            <Link href={screen.path as Href} style={styles.screenItem} key={index}>
              <View style={{ flexDirection: "row", gap: 40, width: "100%" }}>
                <Text style={styles.textItem}>{screen.id}</Text>
                  <Text style={styles.textItem}>{screen.title}</Text>
              </View>
            </Link>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  screenItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    flexDirection: "row",
    gap: 40,
    width: "100%",
  },
  textItem: {
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    color: Colors.textDark
  },
});
