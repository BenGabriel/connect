import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CompanyDetails from "./components/companyDetails";

const AutoMap = () => {
  const navigation = useNavigation();
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 6.3935288,
          longitude: 7.5029666,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.map}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 6.3935288,
            longitude: 7.5029666
          }}
        />
      </MapView>
      <View style={styles.icon}>
        <Ionicons
          name="menu"
          size={widthRes(7)}
          onPress={() => navigation.toggleDrawer()}
          style={{
            display: displayMenu ? "flex" : "none"
          }}
        />
      </View>
      <CompanyDetails setDisplayMenu={setDisplayMenu} />
    </View>
  );
};

export default AutoMap;

const styles = StyleSheet.create({
  map: { flex: 1, zIndex: 0 },
  icon: {
    position: "absolute",
    elevation: 10,
    padding: heightRes(2),
    width: "100%"
  }
});
