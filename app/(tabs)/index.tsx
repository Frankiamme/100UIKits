import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import SignupColors from "@/constants/SignupColors";
import { Image } from "expo-image";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const logo = require("../../assets/images/sign-up/paw.svg");
const facebook = require("../../assets/images/sign-up/FacebookLogo.png");

export default function signup() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} />
        <Image
          style={styles.image}
          source={logo}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={300}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Meow!</Text>
          <View>
            <Text style={styles.description}>Welcome to our adoption app!</Text>
            <Text style={styles.description}>
              I hope you will find what you are looking for!
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Username"
            style={styles.input}
            placeholderTextColor={SignupColors.form}
          />
          <TextInput
            onChangeText={onChangeText}
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={SignupColors.form}
          />
          <TextInput
            onChangeText={onChangeText}
            placeholder="***********"
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={SignupColors.form}
          />
          <Pressable
            style={styles.signInButton}
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
          <Pressable
            style={styles.facebookRegister}
            onPress={() => console.log("Facebook")}
          >
            <Image
              style={styles.FBimage}
              source={facebook}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={300}
            />
            <Text style={styles.description}>Sign up with Facebook</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SignupColors.white,
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    gap: 40,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "#0553",
  },
  headingContainer: {
    width: "85%",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 36,
    color: SignupColors.text,
    fontFamily: "Inter_500Medium",
  },
  description: {
    fontSize: 18,
    color: SignupColors.text,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  form: {
    width: "90%",
    gap: 18,
  },
  input: {
    borderColor: SignupColors.form,
    borderWidth: 1,
    height: 54,
    borderRadius: 40,
    paddingLeft: 28,
    fontSize: 20,
    color: SignupColors.facebook,
    fontFamily: "Inter_400Regular",
  },
  signInButton: {
    backgroundColor: SignupColors.button,
    height: 54,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButtonText: {
    fontSize: 24,
    color: SignupColors.white,
    fontFamily: "Inter_500Medium  ",
  },
  facebookRegister: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  FBimage: {
    width: 18,
    height: 18,
    backgroundColor: "#0553",
  },
  FBdescription: {
    fontSize: 20,
    color: SignupColors.text,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
  },
});
