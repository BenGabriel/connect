import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import Reviews from "../../components/reviews";
import { heightRes, widthRes } from "../../utils/responsiveness";
import Text from "../../components/Text";
import { appStyle } from "../../utils/appStyle";

const MechanicsReviews = () => {
  const services = [...Array(3)];

  return (
    <View style={styles.container}>
      <View style={{ ...appStyle.flexRowCenter, marginVertical: heightRes(1) }}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../../assets/autoImage.png")}
            style={{ width: "100%", height: "100%", borderRadius: 100 }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: heightRes(1.8) }}>
          <Text value="Elite carz" color={colors.white} size={3} bold />
          <Text value="Ratings and Reviews" color={colors.textColor} />
        </View>
      </View>

      <Text value="Reviews" bold color={colors.white} size={2.3} />
      {services.map((t, i) => (
        <Reviews key={i} item={i} length={services.length} />
      ))}
    </View>
  );
};

export default MechanicsReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.variant,
    padding: heightRes(2)
  },
  profileImage: {
    width: widthRes(13),
    height: widthRes(13)
  }
});
