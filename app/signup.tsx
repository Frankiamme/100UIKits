import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import SignupColors from "@/constants/SignupColors";
import { Image } from "expo-image";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const logo = require("../assets/images/sign-up/paw.png");
const facebook = require("../assets/images/sign-up/FacebookLogo.png");

type passwordType = {
  password: string;
  onChangePassword: React.Dispatch<React.SetStateAction<string>>;
};

type formType = {
  username: string;
  email: string;
  password: string;
};

const ViewPassword = ({ password, onChangePassword }: passwordType) => {
  const [passSecure, setPassSecure] = React.useState(true);

  return (
    <View style={styles.passwordInput}>
      <TextInput
        onChangeText={onChangePassword}
        placeholder="***********"
        secureTextEntry={passSecure}
        style={styles.inputSecure}
        placeholderTextColor={SignupColors.form}
      />
      <Pressable onPress={() => setPassSecure(!passSecure)}>
        {passSecure ? (
          <Entypo name="eye" size={24} color="black" />
        ) : (
          <Entypo name="eye-with-line" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
};

export default function signup() {
  const [username, onChangeUsername] = useState("Username");
  const [email, onChangeEmail] = useState("Email");
  const [password, onChangePassword] = useState("");

  const validateForm = ({ username, email, password }: formType) => {
    return Alert.alert(
      "Form Login",
      `Username: ${username},Email: ${email},
      Password: ${password}`
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          bottomOffset={10}
          contentContainerStyle={{
            alignItems: "center",
            width: "96%",
            gap: 40,
          }}
        >
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
              <Text style={styles.description}>
                Welcome to our adoption app!
              </Text>
              <Text style={styles.description}>
                I hope you will find what you are looking for!
              </Text>
            </View>
          </View>
          <View style={styles.form}>
            <TextInput
              onChangeText={onChangeUsername}
              placeholder={username}
              style={styles.input}
              placeholderTextColor={SignupColors.form}
            />
            <TextInput
              onChangeText={onChangeEmail}
              placeholder={email}
              style={styles.input}
              placeholderTextColor={SignupColors.form}
            />
            <ViewPassword
              password={password}
              onChangePassword={onChangePassword}
            />
            <Pressable
              style={styles.signInButton}
              onPress={() => validateForm({ username, email, password })}
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
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <View style={styles.loginContainer}>
        <Pressable
          style={styles.loginButton}
          onPress={() => Alert.alert("Login", "You have pressed login")}
        >
          <Text style={styles.loginText}>Have an account?</Text>
          <Text style={styles.loginTextOrange}>Log In</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: SignupColors.white,
    flex: 1,
    alignItems: "center",
    gap: 40,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "#0553",
    marginTop: 80,
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
  inputSecure: {
    height: 54,
    fontSize: 20,
    color: SignupColors.facebook,
    fontFamily: "Inter_400Regular",
    width: "90%",
  },
  passwordInput: {
    borderColor: SignupColors.form,
    borderWidth: 1,
    height: 54,
    borderRadius: 40,
    paddingHorizontal: 28,
    fontSize: 20,
    color: SignupColors.facebook,
    fontFamily: "Inter_400Regular",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
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
  loginContainer: {
    height: 83,
    backgroundColor: SignupColors.registerbg,
    alignItems: "center",
  },
  loginButton: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 16,
  },
  loginText: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    color: SignupColors.form,
  },
  loginTextOrange: {
    color: SignupColors.button,
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
});
