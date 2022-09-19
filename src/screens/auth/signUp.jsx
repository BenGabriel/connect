import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AuthContainer from "../../components/authContainer";
import Header from "./components/header";
import { heightRes } from "../../utils/responsiveness";
import Input from "../../components/input";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button";
import { colors } from "../../utils/colors";

const SignUp = () => {
  const navigation = useNavigation()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  
  return (
    <AuthContainer>
      <View style={styles.container}>
        <Header
          title="Sign Up"
          subtitle="Already have an account ?"
          coloredText=" Login here"
          navigateTo="SignIn"
        />
        <View style={{ marginTop: heightRes(3) }}>
          <Input
            value={name}
            setValue={setName}
            label="NAME"
            icon="person-outline"
            placeholder="Enter your full name"
          />
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
          value="Next"
          style={{
            marginTop: heightRes(10),
          }}
          onPress={() => navigation.navigate("VehicleDetails")}
          border
          textColor={colors.primary}
        />
      </View>
    </AuthContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: heightRes(10),
    alignSelf: "center",
    width: "100%"
  }
});
