import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { appStyle } from "../../../utils/appStyle";
import Text from "../../../components/Text";
import { useNavigation } from "@react-navigation/native";

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        color={colors.textColor}
        size={widthRes(7)}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/userimg.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text value="Greg" bold size={2.4} color={colors.white} />
        <Text value="online" light color={colors.white} size={1.4} />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    ...appStyle.flexRowCenter,
    backgroundColor: colors.variant,
    padding: heightRes(2)
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "contain"
  },
  imageContainer: {
    height: widthRes(12),
    width: widthRes(12),
    marginLeft: heightRes(3)
  },
  textContainer: {
    marginLeft: heightRes(1.5)
  }
});
