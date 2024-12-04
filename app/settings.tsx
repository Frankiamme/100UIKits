import { View, Text, StyleSheet, Pressable, SectionList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/settingsColors";
import { Image } from "expo-image";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

type icons =
  | "credit-card-outline"
  | "cash"
  | "card"
  | "clock-time-nine-outline"
  | "bell-badge-outline"
  | "hand-back-left-outline"
  | "face-recognition"
  | "translate"
  | "bank-outline"
  | "comment-question-outline";

type menuType = {
  title: string;
  data: {
    iconName: icons;
    title: string;
  }[];
};

const menuItems: menuType[] = [
  {
    title: "Payment",
    data: [
      {
        iconName: "credit-card-outline",
        title: "Cards & Amounts",
      },
      {
        iconName: "cash",
        title: "Cryptocurrencies",
      },
      {
        iconName: "clock-time-nine-outline",
        title: "History",
      },
    ],
  },
  {
    title: "Personal",
    data: [
      {
        iconName: "bell-badge-outline",
        title: "Notification",
      },
      {
        iconName: "hand-back-left-outline",
        title: "Privacy and Security",
      },
      {
        iconName: "face-recognition",
        title: "Appearance",
      },
      {
        iconName: "translate",
        title: "Language",
      },
    ],
  },
  {
    title: "Miscelaneous",
    data: [
      {
        iconName: "bank-outline",
        title: "Banks",
      },
      {
        iconName: "comment-question-outline",
        title: "Ask a Question",
      },
    ],
  },
];

export default function settings() {
  const name = "James Collins";
  const email = "james.collins@crypto.co";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => console.log("Done")}
          style={styles.doneContainer}
        >
          <Text style={styles.doneText}>Done</Text>
        </Pressable>
        <View style={styles.userInfoContainer}>
          <Image
            source={require("@/assets/images/settings/user.png")}
            style={{ width: 64, height: 64 }}
            contentFit="contain"
          />
          <View style={styles.userInfo}>
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
            <View style={styles.statusContainer}>
              <FontAwesome name="user-circle-o" size={22} color="white" />
              <Text style={styles.statusText}>Verified</Text>
            </View>
          </View>
        </View>

        <SectionList
          sections={menuItems}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: Colors.white,
                flexDirection: "row",
                gap: 20,
                paddingLeft: "5%",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name={item.iconName as icons}
                size={22}
                color="black"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                  borderBottomWidth: 1,
                  borderColor: Colors.lightGray,
                  paddingVertical: 16,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "Inter_500Medium", fontSize: 18 }}>
                  {item.title}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="black"
                  style={{ paddingRight: "5%" }}
                />  
              </View>
            </View>
          )}
          SectionSeparatorComponent={() => (
            <View style={{ height: 16, backgroundColor: "transparent", }} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  doneContainer: {
    alignSelf: "flex-end",
    paddingRight: "5%",
    marginTop: 16,
  },
  doneText: { fontFamily: "Inter_600SemiBold,", fontSize: 18 },
  userInfoContainer: {
    width: "90%",
    alignSelf: "center",
    gap: 20,
    marginBottom: 20,
  },
  userInfo: {
    gap: 16,
  },
  userName: {
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    color: Colors.darkGray,
  },
  userEmail: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: Colors.lightGray,
  },
  statusContainer: {
    flexDirection: "row",
    backgroundColor: Colors.darkGray,
    borderRadius: 40,
    paddingVertical: 20,
    gap: 18,
    paddingHorizontal: "6%",
    alignItems: "center",
  },
  statusText: {
    fontFamily: "Inter_500Medium",
    fontSize: 24,
    color: Colors.white,
  },
  userInfoText: {
    gap: 2,
  },
});
