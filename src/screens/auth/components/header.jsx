import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/Text";
import { appStyle } from "../../../utils/appStyle";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { heightRes } from "../../../utils/responsiveness";

const Header = ({ title, subtitle, coloredText, navigateTo }) => {
  const { navigate } = useNavigation();
  return (
    <View style={{marginTop: heightRes(3)}}>
      <Text value={title} bold size={5} color={colors.variant2} />
      <View style={appStyle.flexRowCenter}>
        <Text value={subtitle} size={2} color={colors.variant2} />
        {coloredText && (
          <Text
            value={coloredText}
            color={colors.red}
            size={2}
            onPress={() => navigate(navigateTo)}
          />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
