import { StyleSheet, View } from "react-native";
import React from "react";
import { appStyle } from "../../../utils/appStyle";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { colors } from "../../../utils/colors";
import Text from "../../../components/Text";

const Services = () => {
  return (
    <View style={{ ...appStyle.flexRowCenter, marginVertical: heightRes(0.5) }}>
      <View style={styles.imageContainer} />
      <View style={{ flex: 1, marginLeft: heightRes(1.8) }}>
        <Text value="Service rendered" color={colors.textColor} />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  imageContainer: {
    width: widthRes(1.2),
    height: widthRes(1.2),
    backgroundColor: colors.textColor,
    borderRadius: 100
  }
});
