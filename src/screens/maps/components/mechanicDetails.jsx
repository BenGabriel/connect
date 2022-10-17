import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { colors } from "../../../utils/colors";
import Text from "../../../components/Text";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { appStyle } from "../../../utils/appStyle";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import Button from "../../../components/button";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const MechanicDetails = () => {
  const navigation = useNavigation();

  const viewHeight = useSharedValue((height * 35) / 100);
  const detailsShow = useSharedValue("flex");
  const displayCloseIcon = useSharedValue(-1000);

  const clickDetails = () => {
    viewHeight.value = withTiming((height * 90) / 100);
    displayCloseIcon.value = withTiming(0);
    detailsShow.value = "none";
  };
  const closeDetails = () => {
    viewHeight.value = withTiming((height * 35) / 100);
    displayCloseIcon.value = withTiming(-1000);
    detailsShow.value = "flex";
  };

  const tranformHeight = useAnimatedStyle(() => ({
    height: viewHeight.value
  }));

  const displayChevIcon = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: displayCloseIcon.value
      }
    ]
  }));

  const detailsIcon = useAnimatedStyle(() => ({
    display: detailsShow.value
  }));

  const cancelOrder = () => {
    navigation.goBack();
  };

  return (
    <Animated.View style={[styles.bottomContainer, tranformHeight]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.top}>
          <Animated.View
            style={[
              { alignSelf: "center", marginTop: heightRes(0.5) },
              displayChevIcon
            ]}
          >
            <TouchableOpacity onPress={closeDetails}>
              <Ionicons
                name="chevron-down"
                color={colors.appBlack}
                size={widthRes(7)}
              />
            </TouchableOpacity>
          </Animated.View>
          <Text
            value="Arriving in 3mins"
            bolder
            size={3.2}
            color={colors.white}
            style={{ alignSelf: "center", marginBottom: heightRes(2) }}
          />
          <View style={appStyle.flexRowAroundCenter}>
            <View style={styles.det}>
              <View style={styles.imgContainer}>
                <Image
                  source={require("../../../../assets/userimg.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain"
                  }}
                />
              </View>
              <Text value="Andrew" color={colors.textColor} />
            </View>
            <View style={styles.det}>
              <TouchableOpacity style={styles.iconContainer}>
                <Ionicons
                  name="call-outline"
                  color={colors.textColor}
                  size={widthRes(6)}
                />
              </TouchableOpacity>
              <Text value="Contact mechanic" color={colors.textColor} />
            </View>
            <Animated.View style={[styles.det, detailsIcon]}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={clickDetails}
              >
                <Ionicons
                  name="menu"
                  color={colors.textColor}
                  size={widthRes(6)}
                />
              </TouchableOpacity>
              <Text value="Details" color={colors.textColor} />
            </Animated.View>
          </View>

          <View style={styles.toolKit}>
            <FontAwesome5
              name="tools"
              size={widthRes(7)}
              color={colors.yellow}
            />
            <View style={{ flex: 1, marginLeft: heightRes(2) }}>
              <Text value="Autoshop name" bold size={2} color={colors.white} />
              <Text
                value="Stadium road 15b, Lagos, Nigeria"
                color={colors.textColor}
              />
            </View>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.toolItem}>
            <Ionicons
              name="location-outline"
              color={colors.yellow}
              size={widthRes(5)}
            />
            <View style={{ flex: 1, marginLeft: heightRes(2) }}>
              <Text value="Your Location" bold size={2} color={colors.white} />
              <Text
                value="Stadium road 15b, Lagos, Nigeria"
                color={colors.textColor}
              />
            </View>
          </View>
          <View style={styles.toolItem}>
            <Ionicons
              name="cash-outline"
              color={colors.yellow}
              size={widthRes(5)}
            />
            <View style={{ flex: 1, marginLeft: heightRes(2) }}>
              <Text value="Payment method" bold size={2} color={colors.white} />
              <Text value="Cash" color={colors.textColor} />
            </View>
          </View>
          <View style={[styles.toolItem, { paddingBottom: heightRes(2) }]}>
            <FontAwesome5
              name="running"
              color={colors.yellow}
              size={widthRes(5)}
            />
            <View style={{ flex: 1, marginLeft: heightRes(2) }}>
              <Text
                value="Your location is visible to the mechanic"
                size={2}
                color={colors.white}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View>
            <TouchableOpacity
              onPress={cancelOrder}
              style={[styles.bottomIcon, { backgroundColor: "#d9d9d9" }]}
            >
              <Ionicons name="close-sharp" size={widthRes(6)} />
            </TouchableOpacity>
            <Text value="Cancel order" bold color={colors.white} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatScreen")}
              style={[styles.bottomIcon, { backgroundColor: "#585CBD" }]}
            >
              <Ionicons
                name="ios-chatbubble-outline"
                size={widthRes(6)}
                color={colors.white}
              />
            </TouchableOpacity>
            <Text value="Message" bold color={colors.white} />
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default MechanicDetails;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.appBlack,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: (height * 35) / 100
  },
  top: {
    backgroundColor: colors.variant,
    borderRadius: 20,
    paddingHorizontal: heightRes(2),
    height: (height * 35) / 100
  },
  imgContainer: {
    width: widthRes(15),
    height: widthRes(15),
    borderRadius: 1000,
    marginBottom: heightRes(0.8)
  },
  det: { alignItems: "center", width: "45%", display: "flex" },
  iconContainer: {
    width: widthRes(15),
    height: widthRes(15),
    borderRadius: 1000,
    marginBottom: heightRes(0.8),
    backgroundColor: colors.appBlack,
    ...appStyle.flexAllCenter
  },
  toolKit: {
    ...appStyle.flexRowCenter,
    margin: heightRes(2),
    marginTop: heightRes(4)
  },
  toolItem: {
    ...appStyle.flexRowCenter,
    margin: heightRes(1),
    marginHorizontal: heightRes(2),
    padding: heightRes(1),
    borderBottomWidth: 1,
    borderBottomColor: colors.textColor,
    paddingBottom: heightRes(1)
  },
  middle: {
    backgroundColor: colors.variant,
    borderRadius: 20,
    padding: heightRes(2),
    marginVertical: heightRes(3)
  },
  bottom: {
    ...appStyle.flexRowCenter,
    backgroundColor: colors.variant,
    borderRadius: 20,
    padding: heightRes(2),
    justifyContent: "space-around"
  },
  button: {
    borderRadius: 10,
    width: "40%",
    marginHorizontal: heightRes(1)
  },
  bottomIcon: {
    borderRadius: 100,
    width: widthRes(12),
    height: widthRes(12),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: heightRes(1),
    alignSelf: "center"
  }
});
