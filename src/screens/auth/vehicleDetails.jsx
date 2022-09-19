import { StyleSheet, View } from "react-native";
import AuthContainer from "../../components/authContainer";
import Header from "./components/header";
import { heightRes } from "../../utils/responsiveness";
import Input from "../../components/input";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../../utils/colors";
import Text from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button";

const VehicleDetails = () => {
  const navigation = useNavigation()
  const [vehicleName, setVehicleName] = useState("");
  const [plateNum, setPlateNum] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: "GREY",
      value: "GREY"
    },
    { label: "BLACK", value: "BLACK" }
  ];
  return (
    <AuthContainer>
      <View style={styles.container}>
        <Header
          title="Vehicle detail"
          subtitle="Help us identify your vehicle"
        />
        <View style={{ marginTop: heightRes(3) }}>
          <Input
            value={vehicleName}
            setValue={setVehicleName}
            label="VEHICLE NAME"
            placeholder="Enter your vehicle name"
          />
          <View
            style={{ marginTop: heightRes(2), marginBottom: heightRes(-1) }}
          >
            <Text
              value="VEHICLE COLOR"
              color="#8184AA"
              style={{ paddingLeft: heightRes(1) }}
            />
            <DropDownPicker
              dropDownContainerStyle={{
                backgroundColor: colors.white
              }}
              placeholder="Select Vehicle Color"
              textStyle={styles.textStyle}
              value={vehicleColor}
              open={open}
              setOpen={setOpen}
              items={items}
              setValue={setVehicleColor}
              onSelectItem={(item) => {
                setVehicleColor(item.value);
              }}
              style={{
                backgroundColor: "#E1E2FF",
                borderWidth: 1.5,
                borderColor: colors.variant2
              }}
            />
          </View>
          <Input
            value={plateNum}
            setValue={setPlateNum}
            label="PLATE NUMBER"
            placeholder="Enter your plate number"
          />
        </View>
        <Button
          value="DONE"
          style={{
            width: "90%",
            marginTop: heightRes(10),
            alignSelf: "center"
          }}
          onPress={() => navigation.navigate("App")}
          border
          textColor={colors.primary}
        />
      </View>
    </AuthContainer>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: heightRes(10),
    alignSelf: "center",
    width: "100%"
  }
});
