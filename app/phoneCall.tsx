import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Colors from "@/constants/phoneCallColors";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

export default function phoneCall() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={require("@/assets/images/phoneCall/image.png")}
          contentFit="cover"
          style={styles.imageBlurred}
        />
        <BlurView style={styles.contentContainer} intensity={90} tint="light">
          <View style={styles.contactWrapper}>
            <View style={styles.callWrapper}>
              <Image
                source={require("@/assets/images/phoneCall/image.png")}
                contentFit="cover"
                style={{ width: 96, height: 96 }}
              />
              <Text style={styles.contactName}>Super Wonton</Text>
              <Text style={styles.contactNumber}>+1-202-555-0120</Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <View style={styles.actionOneWrapper}>
              <View style={{ gap: 5, alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 40,
                    borderColor: "rgba(60, 60, 67, 0.6)",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    backgroundColor: Colors.white,
                  }}
                >
                  <MaterialCommunityIcons
                    name="bell"
                    size={24}
                    color="rgba(60, 60, 67, 0.6)"
                  />
                </View>
                <Text
                  style={{
                    color: "rgba(60, 60, 67, 0.6)",
                    fontFamily: "Inter_500Medium",
                    fontSize: 16,
                  }}
                >
                  Remind
                </Text>
              </View>
              <View style={{ gap: 5, alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 40,
                    borderColor: "rgba(60, 60, 67, 0.6)",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    backgroundColor: Colors.white,
                  }}
                >
                  <MaterialCommunityIcons
                    name="email"
                    size={24}
                    color="rgba(60, 60, 67, 0.6)"
                  />
                </View>
                <Text
                  style={{
                    color: "rgba(60, 60, 67, 0.6)",
                    fontFamily: "Inter_500Medium",
                    fontSize: 16,
                  }}
                >
                  Message
                </Text>
              </View>
            </View>
            <View style={styles.actionTwoWrapper}>
              <View style={{ backgroundColor: Colors.red, padding: 20, borderRadius: 40}}>
                <FontAwesome6 name="phone" size={22} color="white" style={{transform: [{rotate: "135deg"}]}} />
              </View>
              <View style={{ backgroundColor: Colors.blue, padding: 20, borderRadius: 40}}>
                <FontAwesome6 name="phone" size={22} color="white" />
              </View>
            </View>
          </View>
        </BlurView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  imageBlurred: { width: "100%", height: "80%", opacity: 0.2 },
  contentContainer: {
    position: "absolute",
    top: 0,
    flex: 1,
    zIndex: 10,
    height: "100%",
    width: "100%",
  },
  contactWrapper: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  callWrapper: { alignItems: "center", gap: 6 },
  contactName: {
    fontFamily: "Inter_600SemiBold",
    color: Colors.black,
    fontSize: 28,
  },
  contactNumber: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: "rgba(60, 60, 67, 0.6)",
  },

  actionButtons: {
    alignItems: "center",
    gap: "18%",
  },
  actionOneWrapper: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  actionTwoWrapper: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});
