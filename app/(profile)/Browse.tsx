import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Browse() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Text>Browse</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
