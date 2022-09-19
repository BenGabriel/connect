import { StyleSheet, View } from "react-native";
import React from "react";
import { appStyle } from "../../../utils/appStyle";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { colors } from "../../../utils/colors";
import Text from "../../../components/Text";

const Services = () => {
  return (
    <View style={{...appStyle.flexRowCenter, marginVertical: heightRes(1)}}>
      <View style={styles.imageContainer} />
      <View style={{ flex: 1, marginLeft: heightRes(1.8) }}>
        <Text value="service rendered" color={colors.white} bold />
        <Text value="price" color={colors.white} size={1.4} />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  imageContainer: {
    width: widthRes(12),
    height: widthRes(12),
    backgroundColor: colors.appBlack,
    borderRadius: 100
  }
});
