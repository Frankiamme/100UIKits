import { View, Text, StyleSheet, Pressable, ScrollView, Share } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import gameColors from "@/constants/gameColors";
import {
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";
import * as Speech from "expo-speech";

 const questions = [
   {
     id: 1,
     option: "Do",
   },
   {
     id: 2,
     option: "you",
   },
   {
     id: 3,
     option: "wants",
   },
   {
     id: 4,
     option: "to go",
   },
   {
     id: 5,
     option: "to the",
   },
   {
     id: 6,
     option: "movies?",
   },
 ];

 const answers = [
   {
     id: 1,
     option: "want",
   },
   {
     id: 2,
     option: "Did",
   },
   {
     id: 3,
     option: "visit",
   },
 ];

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);
  
  return(
  <Pressable onPress={() => setBookmarked(!bookmarked)} style={{ padding: 10 }}>
      {bookmarked ? (
        <Ionicons name="bookmark" size={28} color="white" />
      ) : (
        <Ionicons name="bookmark-outline" size={28} color="white" />
      )}
  </Pressable>)
 };

export default function Index() {
  const [sliderValue, setSliderValue] = useState(30);
  const [wordOfTheDay, setWordOfTheDay] = useState("¿Quieres ir al cine?");
  const speak = () => {
    Speech.speak(wordOfTheDay);
  };

  const shareText = async (message: string) => {
    try {
      await Share.share({
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "#1b1b1e" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
          <View style={{ marginBottom: 60 }}>
            <View style={styles.grammarContainer}>
              <Pressable
                onPress={() => console.log("Grammar pressed")}
                style={styles.grammarButton}
              >
                <Text style={styles.grammarText}>Grammar</Text>
              </Pressable>
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </View>
            <View style={styles.sliderContainer}>
              <Slider
                style={{ transform: [{ scaleY: 1.5 }], borderRadius: 10 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={gameColors.sliderGrey}
                maximumTrackTintColor={gameColors.grey}
                thumbTintColor="transparent"
                value={sliderValue}
                onValueChange={(value: number) => setSliderValue(value)}
              />
            </View>
            <Text style={styles.headingText}>Translate Sentence</Text>
            <View style={styles.translatedContainer}>
              <Text style={styles.translatedText}>{wordOfTheDay}</Text>
              <Pressable onPress={speak} style={{ padding: 10 }}>
                <Ionicons
                  name="volume-medium"
                  size={24}
                  color={gameColors.white}
                />
              </Pressable>
            </View>
            <View style={styles.questionsContainer}>
              {questions.map((question, index) => (
                <Pressable
                  onPress={() => Speech.speak(question.option)}
                  style={
                    question.option === "wants"
                      ? styles.questionWrong
                      : styles.questionButton
                  }
                  key={index}
                >
                  <Text style={styles.questionText}>{question.option}</Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.answersContainer}>
              {answers.map((answer, index) => (
                <Pressable
                  onPress={() => Speech.speak(answer.option)}
                  style={
                    answer.option === "want"
                      ? styles.answerRight
                      : styles.questionButton
                  }
                  key={index}
                >
                  <Text style={styles.questionText}>{answer.option}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={{ gap: 30, marginBottom: 20 }}>
          <View style={{ gap: 10, paddingTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="white"
                style={{ paddingRight: 5 }}
              />
              <Text style={styles.infoText}>{`<<S>> in the end`}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTextTwo}>
                It is those feelings that drive our love of astronomy.
              </Text>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Pressable
                  onPress={() => shareText(wordOfTheDay)}
                  style={{ padding: 10 }}
                >
                  <EvilIcons name="share-apple" size={40} color="white" />
                </Pressable>
                <Bookmark />
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => console.log("next")}
            style={styles.nextButton}
          >
            <Text style={styles.nextText}>Next</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  grammarContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grammarButton: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  grammarText: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: gameColors.white,
  },
  sliderContainer: {
    width: "100%",
    marginTop: 8,
  },
  headingText: {
    paddingVertical: 10,
    fontSize: 28,
    fontFamily: "Inter_500Medium",
    color: gameColors.white,
    marginTop: 10,
  },
  translatedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 30,
    paddingRight: "3%",
    borderBottomColor: "rgba(128, 128, 128, 0.5)",
    borderBottomWidth: 1,
  },
  translatedText: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    color: gameColors.white,
  },
  questionsContainer: {
    marginTop: 50,
    rowGap: 20,
    columnGap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  questionButton: {
    backgroundColor: gameColors.white,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 18,
  },
  questionWrong: {
    backgroundColor: gameColors.pink,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 18,
    shadowColor: gameColors.pink,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.7,
    shadowRadius: 0.8,
    elevation: 10,
  },
  questionText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    color: gameColors.textBlack,
  },
  answersContainer: {
    marginTop: 50,
    paddingTop: 30,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    columnGap: 12,
    borderTopColor: "rgba(128, 128, 128, 0.5)",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  answerRight: {
    backgroundColor: gameColors.limeGreen,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 18,
    shadowColor: gameColors.limeGreen,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.7,
    shadowRadius: 0.8,
    elevation: 10,
  },
  infoText: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: gameColors.white,
  },
  infoTextTwo: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: gameColors.white,
    maxWidth: 220,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextButton: {
    backgroundColor: gameColors.pink,
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: "center",
  },
  nextText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    color: gameColors.textBlack,
  },
});
