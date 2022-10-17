import { StyleSheet, TextInput } from "react-native";
import React, { useCallback } from "react";
import { colors } from "../../../utils/colors";
import { heightRes } from "../../../utils/responsiveness";

const EditInput = ({ placeholder, setValue, value,style, ...props }) => {
  const changeText = useCallback(
    (text) => {
      setValue(text);
    },
    [value]
  );

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      cursorColor={colors.textColor}
      placeholderTextColor={colors.textColor}
      onChangeText={changeText}
      style={[styles.input, style]}
      {...props}
    />
  );
};

export default EditInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.appBlack,
    borderRadius: 10,
    height: 40,
    marginTop: 4,
    paddingLeft: heightRes(1),
    color: colors.textColor,
    flex: 1
  }
});
