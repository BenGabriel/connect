import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Text from "../../components/Text";
import { colors } from "../../utils/colors";
import React, { useState } from "react";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { appStyle } from "../../utils/appStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Search from "./search";
import DropDownPicker from "react-native-dropdown-picker";

const MainApp = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [vehicle, setVehicle] = useState("");
  const [open, setOpen] = useState(false);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [vehicleType, setVehicleType] = useState("");

  const items = [
    {
      label: "TOYOTA",
      value: "TOYOTA"
    },
    { label: "MERCEDES BENZ", value: "MERCEDES BENZ" }
  ];

  const handleSearch = () => {
    setVisible(true);
    setTimeout(() => {
      navigation.navigate("AutoShopList");
      setVisible(false);
    }, 10000);
  };
  return (
    <ScrollView style={appStyle.container} showsVerticalScrollIndicator={false}>
      <View style={[appStyle.flexRowSpaceCenter, { marginTop: heightRes(2) }]}>
        <Ionicons
          name="menu"
          color={colors.textColor}
          size={widthRes(7)}
          onPress={() => navigation.toggleDrawer()}
        />
        <View style={appStyle.flexRowCenter}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={{ marginRight: heightRes(4) }}
          >
            <Ionicons
              name="map-outline"
              size={widthRes(5)}
              color={colors.textColor}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Map")}>
            <Ionicons
              name="chatbox-outline"
              size={widthRes(5)}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* location */}
      <View style={styles.locationContainer}>
        <Text
          value="To get your location click map"
          color={colors.textColor}
          light
        />
        <View style={styles.location}>
          <Text
            value="18 usco gariki"
            color={colors.textColor}
            light
            size={1.6}
          />
        </View>
      </View>

      {/* type of vehicle */}

      <View style={styles.vehicleBrandContainer}>
        <Text value="Type of vehicle" color={colors.textColor} light />
        <DropDownPicker
          placeholder={`${items[0].label}`}
          textStyle={{ color: colors.textColor }}
          value={vehicleType}
          open={openVehicle}
          setOpen={setOpenVehicle}
          items={items}
          setValue={setVehicleType}
          onSelectItem={(item) => {
            setVehicleType(item.value);
          }}
          style={styles.dropdown}
          flatListProps={{
            nestedScrollEnabled: true
          }}
          placeholderStyle={{
            color: colors.textColor
          }}
          ArrowDownIconComponent={() => (
            <Ionicons
              name="chevron-down"
              color={colors.textColor}
              size={widthRes(4)}
            />
          )}
          ArrowUpIconComponent={() => (
            <Ionicons
              name="chevron-up"
              color={colors.textColor}
              size={widthRes(4)}
            />
          )}
          dropDownDirection="TOP"
        />
      </View>
      {/* vehicle brand */}
      <View style={styles.vehicleBrandContainer}>
        <Text value="Vehicle Brand" color={colors.textColor} light />
        <DropDownPicker
          placeholder={`${items[0].label}`}
          textStyle={{ color: colors.textColor }}
          value={vehicle}
          open={open}
          setOpen={setOpen}
          items={items}
          setValue={setVehicle}
          onSelectItem={(item) => {
            setVehicle(item.value);
          }}
          style={styles.dropdown}
          flatListProps={{
            nestedScrollEnabled: true
          }}
          placeholderStyle={{
            color: colors.textColor
          }}
          ArrowDownIconComponent={() => (
            <Ionicons
              name="chevron-down"
              color={colors.textColor}
              size={widthRes(4)}
            />
          )}
          ArrowUpIconComponent={() => (
            <Ionicons
              name="chevron-up"
              color={colors.textColor}
              size={widthRes(4)}
            />
          )}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: heightRes(6) }}>
        <Text
          value="Tap to find autoshop nearby"
          color={colors.textColor}
          size={2.2}
        />
        <ImageBackground
          source={require("../../../assets/circle.png")}
          style={styles.buttonContainer}
        >
          <TouchableOpacity style={styles.button} onPress={handleSearch} />
        </ImageBackground>
      </View>
      <Modal visible={visible} animationType="slide" style={{ flex: 1 }}>
        <Search setVisible={setVisible} />
      </Modal>
    </ScrollView>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  locationContainer: {
    alignItems: "center",
    marginTop: heightRes(8)
  },
  location: {
    backgroundColor: colors.variant,
    width: "90%",
    alignItems: "center",
    padding: heightRes(1.6),
    marginVertical: heightRes(1.5),
    borderRadius: 10
  },
  vehicleBrandContainer: {
    marginVertical: heightRes(2),
    width: "90%",
    alignSelf: "center",
    marginBottom: heightRes(1)
  },
  dropdown: {
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.textColor,
    marginTop: 5,
  },
  buttonContainer: {
    width: widthRes(55),
    height: widthRes(55),
    marginVertical: heightRes(2),
    borderRadius: 1000,
    backgroundColor: "rgba(47, 49, 73, 0.5)",
    padding: heightRes(2)
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    backgroundColor: "#4A4C6C",
    elevation: 10
  }
});
