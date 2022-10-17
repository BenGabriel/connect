import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "../../components/Text";
import { heightRes, widthRes } from "../../utils/responsiveness";
import { colors } from "../../utils/colors";
import AuthContainer from "../../components/authContainer";
import Button from "../../components/button";
import { appStyle } from "../../utils/appStyle";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <AuthContainer welcome>
      <View
        style={{
          position: "absolute",
          bottom: heightRes(10),
          alignSelf: "center",
          paddingHorizontal: heightRes(3)
        }}
      >
        <View>
          <View style={appStyle.flexRowCenter}>
            <Text value="Locate " size={4.3} bold color={colors.variant2} />
            <Text value="and" size={4.3} color={colors.variant2} />
          </View>
          <Text
            value="communicate "
            size={4.3}
            bold
            color={colors.variant2}
            style={{ marginTop: heightRes(-1.5) }}
          />
          <Text
            value="with autoshops near you"
            size={4.3}
            color={colors.variant2}
            style={{ marginTop: heightRes(-1.5) }}
          />
        </View>
        <Button
          value="I'm new here"
          onPress={() => navigation.navigate("SignUp")}
          style={{ marginTop: heightRes(5) }}
          textColor={colors.white}
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
