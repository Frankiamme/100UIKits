import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Href, Link } from "expo-router";
import Colors from "@/constants/checkoutColors";

type screenType = {
  path: string;
  title: string;
}

const screens: screenType[] = [
  {
    path: "/signup",
    title: "Signup",
  },
  {
    path: "/checkout",
    title: "Checkout",
  },
  {
    path: "/(discover)",
    title: "Discover",
  },
  {
    path: "/game",
    title: "Game",
  },
  {
    path: "/welcomescreen",
    title: "Welcome Screen",
  },
  {
    path: "/(profile)",
    title: "Profile",
  },
  {
    path: "/settings",
    title: "Settings",
  },
  {
    path: "/phoneCall",
    title: "Phone Call",
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
                <Text style={styles.textItem}>{index + 1}</Text>
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
