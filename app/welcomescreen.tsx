import { View, Text, StyleSheet, SafeAreaView, Pressable, Alert } from "react-native";
import React from "react";
import Colors from "@/constants/gameColors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{ width: "90%" }}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("@/assets/images/welcomescreen/avatar-1.png")}
            style={{ width: 114, height: 114, borderRadius: 60 }}
            contentFit="contain"
            placeholder={{ blurhash }}
          />
          <Image
            source={require("@/assets/images/welcomescreen/avatar-3.png")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 60,
              position: "absolute",
              left: "55%",
              top: "10%",
            }}
            contentFit="contain"
            placeholder={{ blurhash }}
          />
          <Image
            source={require("@/assets/images/welcomescreen/avatar-2.png")}
            style={{
              width: 66,
              height: 66,
              borderRadius: 60,
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: [{ translateX: -33 }],
            }}
            contentFit="contain"
            placeholder={{ blurhash }}
          />
          <Image
            source={require("@/assets/images/welcomescreen/avatar-4.png")}
            style={{
              width: 58,
              height: 58,
              borderRadius: 60,
              position: "absolute",
              right: 0,
              top: "50%",
              transform: [{ translateY: -26.5 }],
            }}
            contentFit="contain"
            placeholder={{ blurhash }}
          />
        </View>
        <View style={{ gap: 18, marginBottom: 20 }}>
          <View style={styles.headingContainer}>
            <Image
              source={require("@/assets/images/welcomescreen/holabg.svg")}
              style={styles.holabg}
              contentFit="contain"
            />
            <Text style={styles.heading}>¡Hola! Glad to see you!</Text>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeader}>We are a fantastic group</Text>
            <Text style={styles.subHeader}>of people who learn languages!</Text>
          </View>
        </View>
        <Pressable
          style={styles.arrowContainer}
          onPress={() => Alert.alert("Holla")}
        >
          <Entypo
            name="chevron-thin-right"
            size={28}
            color={Colors.textBlack}
          />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBlack,
    alignItems: "center",
  },
  avatarContainer: {
    marginVertical: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 200,
  },
  headingContainer: {
    alignSelf: "center",
    justifyContent: "center",
  },
  holabg: {
    width: 104,
    height: 56,
    position: "absolute",
    zIndex: -1,
    left: 0,
  },
  heading: {
    color: Colors.white,
    fontSize: 32,
    fontFamily: "Inter_500Medium",
    paddingLeft: 18,
  },
  subHeaderContainer: {
    alignSelf: "center",
  },
  subHeader: {
    fontFamily: "Inter_400Regular",
    color: Colors.white,
    fontSize: 18,
    textAlign: "center",
  },
  arrowContainer: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 50,
  },
});
