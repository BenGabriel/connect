import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { appStyle } from "../../../utils/appStyle";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import Text from "../../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const ListItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("AutoMap")}
    >
      <View style={styles.imageContainer} />
      <View style={{ flex: 1, marginLeft: heightRes(1.5) }}>
        <Text value="Company name" color={colors.white} bold />
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
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    ...appStyle.flexRowCenter,
    padding: heightRes(2),
    margin: heightRes(1),
    borderWidth: 0.1,
    borderColor: colors.white,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: colors.variant
  },
  imageContainer: {
    width: widthRes(15),
    height: widthRes(15),
    backgroundColor: colors.appBlack,
    borderRadius: 100
  }
});
