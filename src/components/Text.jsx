import { StyleSheet, Text as Typo } from "react-native";
import React from "react";
import { fontRes } from "../utils/responsiveness";

const Text = ({ size, color, value, bold, style, bolder, light, ...props }) => {
  return (
    <Typo
      {...props}
      style={{
        color: color ? color : "#000",
        fontSize: size ? fontRes(size) : fontRes(1.8),
        fontFamily: bold
          ? "Poppins_600SemiBold"
          : bolder
          ? "Poppins_700Bold"
          : light
          ? "Poppins_300Light"
          : "Poppins_400Regular",
        textAlign: props.center ? "center" : "auto",
        ...style
      }}
    >
      {value}
    </Typo>
  );
};

export default Text;

const styles = StyleSheet.create({});
