import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { heightRes, widthRes } from "../utils/responsiveness";

const AuthContainer = (props) => {
  if (props.welcome) {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/appback.png")}
        imageStyle={{
          position: "absolute",
          top: heightRes(-20),
          left: widthRes(0)
        }}
      >
        {props.children}
      </ImageBackground>
    );
  } else {
    return <View style={styles.container}>{props.children}</View>;
  }
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: heightRes(3),
    backgroundColor: "#E1E2FF"
  }
});
