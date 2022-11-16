import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text";
import { colors } from "../../../utils/colors";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { appStyle } from "../../../utils/appStyle";

const Mechanics = () => {
  return (
    <View style={{ ...appStyle.flexRowCenter, marginVertical: heightRes(1) }}>
      <View style={styles.imageContainer} />
      <View style={{ flex: 1, marginLeft: heightRes(1.8) }}>
        <Text value="Company name" color={colors.white} />
        <Text value="Role: Electrician" color={colors.textColor} size={1.4}/>
      </View>
    </View>
  );
};

export default Mechanics;

const styles = StyleSheet.create({
  imageContainer: {
    width: widthRes(10),
    height: widthRes(10),
    backgroundColor: colors.appBlack,
    borderRadius: 10
  }
});
