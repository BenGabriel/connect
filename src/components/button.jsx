import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BarIndicator } from "react-native-indicators";
import { colors } from "../utils/colors";
import { heightRes, widthRes } from "../utils/responsiveness";
import Text from "./Text";

const Button = ({
  border,
  color,
  disabled,
  load,
  value,
  textColor,
  style,
  ...props
}) => {
  const buttonStyle = () => {
    if (border) {
      return {
        ...styles.button,
        borderWidth: 2,
        borderColor: color,
        backgroundColor: "transparent"
      };
    } else {
      return {
        ...styles.button,
        backgroundColor: color ? color : colors.primary
      };
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={{
        ...buttonStyle(),
        opacity: disabled ? 0.7 : 1,
        ...style
      }}
      disabled={disabled}
    >
      {load ? (
        <BarIndicator color="white" size={heightRes(2.5)} count={6} />
      ) : (
        <Text
          style={styles.text}
          size={1.8}
          bolder
          color={textColor ? textColor : colors.white}
          value={value}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: widthRes(80),
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  text: {
    textAlign: "center"
  }
});
