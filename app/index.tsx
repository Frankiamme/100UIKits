import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import checkoutColors from "@/constants/checkoutColors";
import { Image } from "expo-image";
import { AntDesign, MaterialIcons } from "@expo/vector-icons/";

const bag = require("../assets/images/checkout/bag.png");

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function checkout() {
  const [modalVisible, setModalVisible] = React.useState(true);
  return (
    <SafeAreaProvider style={styles.screenBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} />
        
        <View style={styles.noticeBg}>
          <Text style={styles.noticeBgTextBig}>
            Delivery carefully to your door
          </Text>
          <Text style={styles.noticeBgTextSmall}>It is completely free!</Text>
        </View>
        <View style={styles.productOverview}>
          <Image
            style={styles.image}
            source={bag}
            placeholder={{ blurhash }}
            contentFit="cover"
          />
          <View>
            <Text style={styles.productDescripionTitle}>
              Yellow Bag Edition
            </Text>
            <Text style={styles.productDescripionText}>100% Synthetic.</Text>
            <Text style={styles.productDescripionText}>Leather</Text>
          </View>
        </View>
        <ScrollView style={styles.checkoutOptionsContainer}>
          <View style={styles.checkoutAddress}>
            <Text style={styles.checkoutItemTitle}>Shipping Address</Text>
            <View style={styles.checkoutItem}>
              <Text style={styles.checkoutItemContent}>
                234 Forest Street Lincolnton, NC 28092
              </Text>
              <AntDesign name="check" size={24} color="black" />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.checkoutDelivery}>
            <Text style={styles.checkoutItemTitle}>Delivery Method</Text>
            <View style={styles.checkoutItem}>
              <View style={{ gap: 3 }}>
                <Text style={styles.checkoutItemContent}>2 Deliveries</Text>
                <Text style={styles.checkoutItemContent}>
                  From French & Italy
                </Text>
                <Text style={{ fontFamily: "Inter_400Regular", fontSize: 16 }}>
                  Free Delivery
                </Text>
              </View>
              <AntDesign name="check" size={24} color="black" />
            </View>
          </View>
          <View style={styles.divider}></View>
          <Pressable
            style={styles.checkoutPayment}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.checkoutItemTitle}>Payment</Text>
            <View style={styles.checkoutItem}>
              <Text style={styles.checkoutItemContent}>
                Select a payment method
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </View>
          </Pressable>
          <View style={styles.divider}></View>
          <View style={styles.checkouDiscount}>
            <View style={styles.checkoutItem}>
              <TextInput
                style={styles.checkoutItemDiscount}
                placeholder="Discount promocode..."
                placeholderTextColor={checkoutColors.textLight}
              />
            </View>
          </View>
          <View style={styles.dividerLast}></View>
        </ScrollView>
        <View style={styles.priceContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.priceText, { fontSize: 18 }]}>
              Subtotal: $2227.00
            </Text>
            <Text style={[styles.priceText, { fontSize: 16 }]}>Total</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.priceText, { fontSize: 18 }]}>
              Shipping: Free
            </Text>
            <Text style={styles.priceTotal}>$2227.00</Text>
          </View>
        </View>
        <Pressable
          style={styles.placeOrder}
          onPress={() => console.log("Pressed")}
        >
          <Text style={styles.priceTotal}>Place Order</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screenBg: {
    backgroundColor: checkoutColors.bgOffwhite,
  },
  container: {
    alignItems: "center",
  },
  noticeBg: {
    backgroundColor: checkoutColors.orange,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 2,
  },
  noticeBgTextBig: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  noticeBgTextSmall: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  productOverview: {
    width: "90%",
    marginTop: 28,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  image: {
    width: 118,
    height: 118,
    borderRadius: 10,
  },
  productDescripionTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    paddingBottom: 10,
  },
  productDescripionText: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: checkoutColors.textLight,
    paddingBottom: 2,
    opacity: 0.6,
  },
  checkoutOptionsContainer: {
    backgroundColor: checkoutColors.white,
    width: "100%",
  },
  checkoutItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkoutAddress: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    height: 94,
  },
  checkoutDelivery: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    height: 114,
  },
  checkoutPayment: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    height: 74,
    gap: 2,
  },
  checkoutItemTitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    paddingBottom: 2,
  },
  checkoutItemContent: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: checkoutColors.textLight,
    opacity: 0.6,
  },
  checkouDiscount: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    height: 44,
  },
  checkoutItemDiscount: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: checkoutColors.textLight,
    opacity: 0.6,
    width: "100%",
  },
  divider: {
    width: "95%",
    height: 1,
    backgroundColor: checkoutColors.textLight,
    alignSelf: "flex-end",
    opacity: 0.3,
  },
  dividerLast: {
    width: "100%",
    height: 1,
    backgroundColor: checkoutColors.textLight,
    opacity: 0.3,
  },
  priceContainer: {
    width: "90%",
    marginVertical: 24,
    gap: 4,
  },
  priceText: {
    fontFamily: "Inter_400Regular",
  },
  priceTotal: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 28,
  },
  placeOrder: {
    backgroundColor: checkoutColors.orange,
    width: "90%",
    borderRadius: 40,
    paddingVertical: 20,
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: checkoutColors.black,
    opacity: .7
  }
});
