import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AuthContainer from "../../components/authContainer";
import { heightRes } from "../../utils/responsiveness";
import Header from "./components/header";
import Button from "../../components/button";
import Input from "../../components/input";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import { colors } from "../../utils/colors";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  return (
    <AuthContainer>
      <View style={styles.container}>
        <Header
          title="Sign In"
          subtitle="I'm new here. "
          coloredText="Create account"
          navigateTo="SignUp"
        />
        <View style={{ marginTop: heightRes(3) }}>
          <Input
            value={email}
            setValue={setEmail}
            label="EMAIL"
            icon="mail-outline"
            placeholder="Enter your Email"
          />
          <Input
            value={phone}
            setValue={setPhone}
            label="PHONE NUMBER"
            icon="call-outline"
            placeholder="+234 ----------"
          />
          <Input
            value={password}
            setValue={setPassword}
            label="PASSWORD"
            icon="key-outline"
            placeholder=""
            isSecure={secure}
            secure
            setSecure={setSecure}
          />
        </View>
        <Button
          value="Log in"
          style={{
            marginTop: heightRes(10)
          }}
          border
          onPress={() => navigation.navigate("App")}
          textColor={colors.primary}
        />
      </View>
    </AuthContainer>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: heightRes(10),
    alignSelf: "center",
    width: "100%"
  }
});
