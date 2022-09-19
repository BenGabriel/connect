import { StyleSheet, View } from "react-native";
import React from "react";
import { appStyle } from "../../utils/appStyle";
import Text from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import { widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";

const Profile = ({ navigation }) => {
  return (
    <View style={appStyle.container}>
      <Ionicons
        name="chevron-back"
        size={widthRes(7)}
        color={colors.textColor}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
