import { StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "./Text";
import { TextInput } from "react-native-gesture-handler";
import { appStyle } from "../utils/appStyle";
import { colors } from "../utils/colors";
import { heightRes, widthRes } from "../utils/responsiveness";

const Input = ({
  value,
  setValue,
  label,
  icon,
  keyboardType,
  placeholder,
  secure,
  setSecure,
  isSecure
}) => {
  return (
    <View
      style={{
        ...appStyle.flexRowCenter,
        borderBottomWidth: 2,
        borderColor: colors.variant2,
        marginTop: heightRes(3)
      }}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={widthRes(4)}
          color={colors.variant2}
          style={{ padding: 10 }}
        />
      )}
      <View
        style={{
          borderLeftWidth: icon ? 2 : 0,
          flex: 1,
          paddingLeft: heightRes(1),
          borderColor: colors.variant2
        }}
      >
        <Text value={label} color="#8184AA" />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType ? keyboardType : "default"}
          style={{ color: colors.variant2 }}
          secureTextEntry={isSecure}
        />
      </View>
      {secure && (
        <Ionicons
          name={isSecure ? "eye-off-outline" : "eye-outline"}
          size={widthRes(4)}
          color={colors.variant2}
          onPress={() => setSecure(!isSecure)}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
