import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import Text from "../../components/Text";
import Button from "../../components/button";
import { appStyle } from "../../utils/appStyle";
import Mechanics from "./components/mechanics";
import Services from "./components/services";
import Reviews from "../../components/reviews";

const AutoMap = () => {
  const navigation = useNavigation();

  const navigateToChat = () => {
    navigation.navigate("ChatScreen");
  };

  const services = [...Array(3)];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", height: heightRes(13) }}>
          <Image
            source={require("../../../assets/autoImage.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ flex: 1, padding: heightRes(2) }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../../assets/autoImage.png")}
              style={{ width: "100%", height: "100%", borderRadius: 100 }}
            />
          </View>
          {/* about */}
          <View style={styles.section}>
            <Text value="About Us" bold color={colors.white} size={2.3} />
            <Text
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus faucibus laoreet leo. Viverra cursus in aliquam scelerisque sodales ... more"
              color={colors.textColor}
            />
          </View>
          {/* brands */}
          <View style={styles.section}>
            <Text value="Vehicle Brands" bold color={colors.white} size={2.3} />
            <View>
              <Text
                value="Car:"
                color={colors.textColor}
                size={1.8}
                style={styles.brandText}
              />
              <Text
                value="Truck:"
                color={colors.textColor}
                size={1.8}
                style={styles.brandText}
              />
              <Text
                value="Motorcycle:"
                color={colors.textColor}
                size={1.8}
                style={styles.brandText}
              />
            </View>
          </View>
          {/* services */}
          <View style={styles.section}>
            <Text value="Our services" bold color={colors.white} size={2.3} />
            {services.map((t) => (
              <Services key={t} />
            ))}
          </View>
          {/* mechanics */}
          <View style={styles.section}>
            <Text value="Mechanics" bold color={colors.white} size={2.3} />
            {services.map((t) => (
              <Mechanics key={t} />
            ))}
          </View>
          {/* reviews */}
          <View style={styles.section}>
            <View
              style={[
                appStyle.flexRowSpaceCenter,
                { marginBottom: heightRes(1) }
              ]}
            >
              <Text value="Reviews" bold color={colors.white} size={2.3} />
              <TouchableOpacity
                style={styles.vehicleContainer}
                onPress={() => navigation.navigate("MechanicsReviews")}
              >
                <Text value="View all" color={colors.textColor} size={1.4} />
              </TouchableOpacity>
            </View>
            {services.map((t, i) => (
              <Reviews key={t} item={i} length={services.length} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Button
          value="Order Service"
          textColor={colors.appBlack}
          color={colors.yellow}
          style={styles.button}
          // onPress={orderFunction}
        />
        <Button
          value="Message"
          style={styles.button}
          onPress={navigateToChat}
          color="#585CBD"
        />
      </View>
    </View>
  );
};

export default AutoMap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.variant,
    flex: 1, marginBottom: heightRes(12)
  },
  profileImage: {
    width: widthRes(17),
    height: widthRes(17),
    marginTop: heightRes(-6)
  },
  section: {
    marginVertical: heightRes(2),
    marginLeft: heightRes(1)
  },
  brandText: { marginTop: heightRes(0.8) },
  vehicleContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: heightRes(0.5),
    paddingHorizontal: heightRes(2),
    borderColor: colors.textColor
  },
  button: {
    width: "45%",
    borderRadius: 10
  },
  bottomContainer: [
    appStyle.flexRowSpaceCenter,
    {
      padding: heightRes(4),
      position: "absolute",
      bottom: 0,
      backgroundColor: colors.variant,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      width: '100%',
      borderTopWidth: 1,
      borderColor: colors.appBlack
    }
  ]
});
