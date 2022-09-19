import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import Text from "../../components/Text";
import * as Progress from "react-native-progress";
import { appStyle } from "../../utils/appStyle";

const Search = ({ setVisible }) => {
  return (
    <View style={appStyle.container}>
      <Pressable
        style={{ ...appStyle.flexRowCenter, padding: heightRes(1) }}
        onPress={() => setVisible(false)}
      >
        <Ionicons
          name="close-circle-outline"
          color={colors.textColor}
          size={widthRes(7)}
        />
        <Text
          value="Cancel Search"
          size={2.2}
          color={colors.textColor}
          style={{ marginLeft: heightRes(1) }}
        />
      </Pressable>

      <View style={{ marginVertical: heightRes(15), alignItems: "center" }}>
        <Progress.Circle
          size={widthRes(60)}
          indeterminate={true}
          color="#7476A3"
          borderWidth={10}
          direction="counter-clockwise"
          indeterminateAnimationDuration={3000}
          endAngle={0.6}
          strokeCap="round"
        >
          <View style={styles.button} />
        </Progress.Circle>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          value="Searching for autoshop near you"
          size={2.7}
          color={colors.textColor}
          bold
        />
        <Text
          value="Make sure your location access is turned on"
          color={colors.textColor}
          light
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: heightRes(2)
  },
  button: {
    width: widthRes(50),
    height: widthRes(50),
    borderRadius: 1000,
    backgroundColor: "#7476A3",
    elevation: 10,
    position: "absolute",
    alignSelf: "center",
    top: widthRes(5)
  }
});
