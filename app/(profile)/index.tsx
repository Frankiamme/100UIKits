import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/profile";
import { Image } from "expo-image";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Slider from "@react-native-community/slider";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const trackActionItems = [
  {
    menuName: "Tracks",
    iconName: "musical-note",
  },
  {
    menuName: "Albums",
    iconName: "albums",
  },
  {
    menuName: "Artists",
    iconName: "people",
  },
  {
    menuName: "Playlists",
    iconName: "playlist-music",
  },
  {
    menuName: "Downloads",
    iconName: "download",
  },
];

const albumList = [
  {
    albumName: "More like you",
    albumImage: require("../../assets/images/profile/album1.jpg"),
    trackName: "48 Tracks",
  },
  {
    albumName: "Dio Rex",
    albumImage: require("../../assets/images/profile/album2.jpg"),
    trackName: "Cosmic Journey",
  },
  {
    albumName: "Thundercat",
    albumImage: require("../../assets/images/profile/album3.jpg"),
    trackName: "It is what it is",
  },
  {
    albumName: "More like you",
    albumImage: require("../../assets/images/profile/album1.jpg"),
    trackName: "48 Tracks",
  },
  {
    albumName: "Thundercat",
    albumImage: require("../../assets/images/profile/album3.jpg"),
    trackName: "It is what it is",
  },
];

export default function index() {
  const [sliderValue, setSliderValue] = useState(40);

  const SliderDot = () => {
    return <Octicons name="dot-fill" size={18} color="black" />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.profileButton}>
            <Image
              source={require("@/assets/images/profile/avatar.jpg")}
              placeholder={{ blurhash }}
              style={styles.profileImage}
              contentFit="contain"
            />
            <View style={styles.profileWrapper}>
              <View style={styles.nameInfoWrapper}>
                <Text style={styles.username}>Andrea Parker</Text>
                <Text style={styles.followers}>1214 Followers</Text>
              </View>
              <FontAwesome6
                name="chevron-right"
                size={18}
                color="rgba(60, 60, 67, 0.4)"
              />
            </View>
          </View>
          <View style={styles.trackActions}>
            {trackActionItems.map((trackItem, index) => (
              <View key={index} style={styles.trackActionItem}>
                {trackItem.iconName === "playlist-music" ? (
                  <MaterialCommunityIcons
                    name={trackItem.iconName}
                    size={32}
                    color={Colors.darkgrey}
                  />
                ) : (
                  <Ionicons
                    name={
                      trackItem.iconName as "albums" | "people" | "download"
                    }
                    size={32}
                    color="black"
                  />
                )}
                <View style={styles.trackActionItemText}>
                  <Text style={{ fontFamily: "Inter_500Medium", fontSize: 18 }}>
                    {trackItem.menuName}
                  </Text>
                  <View style={{ paddingRight: "6%" }}>
                    <FontAwesome6
                      name="chevron-right"
                      size={18}
                      color="rgba(60, 60, 67, 0.4)"
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.recentListened}>
            <View
              style={{
                borderColor: "rgba(158, 150, 150, .5)",
                borderBottomWidth: 1,
              }}
            >
              <Text style={styles.recentlyListenedTitle}>
                Recently Listened
              </Text>
            </View>
          </View>

          <View style={{ paddingBottom: 60 }}>
            {albumList.map((albumItem, index) => (
              <View key={index} style={styles.albumListItem}>
                <Image
                  source={albumItem.albumImage}
                  contentFit="contain"
                  style={styles.albumListItemImage}
                  placeholder={{ blurhash }}
                />
                <View style={styles.albumItemWrapper}>
                  <View style={styles.nameInfoWrapper}>
                    <Text style={styles.username}>{albumItem.albumName}</Text>
                    <Text style={styles.followers}>{albumItem.trackName}</Text>
                  </View>
                  <View style={{ paddingRight: "6%" }}>
                    <FontAwesome6
                      name="chevron-right"
                      size={18}
                      color="rgba(60, 60, 67, 0.4)"
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BlurView intensity={90} tint="light" style={styles.playerContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={Colors.black}
          maximumTrackTintColor={"rgba(60, 60, 67, 0.2)"}
          thumbTintColor="transparent"
          value={sliderValue}
          tapToSeek={true}
          onValueChange={(value: number) => setSliderValue(value)}
        />
        <View style={styles.playerWrapper}>
          <Image
            source={require("@/assets/images/profile/track.png")}
            contentFit="contain"
            style={styles.trackImage}
            placeholder={{ blurhash }}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.playerArtist}>MARS</Text>
            <Text style={styles.playerTrack}>Dio Rex</Text>
          </View>
          <FontAwesome6 name="pause" size={24} color="black" />
        </View>
      </BlurView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgOffWhite,
  },
  profileButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: "5%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingVertical: 18,
    gap: 18,
  },
  profileWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 40,
  },
  nameInfoWrapper: {
    gap: 4,
  },
  username: {
    fontFamily: "Inter_600SemiBold,",
    fontSize: 24,
    color: Colors.black,
  },
  followers: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: "rgba(60, 60, 67, 0.7)",
  },
  trackActions: {
    backgroundColor: Colors.white,
  },
  trackActionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingLeft: "5%",
  },
  trackActionItemText: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    paddingVertical: 16,
  },
  recentListened: {
    marginTop: 12,
    backgroundColor: Colors.white,
    paddingLeft: "6%",
  },
  recentlyListenedTitle: {
    fontFamily: "Inter_600SemiBold,",
    fontSize: 28,
    color: Colors.black,
    paddingVertical: 16,
  },
  albumItemWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    paddingVertical: 24,
  },
  albumListItem: {
    backgroundColor: Colors.white,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
  },
  albumListItemImage: {
    width: 80,
    height: 80,
    marginLeft: "6%",
    borderRadius: 10,
  },
  trackImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  playerContainer: {
    width: "100%",
    position: "absolute",
    zIndex: 100,
    bottom: 0,
  },
  playerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: 10,
  },
  playerArtist: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  playerTrack: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: Colors.grey,
  },
  slider: {
    width: "100%",
    position: "absolute",
    top: -20,
    transform: [{ scaleY: 1.25 }],
  },
});
