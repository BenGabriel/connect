import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../components/Text";
import { colors } from "../utils/colors";
import { heightRes, widthRes } from "../utils/responsiveness";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const AppStack = ({ navigation }) => {
  const data = [
    { name: "Payment Method", navigate: "" },
    { name: "Current Order", navigate: "OrderScreen" },
    { name: "Order History", navigate: "OrderHistory" },
    { name: "Settings", navigate: "Profile" },
    { name: "About", navigate: "" },
    { name: "Sign out" }
  ];

  const navigateTo = (nav) => {
    navigation.toggleDrawer();
    navigation.navigate(nav);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.topImage} onPress={() => navigateTo("MainApp")}>
        <View style={styles.image}>
          <Image
            source={require("../../assets/userimg.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          value="Anna Roberts"
          size={2.5}
          color={colors.white}
          bold
          style={{ marginTop: 10 }}
        />
      </Pressable>

      {data.map((t) => (
        <Pressable
          key={t.name}
          style={styles.item}
          onPress={() =>
            t.name === "Sign out"
              ? navigation.navigate("Auth", {
                  screen: "SignIn"
                })
              : navigateTo(t.navigate)
          }
        >
          <Text value={t.name} color={colors.textColor} size={2.3} bold />
        </Pressable>
      ))}
    </View>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.primary,
    paddingLeft: 20,
    paddingTop: heightRes(10)
  },
  topImage: {
    alignSelf: "center",
    marginBottom: heightRes(5),
    alignItems: "center"
  },
  image: {
    width: widthRes(20),
    height: widthRes(20),
    borderRadius: 100
  },
  item: {
    width: "100%",
    paddingVertical: heightRes(2)
  }
});
