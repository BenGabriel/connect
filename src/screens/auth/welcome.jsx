import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "../../components/Text";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import AuthContainer from "../../components/authContainer";
import Button from "../../components/button";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <AuthContainer welcome>
      <View
        style={{
          position: "absolute",
          bottom: heightRes(10),
          alignSelf: "center"
        }}
      >
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../../assets/welcome.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <View>
          <Text value="Welcome to" size={4.5} bold color={colors.variant2} />
          <Text
            value="Meconnect"
            size={7}
            bolder
            color={colors.variant2}
            style={{ marginTop: heightRes(-1.3) }}
          />
          <Text
            value="We make it easier for you to locate and communicate with autoshops near you"
            size={3}
            color={colors.variant2}
          />
        </View>
        <Button
          value="I'm new here"
          onPress={() => navigation.navigate("SignUp")}
          style={{ marginTop: heightRes(5) }}
          border
          textColor={colors.primary}
        />
        <Text
          value="Sign in"
          size={2.2}
          bolder
          style={{
            textAlign: "center",
            marginVertical: heightRes(1)
          }}
          color={colors.variant2}
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </AuthContainer>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: heightRes(3)
  },
  ImageContainer: {
    alignSelf: "center",
    marginBottom: heightRes(3),
    height: widthRes(70),
    width: widthRes(70)
  }
});
