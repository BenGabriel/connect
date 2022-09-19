import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BarIndicator } from "react-native-indicators";
import { colors } from "../utils/colors";
import { heightRes, widthRes } from "../utils/responsiveness";
import Text from "./Text";

const Button = (props) => {
  const buttonStyle = () => {
    if (props.border) {
      return {
        ...styles.button,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: "transparent"
      };
    } else {
      return {
        ...styles.button,
        backgroundColor: props.color ? props.color : colors.primary
      };
    }
  };
  
  return (
    <TouchableOpacity
      {...props}
      style={{
        ...buttonStyle(),
        opacity: props.disabled ? 0.7 : 1,
        ...props.style
      }}
      disabled={props.disabled}
    >
      {props.load ? (
        <BarIndicator color="white" size={heightRes(2.5)} count={6} />
      ) : (
        <Text
          style={styles.text}
          size={1.8}
          bolder
          color={props.textColor ? props.textColor : colors.white}
          value={props.value}
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
    borderRadius: 100,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center"
  },
  text: {
    textAlign: "center"
  }
});
