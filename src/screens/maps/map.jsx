import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Text from "../../components/Text";
import { colors } from "../../utils/colors";
import { appStyle } from "../../utils/appStyle";

const UserMap = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        // provider={PROVIDER_GOOGLE}
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
      <View
        style={{
          position: "absolute",
          elevation: 10,
          padding: heightRes(2),
          width: "100%"
        }}
      >
        <Text
          value="Swipe to move map"
          style={{
            alignSelf: "center",
            marginTop: heightRes(0.5)
          }}
          bolder
        />
        <Ionicons
          name="menu"
          size={widthRes(7)}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.currentLocation}>
          <Text value="Current location" bold size={2.5} color={colors.white} />
        </View>
        <View style={styles.location}>
          <Ionicons name="location-outline" color={colors.yellow} size={widthRes(7)}/>
          <View style={{marginLeft: heightRes(2)}}>
            <Text value="stadium road abakpa enugu" size={2} color={colors.textColor}/>
            <Text value="enugu nigeria" color={colors.textColor}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserMap;

const styles = StyleSheet.create({
  map: { flex: 1, zIndex: 0 },
  bottomContainer: {
    backgroundColor: colors.variant,
    width: "100%",
    padding: heightRes(2),
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  currentLocation:{
    borderBottomWidth: 1,
    borderBottomColor: colors.textColor,
    padding: heightRes(1),
    paddingLeft: heightRes(2)
  },
  location:{
    ...appStyle.flexRowCenter,
    padding: heightRes(2)
  }
});
