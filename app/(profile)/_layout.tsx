import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

import Colors from "@/constants/checkoutColors";
import { useColorScheme } from "@/components/useColorScheme";
import { Image } from "expo-image";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -8 }} {...props} />;
}

function TabBarIconImage(props: {
  source: string;
  color: string;
}) {
  return (
    <Image
      source={props.source}
      style={{
        height: 28,
        width: 28,
        tintColor: props.color,
        marginBottom: -4,
      }}
      contentFit="contain"
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.textDark,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        // tabBarBackground: () => (
        //   <View style={{backgroundColor: "red", width: "100%"}}></View>
        // )
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          //   href: null,
          title: "Home",
          tabBarIcon: ({ color }) => {
            return (
              <TabBarIconImage
                source={require("@/assets/images/profile/Home.svg")}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="Browse"
        options={{
          //   href: null,
          title: "Browse",
          tabBarIcon: ({ color }) => {
            return (
              <TabBarIconImage
                source={require("@/assets/images/profile/Browse.svg")}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="Library"
        options={{
          //   href: null,
          title: "Library",
          tabBarIcon: ({ color }) => {
            return (
              <TabBarIconImage
                source={require("@/assets/images/profile/Library.svg")}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            marginTop: 2,
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          //   href: null,
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return (
              <TabBarIconImage
                source={require("@/assets/images/profile/Profile.svg")}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Inter_500Medium",
            marginTop: 2,
          },
        }}
      />
    </Tabs>
  );
}
