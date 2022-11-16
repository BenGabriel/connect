import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text";
import { colors } from "../utils/colors";
import { heightRes, widthRes } from "../utils/responsiveness";
import { appStyle } from "../utils/appStyle";
import { Ionicons } from "@expo/vector-icons";

const Reviews = ({ item, length }) => {
  const value = 3;
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomWidth: item === length - 1 ? 0 : 1
        }
      ]}
    >
      <View style={[appStyle.flexRowCenter, { marginVertical: heightRes(1) }]}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/autoImage.png")}
            style={{ width: "100%", height: "100%", borderRadius: 100 }}
          />
        </View>
        <View style={{ marginLeft: heightRes(2), flex: 1 }}>
          <Text value="Matthew James" color={colors.white} size={1.7} />
          <View style={appStyle.flexRowCenter}>
            {[1, 2, 3, 4, 5].map((t) => (
              <Ionicons
                name={t <= value ? "star" : "star-outline"}
                color={colors.textColor}
              />
            ))}
          </View>
        </View>
        <Text value="3d" color={colors.textColor} size={1.5} />
      </View>
      <Text
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus faucibus laoreet leo. Viverra cursus in aliquam scelerisque sodales ... more"
        color={colors.textColor}
        size={1.7}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    padding: heightRes(1.3),
    borderColor: colors.textColor
  },
  profileImage: {
    width: widthRes(10),
    height: widthRes(10)
  }
});
