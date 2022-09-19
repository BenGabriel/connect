import { StyleSheet, View } from "react-native";
import React from "react";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { appStyle } from "../../../utils/appStyle";
import { colors } from "../../../utils/colors";
import Text from "../../../components/Text";
import { Ionicons } from "@expo/vector-icons";

const CompanyDescription = () => {
  return (
    <View style={appStyle.flexRowCenter}>
      <View style={styles.imageContainer} />
      <View style={{ flex: 1, marginLeft: heightRes(1.8) }}>
        <Text value="Company name" color={colors.white} bold size={2} />
        <View style={appStyle.flexRowSpaceCenter}>
          <Text value="Addresss" color={colors.white} size={1.6} />
          <Text value="5km away" color={colors.white} size={1.6} />
        </View>
        <View style={appStyle.flexRowCenter}>
          <Text value="4.8 " color={colors.textColor} size={1.6} />
          <Ionicons
            name="star-outline"
            color={colors.textColor}
            size={widthRes(3)}
            style={{ marginTop: -3 }}
          />
        </View>
      </View>
    </View>
  );
};

export default CompanyDescription;

const styles = StyleSheet.create({
  imageContainer: {
    width: widthRes(17),
    height: widthRes(17),
    backgroundColor: colors.appBlack,
    borderRadius: 100
  }
});
