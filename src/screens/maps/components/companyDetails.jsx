import { Dimensions, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import Text from "../../../components/Text";
import { colors } from "../../../utils/colors";
import { appStyle } from "../../../utils/appStyle";
import CompanyDescription from "./companyDescription";
import Services from "./services";
import { Ionicons } from "@expo/vector-icons";
import {
  Directions,
  FlingGestureHandler,
  ScrollView
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import Mechanics from "./mechanics";
import Button from "../../../components/button";
import { heightRes, widthRes } from "../../../utils/responsiveness";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const CompanyDetails = ({ setDisplayMenu, displayMenu }) => {
  const navigation = useNavigation();
  const services = [...Array(3)];
  const scrollRef = useRef();
  const viewHeight = useSharedValue((height * 43) / 100);
  const flingGesture = useAnimatedGestureHandler({
    onActive: () => {
      viewHeight.value = withTiming((height * 95) / 100);
      runOnJS(setDisplayMenu)(false);
    }
  });
  const flingGesture2 = useAnimatedGestureHandler({
    onActive: () => {
      viewHeight.value = withTiming((height * 43) / 100);
      runOnJS(setDisplayMenu)(true);
    }
  });

  const tranformHeight = useAnimatedStyle(() => ({
    height: viewHeight.value
  }));

  //order function
  const orderFunction = () => {
    viewHeight.value = withTiming((height * 43) / 100);
    setDisplayMenu(true);
    navigation.navigate("OrderScreen");
  };

  //chat navigation
  const navigateToChat = () => {
    viewHeight.value = withTiming((height * 43) / 100);
    setDisplayMenu(true);
    navigation.navigate("ChatScreen");
  };
  return (
    <FlingGestureHandler
      direction={Directions.DOWN}
      onHandlerStateChange={flingGesture2}
      simultaneousHandlers={scrollRef}
    >
      <Animated.View style={[styles.bottomContainer, tranformHeight]}>
        <FlingGestureHandler
          direction={Directions.UP}
          onHandlerStateChange={flingGesture}
          simultaneousHandlers={scrollRef}
        >
          <Animated.View style={[styles.bottomContainer, tranformHeight]}>
            <View style={styles.line} />
            <ScrollView
              ref={scrollRef}
              style={{ flex: 1, padding: heightRes(2) }}
              showsVerticalScrollIndicator={false}
            >
              <CompanyDescription />
              <View style={styles.section}>
                <Text value="About Us" bold color={colors.white} size={2.3} />
                <Text
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus faucibus laoreet leo. Viverra cursus in aliquam scelerisque sodales ... more"
                  color={colors.textColor}
                />
              </View>
              <View style={styles.section}>
                <Text
                  value="Vehicle Brands"
                  bold
                  color={colors.white}
                  size={2.3}
                />
                <View style={appStyle.flexRowCenter}>
                  {services.map((t) => (
                    <View style={styles.vehicleContainer}>
                      <Text
                        value="Toyota"
                        color={colors.textColor}
                        size={1.4}
                      />
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.section}>
                <Text
                  value="Our services"
                  bold
                  color={colors.white}
                  size={2.3}
                />
                {services.map((t) => (
                  <Services key={t} />
                ))}
              </View>
              <View style={styles.section}>
                <Text value="Mechanics" bold color={colors.white} size={2.3} />
                {services.map((t) => (
                  <Mechanics key={t} />
                ))}
              </View>
              {!displayMenu && (
                <View
                  style={[
                    appStyle.flexRowSpaceCenter,
                    { marginBottom: heightRes(2) }
                  ]}
                >
                  <Button
                    value="Order Service"
                    textColor={colors.appBlack}
                    color={colors.yellow}
                    style={styles.button}
                    onPress={orderFunction}
                  />
                  <Button
                    value="Message"
                    style={styles.button}
                    onPress={navigateToChat}
                    color="#585CBD"
                  />
                </View>
              )}
            </ScrollView>
          </Animated.View>
        </FlingGestureHandler>
      </Animated.View>
    </FlingGestureHandler>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.variant,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: (height * 43) / 100
  },
  line: {
    width: widthRes(10),
    height: 8,
    borderRadius: 20,
    backgroundColor: colors.appBlack,
    alignSelf: "center",
    marginVertical: heightRes(2)
  },
  section: {
    marginVertical: heightRes(2),
    marginLeft: heightRes(1)
  },
  vehicleContainer: {
    borderWidth: 1,
    borderRadius: 100,
    padding: heightRes(0.5),
    paddingHorizontal: heightRes(3),
    borderColor: colors.textColor,
    margin: heightRes(1),
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "45%",
    borderRadius: 10
  }
});
