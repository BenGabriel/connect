import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { appStyle } from "../../utils/appStyle";
import Text from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import Button from "../../components/button";
import EditInput from "./components/editInput";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carName, setCarName] = useState("");
  const [carColour, setCarColour] = useState("");
  const [carNo, setCarNo] = useState("");
  const [carNin, setCarNin] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  return (
    <View style={appStyle.container}>
      <Ionicons
        name="chevron-back"
        size={widthRes(7)}
        color={colors.textColor}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{ flex: 1, padding: heightRes(2) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.textContainer}>
          <Text value="Name" size={2.4} bold color={colors.white} />
          <EditInput placeholder="ben" setValue={setName} value={name} />
        </View>
        <View style={styles.textContainer}>
          <Text value="Phone number" size={2.4} bold color={colors.white} />
          <EditInput
            placeholder="+234 808 780 957"
            setValue={setPhone}
            value={phone}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.textContainer}>
          <Text value="Email Address" size={2.4} bold color={colors.white} />
          <EditInput
            placeholder="ben@ben.com"
            setValue={setEmail}
            value={email}
          />
        </View>
        <View style={styles.textContainer}>
          <Text value="Car Details" size={2.4} bold color={colors.white} />
          <View style={[appStyle.flexRowCenter, styles.carDetails]}>
            <Text value="Name : " color={colors.textColor} />
            <EditInput setValue={setCarName} value={carName} />
          </View>
          <View style={[appStyle.flexRowCenter, styles.carDetails]}>
            <Text value="Colour : " color={colors.textColor} />
            <EditInput setValue={setCarColour} value={carColour} />
          </View>
          <View style={[appStyle.flexRowCenter, styles.carDetails]}>
            <Text value="Vehicle NIN : " color={colors.textColor} />
            <EditInput setValue={setCarNin} value={carNin} />
          </View>
          <View style={[appStyle.flexRowCenter, styles.carDetails]}>
            <Text value="Vehicle reg no : " color={colors.textColor} />
            <EditInput setValue={setCarNo} value={carNo} />
          </View>
        </View>
        <View style={[styles.textContainer, { marginBottom: 40 }]}>
          <Text
            value="Emergency contact"
            size={2.4}
            bold
            color={colors.white}
          />
          <EditInput
            placeholder="+234 808 780 957"
            setValue={setEmergencyContact}
            value={emergencyContact}
            keyboardType="numeric"
          />
        </View>
        <Button
          value="Done"
          border
          color={colors.textColor}
          textColor={colors.textColor}
          style={{marginBottom: 30, borderRadius: 100}}
        />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    width: widthRes(26),
    height: widthRes(26),
    marginBottom: heightRes(1)
  },
  icon: {
    backgroundColor: colors.appBlack,
    padding: 5,
    borderRadius: 100,
    position: "absolute",
    right: 5,
    bottom: 40
  },
  button: {
    borderRadius: 100,
    width: "50%",
    alignSelf: "flex-start",
    marginTop: heightRes(3),
    marginBottom: heightRes(2)
  },
  textContainer: {
    marginTop: heightRes(2.5)
  },
  carDetails: {
    backgroundColor: colors.appBlack,
    borderRadius: 10,
    marginBottom: 3,
    paddingLeft: 7,
  }
});
